import { useState, useEffect } from "react";
import { getRandomInt } from "../../functions/function";

export interface ISkyProps {
  stars: any[],
  changeSky: (event: any) => void,
}

const useSky = (): ISkyProps => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    return () => {
      setStars([]);
    };
  }, []);

  useEffect(() => {
    const newStars: any[] = stars;
    const countStart = getRandomInt(0, 100);
    
    for (let i = 0; i < countStart; i++) {
      const star: any = {
        left: getRandomInt(0, 100) + "%",
        top: getRandomInt(0, 100) + "%",
      };

      newStars.push(star);
    }

    setStars([...(newStars as never)]);
  }, []);

  const changeSky = (event: any): void => {
    const newStars: any[] = stars;

    const star: any = {
      left: event.pageX + "px",
      top: event.pageY + "px",
    };

    newStars.push(star);

    setStars([...(newStars as never)]);
  };

  return {
    stars,
    changeSky,
  };
};

export default useSky;