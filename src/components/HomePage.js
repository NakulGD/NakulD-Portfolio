import React from 'react';

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>Welcome to My Portfolio</h1>
                    <p>This is a brief introduction about myself.</p>
                </div>
                <div className="col-md-4">
                    <img src="profile-pic.jpg" alt="Profile" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;