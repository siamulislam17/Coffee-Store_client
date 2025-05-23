import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Footer from '../Components/footer';

const MainLayOuts = () => {
    return (
        <div>
            <Header></Header>
            <main className='max-w-7xl  md:mx-auto'>
                  <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOuts;