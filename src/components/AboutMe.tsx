import React, {useEffect, useState} from 'react';
import {characters, defaultHero, friends, period} from "../utils/constants";
import styles from '../styles/aboutMe.module.css'
import {useParams} from "react-router-dom";
import {Info} from "../types";

interface Props
{
    changeHero: (hero: string) => void
    hero: string
}
const AboutMe: React.FC<Props> = (props) =>
{
    const [hero, setHero] = useState<Info>()
    let {heroId} = useParams() as {heroId: string}

    useEffect(() =>
    {
        if (!characters.includes(heroId))
            heroId = defaultHero
        let hero = JSON.parse(localStorage.getItem(heroId)!)
        if (!hero || (Date.now() - hero.time) > period)
        {
            fetch(friends[heroId].url)
                .then(response => response.json())
                .then(data =>
                {
                    let info =
                        {
                            "name": data.name,
                            "height": data.height,
                            "mass": data.mass,
                            "hair_color": data.hair_color,
                            "skin_color": data.skin_color,
                            "eye_color": data.eye_color,
                            "birth_year": data.birth_year,
                            "gender": data.gender
                        };
                    setHero(info)
                    hero =
                        {
                            info,
                            time: Date.now()
                        };
                    localStorage.setItem(heroId, JSON.stringify(hero))
                });
        } else
        {
            setHero(hero.info)
        }
        props.changeHero(heroId)
    }, [])

    return (
        <div>
            {(hero) &&
                <div className={`farGalaxy ${styles.hero_box}`}>
                    <p><span className={styles.hero_titles}>name:
                        </span> {hero.name}</p>
                    <p><span className={styles.hero_titles}>height:
                        </span> {hero.height}</p>
                    <p><span className={styles.hero_titles}>birth year:
                        </span> {hero.birth_year}</p>
                    <p><span className={styles.hero_titles}>gender:
                        </span> {hero.gender}</p>
                    <p><span className={styles.hero_titles}>mass:
                        </span> {hero.mass}</p>
                    <p><span className={styles.hero_titles}>hair color:
                        </span> {hero.hair_color}</p>
                    <p><span className={styles.hero_titles}>skin color:
                        </span> {hero.skin_color}</p>
                    <p><span className={styles.hero_titles}>eye color:
                        </span> {hero.eye_color}</p>
                </div>
            }
        </div>
    )
};
export default AboutMe;
