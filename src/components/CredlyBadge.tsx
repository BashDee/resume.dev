'use client';

import React, { useEffect } from 'react';

const EMBED_SRC = 'https://cdn.credly.com/assets/utilities/embed.js';

interface CredlyBadgeProps {
  badgeId: string;
  host?: string;
  width?: number;
  height?: number;
}

export const CredlyBadge: React.FC<CredlyBadgeProps> = ({
  badgeId,
  host = 'https://www.credly.com',
  width = 150,
  height = 270,
}) => {
  useEffect(() => {
    // Credly's script scans the DOM once on load, so remove any previous copy
    // and re-inject it after this div has mounted to force a rescan.
    document
      .querySelectorAll(`script[src="${EMBED_SRC}"]`)
      .forEach((s) => s.remove());

    const script = document.createElement('script');
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [badgeId]);

  return (
    <div
      className="flex items-center justify-center rounded-lg bg-white/5 p-2"
      style={{ minWidth: width, minHeight: height }}
    >
      <div
        data-iframe-width={width}
        data-iframe-height={height}
        data-share-badge-id={badgeId}
        data-share-badge-host={host}
      />
    </div>
  );
};