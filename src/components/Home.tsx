import React, {useEffect} from 'react';
import {characters, defaultHero} from "../utils/constants";
import Hero from "./Hero";
import Friends from "./Friends";
import FarGalaxy from "./FarGalaxy";
import {useParams} from "react-router-dom";

interface Props
{
    changeHero: (hero: string) => void
}

const Home: React.FC<Props> = (props) =>
{
    let {heroId} = useParams()

    const getKey = () =>
    {
        if(!characters.includes(heroId!))
            heroId = defaultHero
        return heroId
    }

    useEffect(() =>
    {
        let key = getKey()
        props.changeHero(key!)
    }, [heroId])

    let key = getKey()

    return (
        <main className="clearfix">
            <Hero hero={key!}/>
            <Friends hero={key!} changeHero={props.changeHero}/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;
