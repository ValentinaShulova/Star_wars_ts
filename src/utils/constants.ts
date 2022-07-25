import friend1 from '../images/friend1.jpg'
import friend2 from '../images/friend2.jpg'
import friend3 from '../images/friend3.jpg'
import friend4 from '../images/friend4.jpg'
import friend5 from '../images/friend5.jpg'
import friend6 from '../images/friend6.jpg'
import friend7 from '../images/friend7.jpg'
import friend8 from '../images/friend8.jpg'
import friend9 from '../images/friend9.jpg'
import friend0 from '../images/main.jpg'
import {Friends} from "../types";

export const base_url = 'https://sw-info-api.herokuapp.com/v1/'

export const homePage = 'home'
export const aboutMePage = 'about_me'
export const starWarsPage = 'star_wars'
export const contactPage = 'contact'

export const period = 1000 * 60 * 60 * 24 * 30

export const friends: Friends =
    {
        luke:
            {
                name: "Luke Skywalker",
                img: friend0,
                url: `${base_url}peoples/1`
            },
        r2d2:
            {
                name: "R2-D2",
                img: friend1,
                url: `${base_url}peoples/3`
            },
        c3po:
            {
                name: "C-3PO",
                img: friend2,
                url: `${base_url}peoples/2`
            },
        ewok:
            {
                name: "Wicket Systri Warrick",
                img: friend3,
                url: `${base_url}peoples/30`
            },
        chewbacca:
            {
                name: "Chewbacca",
                img: friend4,
                url: `${base_url}peoples/13`
            },
        han_solo:
            {
                name: "Han Solo",
                img: friend5,
                url: `${base_url}peoples/14`
            },
        leia:
            {
                name: "Leia Organa",
                img: friend6,
                url: `${base_url}peoples/5`
            },
        falcon:
            {
                name: "Millenium Falcon",
                img: friend7,
                url: `${base_url}transports/10`
            },
        obi_wan:
            {
                name: "Obi-Wan Kenobi",
                img: friend8,
                url: `${base_url}peoples/10`
            },
        yoda:
            {
                name: "Yoda",
                img: friend9,
                url: `${base_url}peoples/0`
            }
    }

export const characters = Object.keys(friends)

export const defaultHero = characters[0]
