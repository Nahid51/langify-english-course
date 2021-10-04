import React from 'react';
import About from '../About/About';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Teachers from '../Teachers/Teachers';
import Footer from '../Footer/Footer';
import Cover from '../Cover/Cover';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Cover></Cover>
            <About></About>
            <Services></Services>
            <Teachers></Teachers>
            <Footer></Footer>
        </div>
    );
};

export default Home;