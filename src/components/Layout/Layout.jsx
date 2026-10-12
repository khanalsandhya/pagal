import React from 'react'
import Navbar from '../Navigations/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Navigations/Footer'

export default function Layout() {
    return (
        <div>

            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Outlet />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
