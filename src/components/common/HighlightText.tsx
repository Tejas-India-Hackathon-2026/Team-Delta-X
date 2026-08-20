import React from 'react';

interface HighlightTextProps {
  text: string;
  query: string;
  className?: string;
  highlightClassName?: string;
}

export const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  query,
  className = '',
  highlightClassName = 'bg-amber-100 text-amber-900 font-semibold px-0.5 rounded'
}) => {
  if (!query || !query.trim() || !text) {
    return <span className={className}>{text}</span>;
  }

  const cleanQuery = query.trim().replace(/[.*+?^$${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${cleanQuery})`, 'gi');
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className={highlightClassName}>
            {part}
          </mark>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </span>
  );
};
