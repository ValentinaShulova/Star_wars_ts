import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage";

interface Props
{
    changeHero: (hero: string) => void
    hero: string
}
const Main: React.FC <Props> = (props) =>
{
    return (
        <Routes>
            {['/', homePage, `${homePage}/:heroId`].map(path =>
                <Route path={path} key={path} element={<Home changeHero={props.changeHero}/>}/>)}
            {[aboutMePage, `${aboutMePage}/:heroId`].map(path =>
                <Route path={path} key={path}
                       element={<AboutMe changeHero={props.changeHero} hero={props.hero}/>}/>)}
            <Route path={starWarsPage} element={<StarWars/>}/>
            <Route path={contactPage} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
    )
};

export default Main;
