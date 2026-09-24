import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import {
  Publication,
  EventBrief,
  Project,
  Seminar,
  ResearchPillar,
  LabOverview,
  SocialPost,
} from '../types';

import {
  getPublications,
  getEvents,
  getPeople,
  getProjects,
  getSeminars,
  getResearchPillars,
  getLabOverview,
  getSocialPosts,
} from '../repositories';
import { RawPeopleData } from '../services/supabaseService';

interface DataContextType {
  publications: Publication[];
  topicPublications: Publication[];
  events: EventBrief[];
  people: RawPeopleData;
  projects: Project[];
  seminars: Seminar[];
  pillars: ResearchPillar[];
  overview: LabOverview;
  socialPosts: SocialPost[];
  isLive: boolean;
  isLoading: boolean;
  error: string | null;
  refreshAll: () => Promise<void>;
}

const initialPubs = getPublications();
const initialPeople = getPeople() as unknown as RawPeopleData;
const initialOverview = getLabOverview();
const initialPillars = getResearchPillars();
const initialProjects = getProjects();
const initialEvents = getEvents();
const initialSeminars = getSeminars();
const initialSocial = getSocialPosts();

const DataContext = createContext<DataContextType>({
  publications: initialPubs,
  topicPublications: initialPubs,
  events: initialEvents,
  people: initialPeople,
  projects: initialProjects,
  seminars: initialSeminars,
  pillars: initialPillars,
  overview: initialOverview,
  socialPosts: initialSocial,
  isLive: true,
  isLoading: false,
  error: null,
  refreshAll: async () => {},
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [publications, setPublications] = useState<Publication[]>(initialPubs);
  const [topicPublications, setTopicPublications] = useState<Publication[]>(initialPubs);
  const [events, setEvents] = useState<EventBrief[]>(initialEvents);
  const [people, setPeople] = useState<RawPeopleData>(initialPeople);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [seminars, setSeminars] = useState<Seminar[]>(initialSeminars);
  const [pillars, setPillars] = useState<ResearchPillar[]>(initialPillars);
  const [overview, setOverview] = useState<LabOverview>(initialOverview);
  const [socialPosts, setSocialPosts] = useState<SocialPost[]>(initialSocial);
  const [isLive] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refreshAll = useCallback(async () => {
    try {
      setError(null);
      const pubs = getPublications();
      const ppl = getPeople() as unknown as RawPeopleData;
      const ov = getLabOverview();
      const pils = getResearchPillars();
      const projs = getProjects();
      const evts = getEvents();
      const sems = getSeminars();
      const soc = getSocialPosts();

      setPublications(pubs);
      setTopicPublications(pubs);
      setPeople(ppl);
      setOverview(ov);
      setPillars(pils);
      setProjects(projs);
      setEvents(evts);
      setSeminars(sems);
      setSocialPosts(soc);
    } catch (err) {
      console.warn('DataContext error:', err);
      setError('Unable to load SATLab data.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAll();
  }, [refreshAll]);

  return (
    <DataContext.Provider
      value={{
        publications,
        topicPublications,
        events,
        people,
        projects,
        seminars,
        pillars,
        overview,
        socialPosts,
        isLive,
        isLoading,
        error,
        refreshAll,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
export const usePublications = () => useContext(DataContext).publications;
export const useTopicPublications = () => useContext(DataContext).topicPublications;
export const useEvents = () => useContext(DataContext).events;
export const usePeople = () => useContext(DataContext).people;
export const useProjects = () => useContext(DataContext).projects;
export const useSeminars = () => useContext(DataContext).seminars;
export const useResearchPillars = () => useContext(DataContext).pillars;
export const useLabOverview = () => useContext(DataContext).overview;
export const useSocialPosts = () => useContext(DataContext).socialPosts;
