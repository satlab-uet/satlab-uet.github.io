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
      className={`rounded-3xl border border-slate-200/90 bg-white/95 p-4 sm:p-5 shadow-soft backdrop-blur-md flex flex-col ${className}`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#1877F2] text-white shadow-sm shadow-[#1877F2]/25">
            <svg
              className="h-4.5 w-4.5 fill-current"
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
            <h3 className="font-editorial text-sm font-bold text-slate-950 leading-none">
              SATLab UET
            </h3>
            <p className="font-mono text-[11px] text-slate-500 mt-1">@satlab.uet</p>
          </div>
        </div>

        <a
          href={fanpageUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-xl bg-sky-50 border border-sky-200 px-3 py-1 font-editorial text-xs font-semibold text-sky-800 hover:bg-sky-100 transition focus-ring"
        >
          <span>Follow</span>
          <Icon name="open_in_new" className="h-3 w-3" />
        </a>
      </div>

      {/* Embedded Facebook Page Plugin Frame */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 flex items-center justify-center"
        style={{ minHeight: `${height}px` }}
      >
        {!iframeLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
            <div className="h-6 w-6 rounded-full border-2 border-sky-600 border-t-transparent animate-spin" />
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
          title="SATLab UET Facebook Fanpage"
          className="w-full rounded-2xl"
        />
      </div>
    </div>
  );
};
