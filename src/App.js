import React, { useState } from "react";
import "./App.css"; // Your CSS from style.css
import { FaFacebook, FaInstagram, FaGithub, FaBars } from "react-icons/fa";

function App() {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">Coedy</h1>
        <ul className={`nav-links ${navActive ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className="toggle"
          aria-label="Toggle navigation"
          onClick={() => setNavActive(!navActive)}
        >
          <FaBars />
        </button>
      </nav>

      <div className="main-content" id="home">
        <div className="image-container">
          <div className="circle"></div>
          <img src="/profile image.jpg" alt="Coedy" />
        </div>
        <div className="text-content">
          <h2>
            Hi, It's <span className="highlight">Coedy</span>
          </h2>
          <br />
          <h3>Bachelor of Science Technology</h3>
          <br />
          <p>
            I combine user insights with creative problem-solving to deliver
            interfaces that are both aesthetically pleasing and highly
            functional. Let's enhance user experiences together!
          </p>
          <div className="social-icons">
            <a href="https://facebook.com/coedy.delacruz.549">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/delacruzcoedy/">
              <FaInstagram />
            </a>
            <a href="https://github.com/CoedydelaCruz">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          Hello, I'm Coedy de la Cruz, an Information Technology student
          pursuing my Bachelor of Science in Information Technology (BSIT).
          Throughout my academic journey, I’ve gained a strong foundation in
          Python, HTML, and CSS, and I like to design stuff, in Figma not in
          Coding :
        </p>
      </section>

      <section id="skills">
        <h2>Skills and Work Experience</h2>
        <div className="skills-container">
          <div className="skill"><h3>HTML</h3></div>
          <div className="skill"><h3>CSS</h3></div>
          <div className="skill"><h3>Python</h3></div>
        </div>
      </section>

      <div className="future-job">
        <h2>Future Job</h2>
        <p>As a passionate IT professional, I aim to work in roles that involve:</p>
        <ul>
          <li>Software Development</li>
          <li>Web Development</li>
          <li>Cloud Computing</li>
          <li>Cybersecurity</li>
          <li>Data Analytics</li>
        </ul>
      </div>

      <section id="contact">
        <h2>Contact :</h2>
        <p><strong>Email:</strong> <a href="mailto:coedy0123@gmail.com">coedy0123@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+09195883381">09195883381</a></p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Coedy de la Cruz. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
