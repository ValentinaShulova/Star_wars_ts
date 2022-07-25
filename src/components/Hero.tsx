import React from 'react';
import {friends} from "../utils/constants";

interface Props
{
    hero: string
}
const Hero: React.FC <Props> = (props) =>
{
    return (
        <section className="float-start w-25 mr-5 row">
            <img className="col-12 main-img" src={friends[props.hero].img}
                alt={friends[props.hero].name}/>
        </section>
    );
};

export default Hero;
