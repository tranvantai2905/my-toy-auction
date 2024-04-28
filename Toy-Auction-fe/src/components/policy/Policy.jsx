import React from 'react';
import './style.css';
import Header from "../../common/header/Header"
import Footer from "../../common/footer/Footer"
import PolicyContent from './PolicyContent';


export default function Policy() {
    return (
        <>
            <Header />
            <PolicyContent />
            <Footer />
        </>
    )
}
