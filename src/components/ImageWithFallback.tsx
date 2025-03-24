"use client";

import React, { useState } from "react";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width: number;
  height: number;
}

export default function ImageWithFallback({
  src,
  width,
  height,
  ...rest
}: ImageWithFallbackProps) {
  const fallbackSrc = `https://placehold.jp/${width}x${height}.png`;
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      width={width}
      height={height}
      {...rest}
    />
  );
}
