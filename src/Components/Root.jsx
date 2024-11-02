import React from 'react';
import NAvBar from './NAvBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <>
            <NAvBar></NAvBar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;