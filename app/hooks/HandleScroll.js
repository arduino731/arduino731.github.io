import { useEffect, useState, useRef } from 'react';

export default function useHandleScroll() {
  const [visibleSection, setVisibleSection] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(true);
  const animatedSections = useRef(new Set());

  useEffect(() => {
    const handleScroll = () => {
      // 1. Logic for fading the Scroll Button
      if (window.scrollY > 100) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }

      // 2. Logic for Section Tracking
      const middle = window.innerHeight / 2;
      const sections = document.querySelectorAll('.scrollHandle');

      for (let section of sections) {
        const rect = section.getBoundingClientRect();
        const id = section.dataset.id;
        const inView = rect.top <= middle && rect.bottom >= middle;

        if (inView) {
          setVisibleSection(id);
          if (!animatedSections.current.has(id)) {
            animatedSections.current.add(id);
            const animatableEls = section.querySelectorAll('.fadeIn');
            animatableEls.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
            });
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // RETURN the data your component needs
  return { visibleSection, showScrollButton };
}
