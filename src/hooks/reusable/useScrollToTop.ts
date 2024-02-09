import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
};

export default useScrollToTop;
