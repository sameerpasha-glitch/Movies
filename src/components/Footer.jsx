import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>
                        This is a movie streaming platform that provides the latest trending movies, series, and more. Explore and enjoy!
                    </p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#trending">Trending</a></li>
                        <li><a href="#new-series">New Series</a></li>
                        <li><a href="#upcoming">Upcoming Movies</a></li>
                        <li><a href="#anime">Anime</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: support@moviehub.com</li>
                        <li>Phone: +123-456-7890</li>
                        <li>Address: 123 Movie Lane, Cinema City</li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom" >
                <p>&copy; {new Date().getFullYear()} MovieHub. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;
