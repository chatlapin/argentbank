import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function root() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
