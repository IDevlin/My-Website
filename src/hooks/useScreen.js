import { useState, useEffect } from 'react';

function useOnScreen(ref, threshold) {
  // State and setter for storing whether element is visible
  const [intersecting, setIntersecting] = useState(false);

  const callback = ([entry]) => {
   
    setIntersecting(entry.isIntersecting? true: false); 
    console.log(entry)
  };

  const options = {
    rootMargin: '50px',
    threshold,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
  
  }, [ref, threshold]); // Empty array ensures that effect is only run on mount and unmount

  return intersecting;
}
export default useOnScreen;
