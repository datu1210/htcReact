import React from 'react';
/* import { ServicesList } from './ServicesList'; */
import {ControlledCarousel} from "./Carousel";
import { About } from './About';
import "./Home.css";


export const Home = () => {

    return (
        <div className="container-home">
            <section><ControlledCarousel/></section>
            <section><About/></section>
        </div>
    )
}
