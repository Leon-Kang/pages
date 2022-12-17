import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component<{}> {
    render() {
        return (
            <header>
                <h2>
                    {'ABOUT'}
                </h2>
                <p>
                    Empty
                </p>
                <Link to="/">Home</Link>
            </header>
        );
    }
}

export default About;
