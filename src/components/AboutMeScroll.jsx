import { useEffect } from 'react';
useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
  
    const showSection = () => {
      const triggerBottom = window.innerHeight * 0.8;
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < triggerBottom) {
          section.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', showSection);
  
    return () => window.removeEventListener('scroll', showSection);
  }, []);
  