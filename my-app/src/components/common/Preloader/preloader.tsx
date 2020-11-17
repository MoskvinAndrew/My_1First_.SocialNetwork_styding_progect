import React from "react";
import Pr from "./Preloader.module.css";
import planePreload from "../../../assets/unnamed.gif"


export let Preloader = ()=>{

    return(
        <div className={Pr.wrapper}>
        <img className={Pr.imgLogo} src={planePreload}/>
    </div>)
}