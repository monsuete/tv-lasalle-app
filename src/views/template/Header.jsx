import React, {Component} from "react";

import Sli from "react-animated-slider";

import api from "../../services/api";

class Header extends Component {
    constructor() {
        super();

        this.state = {
            notices: [],
        };
    }

    async fetchSlides() {
        const response = await api.get("/notices");
        this.setState({ notices: response.data });

        setTimeout(() => {
            this.fetchSlides();
        }, 1000 * 60 * 60);
    }

    async componentDidMount() {
        this.fetchSlides();
    }

    
    render() {
        const { notices } = this.state;
        console.log(notices);
        return (
            <header align="center" className="header ">
            <Sli
                previousButton={<span />}
                nextButton={<span />}
                autoplay={9000}
            >
                {notices.map((notice, index) => (
                    <div className="test" key={index}>
                        <h2>{notice.title}</h2>
                        <div>{notice.description}</div>
                    </div>
                ))}
            </Sli>
                     
            
        </header>
        );
    }
}

export default Header;