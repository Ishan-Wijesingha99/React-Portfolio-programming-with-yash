
import React from "react";
import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Portfolio } from "./Portfolio";
import { SocialLinks } from "./SocialLinks";



export const App = function() {
    return (
        <div>
            <Navbar />

            <Home />

            <SocialLinks />

            <About />

            <Portfolio />
        </div>
    )
}