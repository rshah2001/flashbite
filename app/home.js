import React from 'react';
import Link from 'next/link';
import './home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">CodeFlash</h1>
          <div className="menu">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <button className="btn">Get for Free</button>
          </div>
        </nav>
        <div className="hero">
          <h2 className="title">Ace Coding with Flashcards</h2>
          <p className="subtitle">
            Transform your coding with CodeFlash—engaging flashcards for AI learners and CS students. Master new languages and concepts with active recall and avoid tutorial hell. Make learning interactive and fun!
          </p>
          <button className="btn-primary">Join Waitlist Now</button>
        </div>
      </header>
      
      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Active Recall</h3>
            <p>Challenge your understanding with engaging questions and editable code snippets.</p>
          </div>
          <div className="feature-card">
            <h3>Customized Learning</h3>
            <p>Tailor your learning based on goals and skill level and get custom study plans.</p>
          </div>
          <div className="feature-card">
            <h3>Spaced Repetition</h3>
            <p>Revisit concepts at optimal intervals for more effective retention.</p>
          </div>
        </div>
      </section>
      
      <section className="pricing">
        <h2>Plans and Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free</h3>
            <p>$0</p>
            <p>For single person</p>
            <p>Limited flashcards</p>
            <p>Basic support</p>
            <p>Basic personalization</p>
            <button className="btn-secondary">Get started for Free</button>
          </div>
          <div className="pricing-card">
            <h3>Pro</h3>
            <p>$5</p>
            <p>For single person + guest</p>
            <p>Unlimited flashcards</p>
            <p>Custom study plans</p>
            <p>Priority support</p>
            <button className="btn-secondary">Go Pro</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p>Custom</p>
            <p>For multiple teams</p>
            <p>Unlimited flashcards</p>
            <p>Custom study plans</p>
            <p>Dedicated support</p>
            <button className="btn-secondary">Get started with Enterprise</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
