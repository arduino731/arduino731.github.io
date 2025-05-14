import { useEffect, useState, useRef } from 'react';
// snippet 
// <div className={`scrollHandle transition-opacity duration-1000 ease-in-out 
// ${
//    currentSection === 'About' ? 'opacity-100' : 'opacity-0'
//  }`}
//  data-id="About"
// >
// <p className="fadeIn"></p>
// </div>


export default function useHandleScroll() {
  const [visibleSection, setVisibleSection] = useState(null);
  const animatedSections = useRef(new Set());

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visibleSection;
}
