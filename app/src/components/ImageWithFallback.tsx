import React, { useState } from 'react';

export const ImageWithFallback: React.FC<
  React.ImgHTMLAttributes<HTMLImageElement>
> = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);

  return error ? (
    <div className='mb-2 w-full aspect-[2/3] bg-gray-200 flex items-center justify-center text-gray-500'>
      No Image
    </div>
  ) : (
    <img src={src} alt={alt} {...props} onError={() => setError(true)} />
  );
};
