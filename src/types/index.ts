export interface Hero
{
    name: string
    img: string
    url: string
}

export interface Friends
{
    [key: string]: Hero
}

export interface Planet
{
    name: string
}

export interface Info
{
    "name": string,
    "height": string,
    "mass": string,
    "hair_color": string,
    "skin_color": string,
    "eye_color": string,
    "birth_year": string,
    "gender": string
}