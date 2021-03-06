import React, { useEffect, useState } from 'react';

const useLightbox = images => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const nextImage = () => {
    if (currentImageIndex + 1 >= images.length) {
      return setCurrentImageIndex(0);
    }

    return setCurrentImageIndex(currentImageIndex + 1);
  };

  const prevImage = () => {
    if (currentImageIndex - 1 > 0) {
      return setCurrentImageIndex(currentImageIndex - 1);
    }

    return setCurrentImageIndex(images.length - 1);
  };

  const cancel = () => setCurrentImageIndex(null);

  const setImage = index => setCurrentImageIndex(index);

  // Keyboard shortcut for activated
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'ArrowLeft') {
        prevImage();
        return;
      }

      if (e.key === 'ArrowRight') {
        nextImage();
        return;
      }

      if (e.key === 'Escape') {
        cancel();
        return;
      }
    };

    // TODO: Is there a way to not mount this within the lightbox?
    if (currentImageIndex != null) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'scroll';
    };
  }, [images, currentImageIndex]);

  return {
    currentImage: images[currentImageIndex],
    cancel: cancel,
    setImage: setImage,
    prevImage: prevImage,
    nextImage: nextImage
  };
};

export default useLightbox;
