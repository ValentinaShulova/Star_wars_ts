import '../styles/contact.module.css'
import React, {useEffect, useState} from 'react';
import {base_url, period} from "../utils/constants";
import {Planet} from "../types";


const Contact = () =>
{
    const [planetArray, setPlanets] = useState<string[]>(['wait.....'])

    useEffect(() =>
    {
        const planets = JSON.parse(localStorage.getItem('planets')!)
        if(!planets || (Date.now() - planets.time) > period)
        {
            fetch(`${base_url}planets`)
                .then(response => response.json())
                .then((data: Planet[]) => data.map(item => item.name))
                .then(planets =>
                {
                    setPlanets(planets)
                    let info =
                        {
                            listPlanets: planets,
                            time: Date.now()
                        }
                    localStorage.setItem('planets', JSON.stringify(info))
                })
        }
        else
            setPlanets(planets.listPlanets)
    }, [])

    return (
        <div className="container">
            <form onSubmit={event => event.preventDefault()}>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {planetArray.map((item, index) =>
                        <option value={item} key={index}>{item}</option>)}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Contact;
