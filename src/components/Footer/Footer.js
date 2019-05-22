import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import tmdb_credits from '../../assets/tmdb_credits.png';

export default class Footer extends React.Component {

    render() {
        return (
            <footer>
                <section className="copyright">
                    <ul className="title-block">
                        <li><h3><Link to="/">Reel Reviews</Link></h3></li>
                        <ul className="title-block-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/dashboard">Profile</Link></li>
                        </ul>
                    </ul>
                    <ul className="contact">
                        <li><span>Website:</span><a href="https://eddiechu.dev/" target="_blank" rel="noopener noreferrer" aria-label="www.eddiechu.dev">www.eddiechu.dev</a> </li>
                        <li><span>Contact:</span><a href="mailto:contact@eddiechu.dev" target="_top" aria-label="contact@eddiechu.dev">contact@eddiechu.dev</a></li>
                    </ul>
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/eddie-chu-982019aa/" target="_blank" rel="noopener noreferrer" aria-label="Eddie Chu Linkedin"><img src={linkedin} alt="linkedin"/></a></li>
                        <li><a href="https://github.com/Kaleidics" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" aria-label="Eddie Chu AKA Kaleidics Github"/> </a></li>
                    </ul>
                    <div className="inner-copyright">
                        <p>Copyright &copy;2019</p>
                    </div>
                    
                </section>
                <section className="credits">
                    <div>
                        <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank" rel="noopener noreferrer" aria-label="The Movie Database API Docs"><img src={tmdb_credits} alt="the movie database" /> </a>
                    </div>
                </section>
            </footer>
        )
    }
}


