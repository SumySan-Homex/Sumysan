import { useState, useEffect, Key } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import styles from "../styles/about.module.css";

const Slideshow = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change interval as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map(
        (
          image: { src: string | StaticImport; alt: string },
          index: Key | null | undefined
        ) => (
          <div
            key={index}
            className={`slideshow-image ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{ display: index === currentImageIndex ? "block" : "none" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1440}
              height={800}
              className={styles.images}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Slideshow;
