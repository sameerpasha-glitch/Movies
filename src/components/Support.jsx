import React from 'react';

const Support = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Support & Credits</h1>
            <p>
                This application uses data provided by{' '}
                <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#01b4e4', textDecoration: 'none' }}
                >
                    The Movie Database (TMDb)
                </a>.
            </p>
            <p>
                We are grateful to TMDb for offering their amazing API and making this project possible. For more information, please visit their{' '}
                <a
                    href="https://www.themoviedb.org/documentation/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#01b4e4', textDecoration: 'none' }}
                >
                    official API documentation
                </a>.
            </p>
            <p>
                Support TMDb by contributing to their platform or following them on social media. You can find more details on their{' '}
                <a
                    href="https://www.themoviedb.org/about/our-story"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#01b4e4', textDecoration: 'none' }}
                >
                    About Us
                </a>{' '}
                page.
            </p>
        </div>
    );
};

export default Support;
