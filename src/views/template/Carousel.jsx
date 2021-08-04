import React, { Component } from "react";

import S from "react-animated-slider";

import api from "../../services/api.js";

class Carousel extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
        };
    }

    async fetchSlides() {
        const response = await api.get("slides");
        this.setState({ posts: response.data });

        setTimeout(() => {
            this.fetchSlides();
        }, 1000 * 60 * 60);
    }

    async componentDidMount() {
        this.fetchSlides();
    }

    render() {
        const { posts } = this.state;
        console.log(posts);
        return (
            <aside className="test">
                <S
                    previousButton={<span />}
                    nextButton={<span />}
                    autoplay={9000}
                >
                    {posts.map((post, index) => (
                        <div
                            className="url"
                            key={index}
                            style={{
                                background: `url('http://${global.location.hostname}:3333/files/${post.key}')`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        ></div>
                    ))}
                </S>
            </aside>
        );
    }
}

export default Carousel;
