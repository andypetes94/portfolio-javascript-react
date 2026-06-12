import { useState } from 'react'

const BASE = 'https://andypetes94.github.io/portfolio-andrewpeters'

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: 5, verticalAlign: 'middle' }}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const redesigns = [
  {
    example: 'Example 1',
    title: 'Household Net Wealth',
    before: `${BASE}/images/before_1.png`,
    after: `${BASE}/images/after_1.png`,
    improvements: `${BASE}/images/Improvements_1.png`,
    impact: 'The redesigned chart experienced enhanced social media interaction and visibility compared to its predecessor.',
  },
  {
    example: 'Example 2',
    title: 'Loan Interest Rates',
    before: `${BASE}/images/before_2.png`,
    after: `${BASE}/images/after_2.png`,
    improvements: `${BASE}/images/Improvements_2.png`,
    impact: 'Publicly released with strong social media engagement.',
  },
]

const hyroxBefore = [
  { src: `${BASE}/images/Avg_Bar.jpg`,        label: 'Average splits (bar)' },
  { src: `${BASE}/images/Avg_Cumulative.jpg`, label: 'Cumulative averages' },
  { src: `${BASE}/images/Heart_Rate.jpg`,     label: 'Heart rate trace' },
]

const methodology = [
  {
    part: 'Part 1',
    title: 'Pre-Chart Thinking',
    image: `${BASE}/images/Pre_Chart_Thinking.png`,
    desc: 'Establishing conceptual foundations — audience, purpose, and message — before any visual execution begins.',
  },
  {
    part: 'Part 2',
    title: 'Systematic Redesign Template',
    image: `${BASE}/images/Redesign_Template.png`,
    desc: 'A structured checklist-based approach that guides iterative improvements from raw chart to polished output.',
  },
]

const workshops = [
  {
    type: 'Technical',
    title: 'ggplot2 & Data Visualisation in R',
    sessions: ['From Data to Design: An Introduction to ggplot2'],
    topics: [
      'Layer-by-layer visual construction',
      'Colour, theme, and layout customisation',
      'Design principle implementation in R',
      'Reproducible reporting workflows',
    ],
    format: '1 – 3 hour formats',
  },
  {
    type: 'Non-Technical',
    title: 'Principles of Data Visualisation',
    sessions: ['Design Thinking for Analysts'],
    topics: [
      'Best and worst practices in data visualisation',
      'Research-based approaches for chart engagement',
      'Clarity, simplicity, and storytelling application',
    ],
    format: 'Delivered at Central Bank of Ireland',
  },
]

function HyroxLightbox({ src }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="hyrox-thumb-wrap" onClick={() => setOpen(true)}>
        <img src={src} alt="Combined HYROX performance graphic" className="hyrox-thumb" />
        <div className="hyrox-thumb-hint">Click to expand</div>
      </div>
      {open && (
        <div className="lightbox-overlay" onClick={() => setOpen(false)}>
          <img src={src} alt="Combined HYROX performance graphic" className="lightbox-img" />
          <button className="lightbox-close" onClick={() => setOpen(false)} aria-label="Close">✕</button>
        </div>
      )}
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">

        <div className="projects-header">
          <h2 className="projects-heading">Data Visualisation Projects</h2>
        </div>

        {/* ── Methodology ── */}
        <div className="proj-section">
          <div className="proj-section-label">Redesign Methodology</div>
          <p className="proj-section-intro">
            Redesigning a chart is about understanding audience perception and context, not just aesthetics.
          </p>
          <div className="methodology-grid">
            {methodology.map((m) => (
              <div key={m.part} className="methodology-card">
                <div className="methodology-part">{m.part}</div>
                <h4 className="methodology-title">{m.title}</h4>
                <img src={m.image} alt={m.title} className="methodology-img" />
                <p className="methodology-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Before / After Redesigns ── */}
        <div className="proj-section">
          <div className="proj-section-label">Data Visualisation Redesign</div>

          {redesigns.map((proj) => (
            <div key={proj.example} className="ba-card">
              <div className="ba-card-header">
                <span className="ba-badge">{proj.example}</span>
                <h3 className="ba-title">{proj.title}</h3>
              </div>
              <div className="ba-grid">
                <div className="ba-col">
                  <div className="ba-col-label">Before</div>
                  <img src={proj.before} alt={`Before – ${proj.title}`} className="ba-img" />
                </div>
                <div className="ba-col">
                  <div className="ba-col-label after">After</div>
                  <img src={proj.after} alt={`After – ${proj.title}`} className="ba-img" />
                </div>
              </div>
              <div className="ba-improvements">
                <div className="ba-improvements-label">What changed</div>
                <img src={proj.improvements} alt="Summary of improvements" className="ba-img" />
              </div>
              <p className="ba-impact">{proj.impact}</p>
            </div>
          ))}

          {/* HYROX project */}
          <div className="ba-card">
            <div className="ba-card-header">
              <span className="ba-badge">Example 3</span>
              <h3 className="ba-title">Personal HYROX Performance Data</h3>
              <a
                href="https://nightingaledvs.com/from-metrics-to-mood/"
                target="_blank"
                rel="noopener noreferrer"
                className="ba-publication-link"
              >
                Published in Nightingale Magazine <ExternalLinkIcon />
              </a>
            </div>
            <div className="ba-col" style={{ marginBottom: 20 }}>
              <div className="ba-col-label">Before (three separate charts)</div>
              <div className="hyrox-before-grid">
                {hyroxBefore.map((img) => (
                  <div key={img.label} className="hyrox-before-item">
                    <img src={img.src} alt={img.label} className="ba-img" />
                    <div className="hyrox-img-label">{img.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ba-col">
              <div className="ba-col-label after">After (unified graphic)</div>
              <HyroxLightbox src={`${BASE}/Visuals/HYROX.Combined.png`} />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
