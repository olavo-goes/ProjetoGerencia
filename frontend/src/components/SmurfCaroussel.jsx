import React, { useState, useRef, useEffect } from 'react';
import styles from './SmurfCaroussel.module.css';

const images = [
  { src: 'images/smurf1.png', alt: 'Smurf sorrindo' },
  { src: 'images/smurf2.png', alt: 'Smurf com chapéu vermelho' },
  { src: 'images/smurf3.png', alt: 'Smurfette em ação' },
];

export default function SmurfCaroussel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const updateCarousel = () => {
    const width = trackRef.current?.children[0]?.clientWidth || 0;
    trackRef.current.style.transform = `translateX(-${index * width}px)`;
  };

  useEffect(() => {
    updateCarousel();
  }, [index]);

  useEffect(() => {
    const handleResize = () => updateCarousel();
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length);
    }, 2000); 

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.smurfCarousel}>
      <button className={styles.prev} onClick={() => setIndex(Math.max(index - 1, 0))}>
        &#10094;
      </button>
      <div className={styles.carouselTrack} ref={trackRef}>
        {images.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
      <button className={styles.next} onClick={() => setIndex(Math.min(index + 1, images.length - 1))}>
        &#10095;
      </button>
    </div>
  );
}