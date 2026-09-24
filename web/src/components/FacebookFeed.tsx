import React, { useState } from 'react';
import { Icon } from './Icon';

interface FacebookFeedProps {
  className?: string;
  height?: number;
}

export const FacebookFeed: React.FC<FacebookFeedProps> = ({
  className = '',
  height = 700,
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const fanpageUrl = 'https://www.facebook.com/satlab.uet/';
  const embedUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
    fanpageUrl
  )}&tabs=timeline&width=500&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <div
      className={`rounded-3xl border border-sky-200/90 bg-white/95 p-5 sm:p-6 shadow-soft backdrop-blur-md flex flex-col ${className}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1877F2] text-white shadow-sm shadow-[#1877F2]/30">
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-editorial text-base font-bold text-slate-950 leading-none">
                SATLab UET Fanpage
              </h3>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" title="Live stream active" />
            </div>
            <p className="font-mono text-xs text-slate-500 mt-1">@satlab.uet · Live Feed</p>
          </div>
        </div>

        <a
          href={fanpageUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl bg-sky-50 border border-sky-200 px-3 py-1.5 font-editorial text-xs font-bold text-sky-800 hover:bg-sky-100 transition focus-ring"
        >
          <span>Follow Page</span>
          <Icon name="open_in_new" className="h-3 w-3" />
        </a>
      </div>

      {/* Live Notice */}
      <div className="mb-4 rounded-xl bg-slate-50 border border-slate-200/70 px-3.5 py-2 text-[11px] font-editorial text-slate-600 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Real-time posts stream directly from Facebook</span>
        </span>
        <a
          href={fanpageUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sky-700 hover:underline font-semibold"
        >
          Open Facebook ↗
        </a>
      </div>

      {/* Embedded Facebook Page Plugin Frame */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 flex items-center justify-center"
        style={{ minHeight: `${height}px` }}
      >
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-50 text-slate-400 font-editorial text-xs">
            <div className="h-6 w-6 rounded-full border-2 border-sky-600 border-t-transparent animate-spin" />
            <span>Connecting to Facebook live feed...</span>
          </div>
        )}
        <iframe
          src={embedUrl}
          width="100%"
          height={height}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          onLoad={() => setIframeLoaded(true)}
          title="SATLab UET Official Facebook Fanpage"
          className="w-full rounded-2xl"
        />
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>VNU-UET Satisfiability &amp; Reasoning Lab</span>
        <a
          href="https://m.me/satlab.uet"
          target="_blank"
          rel="noreferrer"
          className="text-sky-700 hover:text-sky-900 font-semibold"
        >
          Send Message ↗
        </a>
      </div>
    </div>
  );
};
