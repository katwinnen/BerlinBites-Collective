import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to BerlinBites Collective</h2>
      <p>Discover the best restaurants in Berlin with our community-driven platform. Whether you're craving Italian pasta, Vietnamese pho, or classic German cuisine, we've got you covered.</p>
      <p>Join our community to share your favorite dining spots and explore hidden gems recommended by fellow food enthusiasts.</p>
      <div className="cta-section">
        <a href="/about" className="btn">Learn More</a>
      </div>
    </div>
  );
}

export default Home;
