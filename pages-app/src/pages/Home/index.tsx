import React from 'react';
import "./styles.css";
import avatar from "../../static/assets/avatar.jpg";
class Home extends React.Component<{}> {
    render() {
        return (
            <div className="home">
                <div className="content left">
                    <img src={avatar} alt="" title="hello!" className="avatar" />
                    <a href="/" className="App-link"> Leon Kang </a>
                    <a href="/" className="email-link"> me@leonkang.com </a>

                    <div className="derived"/>
                </div>
                <div className="right">
                    <div className="description">
                        hello everyone! welcome to my personal website.
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
