import React, { useState, useEffect } from "react";

import Slider from "react-animated-slider";

import Api from "../../services/api";

export default function Header() {
    const [notices, setNotices] = useState([]);

    const fetch = async () => {
        try {
            const { data } = await Api.get("/notices");

            setNotices(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <header align="center" className="header d-nome d-sm-flex flex-column">
            <Slider
                previousButton={<span />}
                nextButton={<span />}
                autoplay={9000}
            >
                {notices.map((notice, index) => (
                    <div key={index}>
                        <h2>{notice.title}</h2>
                        <div>{notice.description}</div>
                    </div>
                ))}
            </Slider>
        </header>
    );
}
