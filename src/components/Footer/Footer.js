import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import linkedin_set1 from '../../assets/linkedin_set1.png';
import github_set1 from '../../assets/github_set1.png';
import tmdb_credits from '../../assets/tmdb_credits.png';
import email_set1 from '../../assets/email_set1.png';

export default class Footer extends React.Component {

    render() {
        return (
            <footer role="contentinfo">
                <section className="copyright">
                    <ul className="title-block">
                        <li><h3><Link to="/">Reel Reviews</Link></h3></li>
                        <ul className="title-block-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/search">Search</Link></li>
                            <li><Link to="/dashboard">Profile</Link></li>
                        </ul>
                    </ul>
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/eddie-chu-982019aa/" target="_blank" rel="noopener noreferrer" aria-label="Eddie Chu Linkedin"><img src={linkedin_set1} alt="linkedin" /></a></li>
                        <li><a href="mailto:contact@eddiechu.dev" target="_top" aria-label="contact@eddiechu.dev"><img src={email_set1} alt="github" aria-label="Eddie Chu email" /></a></li>
                        <li><a href="https://github.com/Kaleidics" target="_blank" rel="noopener noreferrer"><img src={github_set1} alt="github" aria-label="Eddie Chu AKA Kaleidics Github" /> </a></li>
                    </ul>
                    <ul className="contact">
                        <li><span>Website:</span><a href="https://eddiechu.dev/" target="_blank" rel="noopener noreferrer" aria-label="www.eddiechu.dev">www.eddiechu.dev</a> </li>
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


