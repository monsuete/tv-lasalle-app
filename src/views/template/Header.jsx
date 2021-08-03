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
    }

    async componentDidMount() {
        this.fetchSlides();

        setTimeout(() => {
            this.fetchSlides();
        }, 1000 * 60 * 60);
    }

    
    render() {
        const { notices } = this.state;
        console.log(notices);
        return (
            <header align="center" className="header ">
                <Sli
                    previousButton={<span />}
                    nextButton={<span />}
                    autoplay={12000}
                >
                    {notices.map((notice, index) => (
                        <div className="test" key={index}>
                            <h1>{notice.title}</h1>
                            <p>{notice.description}</p>
                        </div>
                    ))}
                </Sli>
            </header>
        );
    }
}

export default Header;