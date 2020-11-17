import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import ipsum from './ipsum.js'
import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <div className="main-title">
          <h1>Travelize</h1>
          <p>My traveling experiences</p>
        </div>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Blog</li>
            <li className="about">About</li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <section>
            <img src={heroBackground} className="hero-image"/>
          </section>
          <section className="post">
            <img src={headshot} className="profile-image" />
            <div className="content">
              <h2>A little about me</h2>
              <p>{ipsum}</p>
            </div>
          </section>
        </article>
      </main>
      <footer>
        <p>© 2020 Travelize</p>
        <p>Privacy Policy Terms and conditions</p>
      </footer>
    </div>
  );
}

export default App;
