import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Logout from "../Logout/Logout";
import logo from "../../assets/logo.png";
import "./NavBar.css";

export class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentToggle: "content content-hidden unhide-content",
            mobileContent: "navBar-ul mobile-options-hidden"
        };

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        if (this.state.contentToggle === "content content-hidden unhide-content") {
            this.setState({
                contentToggle: "content content-hidden unhide-content change",
                mobileContent: "navBar-ul"
            });
        } else {
            this.setState({
                contentToggle: "content content-hidden unhide-content",
                mobileContent: "navBar-ul mobile-options-hidden"
            });
        }
    }

    render() {
        return (
            <header className="navBar" role="banner">
                <div className="mobile-nav-container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={this.state.contentToggle} onClick={this.handleToggle}>
                        <div className="icon1" />
                        <div className="icon2" />
                        <div className="icon3" />
                    </div>
                </div>
                <ul className={this.state.mobileContent}>
                    <li className="search-bar hide-nav-mobile">
                        <SearchBar />
                    </li>
                    <li className="home hide-nav-mobile">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="profile hide-nav-mobile">
                        <Link to="/dashboard">{this.props.authState === true ? "Profile" : "Login | Sign Up"}</Link>
                    </li>
                    <li className="profile hide-nav-mobile">{this.props.authState === true ? <Logout /> : ""}</li>
                </ul>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    authState: state.app.authState
});

export default connect(mapStateToProps)(NavBar);
