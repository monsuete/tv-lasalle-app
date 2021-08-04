import React from "react";
import ReactTV from "react-tv";
import { withNavigation, withFocusable } from "react-tv-navigation";

import Carousel from "./views/template/Carousel";
import Header from "./views/template/Header";
import Logo from "./views/template/Logo";
import Nav from "./views/template/Nav";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="sidebar">
                    <Logo />
                    <Nav />
                </div>
                <div className="container">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="carousel">
                        <Carousel />
                    </div>
                </div>
            </div>
        );
    }
}

const AppWithNavigation = withNavigation(App);

ReactTV.render(<AppWithNavigation />, document.querySelector("#root"));
