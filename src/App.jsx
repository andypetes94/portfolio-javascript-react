import { useEffect, useState } from 'react'
import './App.css'
import HeroNetwork from './components/HeroNetwork.jsx'
import Projects from './components/Projects.jsx'
import DataScienceProjects from './components/DataScienceProjects.jsx'
import Publications from './components/Publications.jsx'
import About from './components/About.jsx'

const SECTIONS = ['home', 'projects', 'data-science-projects', 'publications', 'about']

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const observers = []
    const visible = new Map()
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        visible.set(id, entry.intersectionRatio)
        // pick the section with the highest visible ratio
        let best = 'home', bestRatio = -1
        for (const [sid, ratio] of visible) {
          if (ratio > bestRatio) { bestRatio = ratio; best = sid }
        }
        setActive(best)
      }, { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] })
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])
  return active
}

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const GoogleScholarIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z" />
  </svg>
)

const BarChartIcon = ({ size, style }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="currentColor" style={style} aria-hidden="true">
    <rect x="2" y="20" width="7" height="18" rx="1" />
    <rect x="12" y="11" width="7" height="27" rx="1" />
    <rect x="22" y="5" width="7" height="33" rx="1" />
    <rect x="32" y="15" width="7" height="23" rx="1" />
  </svg>
)

const ScatterIcon = ({ size, style }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={style} aria-hidden="true">
    <circle cx="8" cy="28" r="3" fill="currentColor" />
    <circle cx="16" cy="17" r="3" fill="currentColor" />
    <circle cx="25" cy="22" r="3" fill="currentColor" />
    <circle cx="33" cy="9"  r="3" fill="currentColor" />
    <circle cx="12" cy="33" r="2" fill="currentColor" />
    <circle cx="29" cy="30" r="2" fill="currentColor" />
    <line x1="4"  y1="36" x2="37" y2="36" stroke="currentColor" strokeWidth="1.5" />
    <line x1="4"  y1="4"  x2="4"  y2="36" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const LineChartIcon = ({ size, style }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={style} aria-hidden="true">
    <polyline points="4,32 11,20 20,26 29,12 36,7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="4" y1="4"  x2="4"  y2="36" stroke="currentColor" strokeWidth="1.5" />
    <line x1="4" y1="36" x2="37" y2="36" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const bgIcons = [
  { C: BarChartIcon,  size: 52, top: '11%', left: '3%',  opacity: 0.07, rotate: -10 },
  { C: ScatterIcon,   size: 44, top: '20%', left: '88%', opacity: 0.07, rotate: 0   },
  { C: LineChartIcon, size: 60, top: '64%', left: '5%',  opacity: 0.07, rotate: 0   },
  { C: BarChartIcon,  size: 36, top: '74%', left: '83%', opacity: 0.07, rotate: 5   },
  { C: ScatterIcon,   size: 30, top: '7%',  left: '54%', opacity: 0.06, rotate: 0   },
  { C: LineChartIcon, size: 48, top: '54%', left: '46%', opacity: 0.05, rotate: 0   },
  { C: BarChartIcon,  size: 28, top: '85%', left: '29%', opacity: 0.06, rotate: 0   },
  { C: ScatterIcon,   size: 56, top: '38%', left: '93%', opacity: 0.05, rotate: 0   },
  { C: BarChartIcon,  size: 38, top: '30%', left: '1%',  opacity: 0.05, rotate: 8   },
  { C: LineChartIcon, size: 34, top: '48%', left: '97%', opacity: 0.06, rotate: -6  },
  { C: ScatterIcon,   size: 42, top: '90%', left: '60%', opacity: 0.05, rotate: 0   },
  { C: BarChartIcon,  size: 24, top: '2%',  left: '18%', opacity: 0.06, rotate: 4   },
  { C: LineChartIcon, size: 32, top: '78%', left: '48%', opacity: 0.05, rotate: 0   },
  { C: ScatterIcon,   size: 26, top: '16%', left: '72%', opacity: 0.06, rotate: 0   },
]

function App() {
  const active = useActiveSection()
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-brand">Andrew Peters</div>
        <ul className="nav-links">
          <li><a href="#home"                   className={`nav-link${active === 'home'                   ? ' active' : ''}`}>HOME</a></li>
          <li><a href="#projects"               className={`nav-link${active === 'projects'               ? ' active' : ''}`}>DATA VISUALISATION PROJECTS</a></li>
          <li><a href="#data-science-projects"  className={`nav-link${active === 'data-science-projects'  ? ' active' : ''}`}>DATA SCIENCE PROJECTS</a></li>
          <li><a href="#publications"           className={`nav-link${active === 'publications'           ? ' active' : ''}`}>PUBLICATIONS</a></li>
          <li><a href="#about"                  className={`nav-link${active === 'about'                  ? ' active' : ''}`}>ABOUT</a></li>
        </ul>
      </nav>

      <main className="hero" id="home">
        <HeroNetwork />
        <div className="bg-icons">
          {bgIcons.map(({ C, size, top, left, opacity, rotate }, i) => (
            <div
              key={i}
              className={`bg-icon-wrap float-${i % 5}`}
              style={{ position: 'absolute', top, left, opacity, rotate: rotate ? `${rotate}deg` : undefined }}
            >
              <C size={size} style={{ display: 'block', color: '#333' }} />
            </div>
          ))}
        </div>

        <div className="hero-inner">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-highlight">Andrew Peters</span>
            </h1>
            <div className="hero-skills">
              <span className="hero-skill-tag">Data Visualisation</span>
              <span className="hero-skill-tag">Data Science</span>
            </div>
            <p className="hero-intro">
              PhD Data Scientist specialising in <b>RShiny development</b> and <b>applied machine learning</b>.<br /><br />
              My work spans <b>sports analytics, finance, and pharmaceutical R&D</b> — turning complex datasets into clear, actionable insights.
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/andrew-peters-phd-70b58292/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/andypetes94"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="mailto:andrewpeters1994@gmail.com"
                className="social-btn"
                aria-label="Email"
              >
                <EmailIcon />
              </a>
              <a
                href="https://scholar.google.com/citations?user=nIgl7IMAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Google Scholar"
              >
                <GoogleScholarIcon />
              </a>
            </div>
            {/*<p className="hero-tagline">
              <em>Good analysis isn't just accurate. It's understood.</em>
            </p>*/}
          </div>

          <div className="hero-photo">
            <div className="photo-circle">
              <img src="/profile.jpeg" alt="Andrew Peters" className="profile-photo" />
            </div>
          </div>
        </div>
      </main>

      <Projects />
      <DataScienceProjects />
      <Publications />
      <About />

      <footer className="footer">
        <p>© 2026 Andrew Peters · Data Science Portfolio</p>
      </footer>
    </div>
  )
}

export default App
