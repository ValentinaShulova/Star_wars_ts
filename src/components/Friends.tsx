import React from 'react';
import {characters} from "../utils/constants";
import Friend from "./Friend";

interface Props
{
    changeHero: (hero: string) => void
    hero: string
}

const Friends: React.FC<Props> = (props) =>
{
    let temp = characters.filter(item => item !== props.hero)//!==

    return (
        <section className="float-end m-2 w-50 row border border-light no-gutters">
            <h3 className="col-12 text-center">Friends</h3>
            {temp.map((item, index) =>
                <Friend friend={item} key={index}/>)}
        </section>
    );
};

export default Friends;