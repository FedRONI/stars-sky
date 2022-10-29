import React from "react";
import MoonView from "./MoonView";
import useMoon from "./useMoon";


const Moon = () => {
    return(<MoonView {...useMoon}/>);
}

export default Moon;