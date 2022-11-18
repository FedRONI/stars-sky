import React from "react";
import StarView from "./StarView";
import useStar from "./useStar";


const Star = (props) => {
    return(<StarView {...useStar(props)}/>);
}

export default Star;