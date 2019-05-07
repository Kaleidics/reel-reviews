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
                        <h3><Link to="/">Reel Reviews</Link></h3>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/search/?query=avengers">Search</Link></li>
                        <li><Link to="/search/?query=avengers">Profile</Link></li>
                    </ul>
                    <ul className="contact">
                        <li><span>Website:</span><a href="https://eddiechu.dev/" target="_blank">www.eddiechu.dev</a> </li>
                        <li><span>Contact:</span><a href="contact@eddiechu.me" target="_top">contact@eddiechu.me</a></li>
                    </ul>
                    <ul className="social">
                        <li><a href="https://www.linkedin.com/in/eddie-chu-982019aa/" target="_blank"><img src={linkedin} /></a></li>
                        <li><a href="https://github.com/Kaleidics" target="_blank"><img src={github} /> </a></li>
                    </ul>
                    <div className="inner-copyright">
                        <p>Copyright &copy;2019</p>
                    </div>
                    
                </section>
                <section className="credits">
                    <div>
                        <a href="https://developers.themoviedb.org/3/getting-started/introduction" target="_blank"><img src={tmdb_credits} /> </a>
                    </div>
                    
                </section>

            </footer>
        )
    }
}


