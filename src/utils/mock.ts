import hero from "/public/assets/hero.webp";
import muscletank from "/public/muscletank.png";
import pro3 from "/public/assets/pro3.webp";
import {Product} from './types';
import unique from "/public/assets/unique.webp";
import cwwh3 from "/public/cwwh3.png";
import cwwh4 from "/public/cwwh4.png";
import reglansweatshirt from "/public/reglansweatshirt.png";
import brushedbomber from "/public/brushedbomber.png";
import cwwh from "/public/cwwh.png";
import litesweatpant from "/public/litesweatpant.png";
import pinkfleece from "/public/pink-fleece.png";
export const Productz: Product[] = [
    {
    id: 1,
    name: 'Brushed Raglan Sweatshirt',
    tagline: 'Sweater',
    price: 195,
    category: 'female',
    image: cwwh
},
 {
    id: 2,
    name: 'Cameryn Sash Tie Dress',
    tagline: 'Dress',
    price: 545,
    category: 'female',
    image: hero
},
 {
    id: 3,
    name: 'Flex Sweatshirt',
    tagline: 'Sweater',
    price: 4500,
    category: 'female',
    image: cwwh4
},
 {
    id: 4,
    name: 'Flex Sweatpants',
    tagline: 'Pants',
    price: 175,
    category: 'male',
    image: cwwh3
},
 {
    id: 5,
    name: 'Pink Fleece Sweatpants',
    tagline: 'Pants',
    price: 195,
    category: 'female',
    image: pinkfleece
},
 {
    id: 6,
    name: 'Lite Sweatpants',
    tagline: 'Pants',
    price: 150,
    category: 'female',
    image: litesweatpant
},
{
    id: 7,
    name: 'Imperial Alpaca Hoodie',
    tagline: 'Jackets',
    price: 525,
    category: 'female',
    image: unique
},
{
    id: 8,
    name: 'Flex Push Button Bomber',
    tagline: 'Jackets',
    price: 225,
    category: 'male',
    image: pro3
},
{
    id: 9,
    name: 'Muscle Tank',
    tagline: 'T Shirts',
    price: 75,
    category: 'female',
    image: muscletank
},
{
    id: 10,
    name: 'Brushed Bomber',
    tagline: 'Jackets',
    price: 225,
    category: 'female',
    image: brushedbomber
},
{
    id: 11,
    name: 'Raglan Sweatshirt',
    tagline: 'Sweater',
    price: 195,
    category: 'male',
    image: reglansweatshirt
},

];