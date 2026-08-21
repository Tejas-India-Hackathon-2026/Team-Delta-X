import React, { useState } from 'react';
import { Package, ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  categorySlug?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  categorySlug,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const defaultFallback =
    fallbackSrc ||
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80';

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-slate-300 animate-bounce" />
        </div>
      )}
      <img
        src={hasError ? defaultFallback : src}
        alt={alt || 'Product Image'}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        loading="lazy"
        {...rest}
      />
    </div>
  );
};
