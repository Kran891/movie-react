import { useEffect, useState } from "react";
import Movie from "../services/Movie";
import HeaderComponent from "./HeaderComponent";
import MoviesComponent from "./MoviesComponent";

function HomeComponent() {

   
    return <>
        <HeaderComponent />
        <MoviesComponent />
    </>
}
export default HomeComponent;