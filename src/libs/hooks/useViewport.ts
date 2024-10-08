import { useState, useEffect } from "react";

const useViewport = () => {
  const [vw, setVW] = useState<number>(0);
  const [vh, setVH] = useState<number>(0);

  useEffect(() => {
    const setSizes = () => {
      if (window.innerWidth !== vw) {
        setVW(window.innerWidth);
      }

      if (window.innerHeight !== vh) {
        setVH(window.innerHeight);
      }
    };

    setSizes();
    window.addEventListener("resize", setSizes);
    return () => window.removeEventListener("resize", setSizes);
  }, [vh, vw]);

  return { vw, vh };
};

export default useViewport;
