"use client";

import { useState } from "react";
import Image from "next/image";

type TGalleryProps = any;

export default function Gallery({ galleries }): TGalleryProps {
  const [showPhoto, setShowPhoto] = useState(undefined);

  return (
    <section className="py-[5rem]">
      <div className="container relative min-h-screen m-auto">
        <h1 className="text-center text-2xl font-semibold mb-10">
          Berbagai keseruan bermain bersama Squadgames
        </h1>
        <div className="photo-container">
          {galleries?.map((gallery, index) => (
            <div key={index}>
              <div
                className="photo"
                onClick={() =>
                  setShowPhoto(
                    `https:${gallery.fields.image.fields?.file?.url}`
                  )
                }
              >
                <Image
                  src={`https:${gallery.fields.image.fields?.file?.url}`}
                  width={gallery.fields.image.fields.file.details.image.width}
                  height={gallery.fields.image.fields.file.details.image.height}
                  alt="image"
                />
              </div>
              <p>{gallery.fields.title}</p>
            </div>
          ))}
        </div>
        <div
          className="photo-popup"
          style={{ display: showPhoto ? "block" : "none" }}
          onClick={() => setShowPhoto(false)}
        >
          <span onClick={() => setShowPhoto(false)}>&times;</span>

          {showPhoto && (
            <Image src={showPhoto} alt="photo" width={3000} height={3000} />
          )}
        </div>
      </div>
    </section>
  );
}
