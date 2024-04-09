"use client";
import { ImageDataProps } from "@/config/image";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function ResultImage({ imageData }: { imageData: ImageDataProps[] }) {
  return (
    <>
      {imageData.map((data, index) => (
        <ImageAsync
          key={index}
          src={data.src}
          alt={data.alt}
          blurDataURL={data.blurDataURL}
        />
      ))}
    </>
  );
}

export const ImageAsync = ({ src, alt, blurDataURL }: ImageDataProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className={cn("w-full rounded")}
        unoptimized
      />
    </div>
  );
};
