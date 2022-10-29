import React from "react";
import StarView from "./StarView";
import useStar from "./useStar";


const Star = ({star}) => {
    return(<StarView {...useStar(star)}/>);
}

export default Star;