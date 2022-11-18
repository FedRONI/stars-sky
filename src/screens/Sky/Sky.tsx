import React from "react";
import SkyView from "./SkyView";
import useSky from "./useSky";

const Sky = () => {
    return(<SkyView {...useSky()}/>);
}

export default Sky;