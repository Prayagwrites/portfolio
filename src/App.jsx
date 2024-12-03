import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Hello! I'm Prayag, a passionate developer specializing in creating mobile and web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Portfolio [ Flutter ]</h3>
            <p>This project is made in Flutter, this is a portfolio cross-platform application.</p>
            <a href="https://github.com/Prayagwrites/Portfolio_Flutter" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-item">
            <h3>Portfolio [ React + Vite Framework ]</h3>
            <p>Portfolio web-app using React + Vite Framework.</p>
            <a href="https://github.com/Prayagwrites/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me via email or connect on Github.</p>
        <ul>
          <li>Email: <a href="mailto:user001raid@gmail.com">user001raid@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/Prayagwrites" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Prayag. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
