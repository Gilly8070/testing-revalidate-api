import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import TestIcons from '../components/TestIcons';

function HomePage(props) {
    return (
        <div>
            <Hero
                title={props.title}
                subTitle={props.subTitle}
                text={props.text}
            />
            <TestIcons />
            <Carousel />
        </div>
    );
}

export default HomePage;