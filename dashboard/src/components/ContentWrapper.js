import React from 'react';
import TopBar from './TopBar';
import CardsContainer from './CardsContainer';
import Products from './Products';
import Footer from './Footer';
import { Route, Routes } from "react-router-dom";

function ContentWrapper(){
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                        <Routes>
                            <Route exact path="/" element={<CardsContainer/>} />
                            <Route exact path="/products" element={<Products/>} />
                        </Routes>
                    {/* <CardsContainer /> */}
                    {/* <Products /> */}
                    <Footer />
                </div>
            </div>    
        </>
    )
}
export default ContentWrapper;