import React from 'react';
// import Content from '../portfolio-site/src/components/Content';
import Hero from '../src/components/Hero';
import Content from '../src/components/Content';

function About(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Gulrez. I'm mastering myself in react.</p>
                <p>My dream is to one day start my own business.</p>
            </Content>
        </div>
    )
}

export default About;