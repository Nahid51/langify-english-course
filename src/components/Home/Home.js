import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Teachers from '../Teachers/Teachers';
import Cover from '../Cover/Cover';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <About></About>
            <Services></Services>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;