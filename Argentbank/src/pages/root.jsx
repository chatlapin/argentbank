import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/nav'

export default function root() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}
