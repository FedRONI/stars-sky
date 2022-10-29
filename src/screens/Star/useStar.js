import { useEffect, useState } from "react";
import { getRandomInt } from "../../functions/function";

const useStar = (star) => {
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    return () => {
      setIsView(false);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsView(true);
    }, getRandomInt(0, 2000));
  }, []);

  return {
    star,
    isView,
  };
};

export default useStar;
