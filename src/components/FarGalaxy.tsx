import React, {Component, useEffect, useState} from 'react';
import {base_url} from "../utils/constants";

const FarGalaxy = () =>
{
    const [isLoading, setIsLoading] = useState(true)
    const [opening_crawl, setOpening_crawl] = useState('')

    useEffect(() =>
    {
        const opening_crawl = sessionStorage.getItem('opening_crawl')
        if(opening_crawl)
        {
            setIsLoading(false)
            setOpening_crawl(opening_crawl)
        }
        else
        {
            let episode = Math.floor(Math.random() * 6) + 1
            fetch(`${base_url}films/${episode}`)
                .then(response => response.json())
                .then(data =>
                {
                    setIsLoading(false)
                    setOpening_crawl(data.opening_crawl)
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)
                })
        }
    }, [])

    const text = isLoading ? 'Loading...' : opening_crawl
    return (
        <p className="m-1">{text}</p>
    );
};

export default FarGalaxy;
