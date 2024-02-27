import { useCallback } from 'react';

// Define the hook's parameter type
interface UseWebShareProps {
  title: string;
  text: string;
}

const useWebShare = ({ title, text }: UseWebShareProps) => {
  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: window.location.hostname,
        });

      } catch (error) {
        console.error("Error sharing content", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  }, [title, text]); // Dependencies for useCallback to ensure the function is updated if any prop changes

  return {
    handleShare,
  };
};

export default useWebShare;