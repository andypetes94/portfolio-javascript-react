// eslint-disable-next-line no-unused-vars
const BASE = 'https://andypetes94.github.io/portfolio-andrewpeters'

// eslint-disable-next-line no-unused-vars
const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: 5, verticalAlign: 'middle' }}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const workshops = [
  {
    type: 'Technical',
    title: 'ggplot2 & Data Visualisation in R',
    session: 'From Data to Design: An Introduction to ggplot2',
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
    session: 'Design Thinking for Analysts',
    topics: [
      'Best and worst practices in data visualisation',
      'Research-based approaches for chart engagement',
      'Clarity, simplicity, and storytelling application',
    ],
    format: 'Delivered at Central Bank of Ireland',
  },
]

const experience = [
  {
    role: 'Data Scientist',
    company: 'Pfizer',
    period: 'Jan 2025 - Present',
    bullets: [
      'Develops and maintains RShiny applications for global manufacturing and quality teams.',
      'Participates in UI/UX design group for analytical app interfaces.',
      'Supports adoption of Statistical Process Investigator app.',
    ],
  },
  {
    role: 'Senior Data Visualisation Specialist',
    company: 'Central Bank of Ireland',
    period: 'Oct 2023 - Nov 2024',
    bullets: [
      'Created internal RShiny dashboards for cross-departmental reporting.',
      'Designed visuals for external economic publications.',
      'Delivered data visualisation training to analysts across the organisation.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Leicester City Football Club',
    period: 'Feb 2021 - Sep 2023',
    bullets: [
      'Built analytical models evaluating team and player performance.',
      'Developed custom RShiny applications for coaching staff.',
      'Presented research at the 13th World Congress of Performance Analysis of Sport (2022).',
    ],
  },
  {
    role: 'Genomics Data Scientist',
    company: 'University of Galway',
    period: 'Oct 2018 - Feb 2021',
    bullets: [
      'Optimised SGE high-performance computing workflows using Snakemake',
      'Created a pipeline for inferring somatic mutations from RNA-Seq data.',
      'Explored the effects of evolutionary selection on mammalian stop codons.',
    ],
  },
]

const education = [
  {
    degree: 'PhD Data Science',
    institution: 'Middlesex University',
    period: 'Feb 2021 - Feb 2024',
    detail: 'Focused on tactical football analysis using machine learning.',
  },
  {
    degree: 'MSc Genomics Data Science',
    institution: 'University of Galway',
    period: 'Sep 2018 - Sep 2019',
    detail: 'Graduated with a High First Class Honours.',
  },
  {
    degree: 'BSc Genetics',
    institution: 'University College Dublin',
    period: 'Sep 2013 -  May 2017',
    detail: 'Graduated with a High Second Class Honours.',
  },
]

const skills = [
  { category: 'Languages',       items: ['R', 'Python', 'SQL', 'JavaScript'] },
  { category: 'Visualisation',   items: ['RShiny', 'ggplot2', 'Plotly', 'Tableau', 'Power BI', 'D3.js'] },
  { category: 'Machine Learning', items: ['XGBoost', 'Mixed Effects Modelling', 'Semi-supervised Learning', 'Logistic Regression'] },
  { category: 'Cloud & Other',   items: ['AWS', 'UI/UX Design', 'React'] },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">

        <div className="about-header">
          <h2 className="about-heading">About</h2>
          <p className="about-bio">
            I'm a Data Scientist with a PhD, specialising in <strong>data visualisation</strong>,{' '}
            <strong>RShiny development</strong>, and <strong>applied machine learning</strong>. My
            work spans sports analytics, finance, and pharmaceutical R&D — turning complex datasets
            into clear, actionable insights for non-technical audiences.
          </p>
        </div>

        {/* Work Experience */}
        <div className="about-section">
          <div className="about-section-label">Work Experience</div>
          <div className="about-list">
            {experience.map((job) => (
              <div key={job.company} className="about-entry">
                <div className="about-entry-left">
                  <span className="about-period">{job.period}</span>
                </div>
                <div className="about-entry-body">
                  <div className="about-role">{job.role}</div>
                  <div className="about-org">{job.company}</div>
                  <ul className="about-bullets">
                    {job.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="about-section">
          <div className="about-section-label">Education</div>
          <div className="about-list">
            {education.map((edu) => (
              <div key={edu.degree} className="about-entry">
                <div className="about-entry-left">
                  <span className="about-period">{edu.period}</span>
                </div>
                <div className="about-entry-body">
                  <div className="about-role">{edu.degree}</div>
                  <div className="about-org">{edu.institution}</div>
                  <p className="about-detail">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Style Guide (commented out — uncomment to restore) */}
        {/* <div className="about-section">
          <div className="about-section-label">CBI Data Visualisation Style Guide</div>
          <div className="styleguide-card">
            <div className="styleguide-text">
              <div className="styleguide-meta">Central Bank of Ireland · 2024</div>
              <p className="styleguide-desc">
                Developed in collaboration with the communications department to standardise visual outputs
                across RShiny dashboards and external publications. Covers colour palettes, labelling
                conventions, annotation best practice, and narrative structure — implemented to elevate
                visual standards and ensure chart consistency across the organisation.
              </p>
              <a
                href={`${BASE}/pdf/CBI Data Viz Style Guide.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="styleguide-btn"
              >
                View Style Guide <ExternalLinkIcon />
              </a>
            </div>
            <div className="styleguide-img-wrap">
              <img src={`${BASE}/images/Palette.png`} alt="CBI colour palette" className="styleguide-img" />
            </div>
          </div>
        </div> */}

        {/* Teaching */}
        <div className="about-section">
          <div className="about-section-label">Teaching &amp; Workshops</div>
          <div className="workshops-grid">
            {workshops.map((w) => (
              <div key={w.type} className="workshop-card">
                <div className="workshop-type">{w.type}</div>
                <h4 className="workshop-title">{w.title}</h4>
                <div className="workshop-session">{w.session}</div>
                <ul className="workshop-topics">
                  {w.topics.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="workshop-format">{w.format}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="about-section">
          <div className="about-section-label">Technical Skills</div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skills-group">
                <div className="skills-category">{group.category}</div>
                <div className="skills-pills">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
