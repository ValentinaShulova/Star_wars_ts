import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {Link} from "react-router-dom";

interface Props
{
    hero: string
}
const Navigation: React.FC <Props> = (props) =>
{
    return (
        <nav>
            <ul className="position-fixed list-unstyled d-inline">
                <Link to={`${homePage}/${props.hero}`}>
                    <li className="border border-light rounded-pill btn btn-danger">Home</li>
                </Link>
                <Link to={`${aboutMePage}/${props.hero}`}>
                    <li className="border border-light rounded-pill btn btn-danger">About me
                    </li>
                </Link>
                <Link to={starWarsPage}>
                    <li className="border border-light rounded-pill btn btn-danger">
                        Star wars</li>
                </Link>
                <Link to={contactPage}>
                    <li className="border border-light rounded-pill btn btn-danger">Contact
                        </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navigation;
