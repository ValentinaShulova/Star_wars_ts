import React from 'react';
import {friends, homePage} from "../utils/constants";
import {Link, useNavigate} from "react-router-dom";

interface Props
{
    friend: string
}

const Friend: React.FC<Props> = (props) =>
{
    let navigate = useNavigate()

    return (
        <img className={'col-4 p-1'} src={friends[props.friend].img}
             alt={friends[props.friend].name}
             onClick={() => navigate(`/${homePage}/${props.friend}`)}/>
    );
};

export default Friend;
