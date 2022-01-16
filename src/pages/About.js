import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

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