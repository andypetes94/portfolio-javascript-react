const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
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
    period: 'Jan 2025 – Present',
    bullets: [
      'Contribute to the development and enhancement of the Statistical Process Investigator (SPI) RShiny app, a quality-control analytics platform deployed across 20 onboarded manufacturing sites and supporting 169 products.',
      'Develop generative AI solutions using Streamlit and large language models (LLMs) to automate data transformation, exploration and visualisation through conversational interfaces.',
      'Contribute as part of a small UI/UX design team, shaping interface design and usability standards across deployed RShiny applications.',
      'Present application enhancements to stakeholders at manufacturing sites globally, translating technical functionality into practical value for technical and non-technical audiences.',
    ],
  },
  {
    role: 'Senior Data Visualisation Specialist',
    company: 'Central Bank of Ireland',
    period: 'Oct 2023 – Dec 2024',
    bullets: [
      'Designed, developed and deployed internal RShiny dashboards and automated visualisation workflows, improving reporting efficiency and supporting public-facing statistical products such as Frontier Statistics.',
      'Developed the Central Bank of Ireland Data Visualisation Style Guide, aligned with emerging accessibility standards and establishing best practices for chart design, colour usage, typography and information presentation.',
      'Elevated the visualisation standards of the Quarterly Bulletin by redesigning analytical charts and graphics used in the Bank’s flagship publication.',
      'Delivered technical training on ggplot2 and non-technical training in data visualisation principles to internal staff across the organisation.',
    ],
  },
  {
    role: 'Senior Data Scientist',
    company: 'Leicester City Football Club',
    period: 'Jun 2022 – Sep 2023',
    bullets: [
      'Maintained and queried AWS-hosted database infrastructure using SQL, R and Python, developing Tableau dashboards and interactive RShiny applications for Performance Analysis, Sports Science and Recruitment teams.',
      'Delivered ad hoc analytical reports directly to the Director of Football to support recruitment and team decisions.',
      'Developed a machine-learning player evaluation framework, generating player ratings across multiple aspects of performance and deploying outputs through RShiny applications for talent identification and player comparison.',
      'Developed an XGBoost model to quantify and predict successful counterpressing events, contributing to peer-reviewed research on defensive transitions.',
      'Designed mixed-effects statistical models to evaluate the impact of turnovers on team performance, translating model outputs into actionable coaching insights.',
    ],
  },
  {
    role: 'First Team Data Scientist',
    company: 'Leicester City Football Club',
    period: 'Feb 2021 – Jun 2022',
    bullets: [
      'Cleaned and transformed match and tracking data in R to produce analysis-ready datasets for downstream modelling.',
      'Analysed high-frequency player-tracking data at 25 data points per player per second per game to identify performance trends and support decision-making.',
      'Devised an RShiny application to automate production of ggplot2 visuals for coaching staff, reducing manual reporting effort.',
      'Compiled pre- and post-match reports evaluating individual and team-level KPIs for coaching staff.',
    ],
  },
  {
    role: 'Genomics Data Scientist',
    company: 'University of Galway',
    period: 'Oct 2018 – Feb 2021',
    bullets: [
      'Developed and optimised bioinformatics workflows for RNA-Seq processing, variant detection and genomic data analysis, contributing to peer-reviewed research on somatic mutation inference from transcriptomic datasets.',
      'Applied statistical and computational methods to large-scale comparative genomics datasets, investigating evolutionary selection pressures on mammalian stop-codon usage and contributing to a publication in the Journal of Molecular Evolution.',
    ],
  },
]

const education = [
  {
    degree: 'PhD, Data Analytics',
    institution: 'Middlesex University',
    period: 'Feb 2021 – Feb 2024',
    detail:
      'Developed and evaluated machine learning and statistical models for tactical and performance analysis in elite football, including comparative assessment of machine learning algorithms, XGBoost modelling, mixed-effects frameworks and player role assignment. Presented findings at the 13th World Congress in the Performance Analysis of Sport (2022).',
    link: 'https://drive.google.com/file/d/1AI9PY8fVc-_fTPns5gA7m5e4KV6t0ZIg/view',
    linkText: 'View PhD thesis',
  },
  {
    degree: 'MSc, Genomics Data Science (High 1.1)',
    institution: 'University of Galway',
    period: 'Sep 2017 – Sep 2018',
    detail:
      'Applied computational and statistical methods to gene-expression analysis using microarray and RNA-Seq data to investigate molecular changes in osteoarthritic joint tissue.',
    link: 'https://drive.google.com/file/d/13BKNcITJWv4YPKciuLr6YTj5bGcyQfeP/view',
    linkText: 'View MSc thesis',
  },
  {
    degree: 'BSc, Genetics (High 2.1)',
    institution: 'University College Dublin',
    period: 'Sep 2013 – May 2017',
    detail:
      'Explored the function of endoplasmic reticulum proteins in hereditary disease using CRISPR-Cas9 gene-editing technology.',
    link: 'https://drive.google.com/file/d/0B_Ymc28oaww6eXNpYm5vUHV4TTg/view?resourcekey=0-pN1SqnuCRSaVli1n9i2yXg',
    linkText: 'View BSc thesis',
  },
]

const skills = [
  {
    category: 'Programming & Data',
    items: ['Python', 'R', 'SQL', 'React'],
  },
  {
    category: 'Machine Learning & Statistics',
    items: [
      'Scikit-learn',
      'XGBoost',
      'Mixed-Effects Models',
      'Random Forest',
    ],
  },
  {
    category: 'Data Visualisation & Applications',
    items: ['RShiny', 'ggplot2', 'Tableau', 'Streamlit', 'Plotly'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'API Integration', 'Linux', 'HPC (SGE)'],
  },
  {
    category: 'Other',
    items: ['Git', 'GitHub'],
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-header">
          <h2 className="about-heading">About</h2>

          <p className="about-bio">
            I&apos;m a Data Scientist with experience across pharmaceutical,
            financial and elite sports environments, developing machine
            learning solutions, analytical applications and cloud-connected
            data products. I hold a PhD in Data Analytics and an MSc in
            Genomics Data Science, and specialise in translating complex data
            into clear, actionable insights for technical and non-technical
            stakeholders.
          </p>
        </div>

        {/* Work Experience */}
        <div className="about-section">
          <div className="about-section-label">Work Experience</div>

          <div className="about-list">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="about-entry"
              >
                <div className="about-entry-left">
                  <span className="about-period">{job.period}</span>
                </div>

                <div className="about-entry-body">
                  <div className="about-role">{job.role}</div>
                  <div className="about-org">{job.company}</div>

                  <ul className="about-bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
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
              <div
                key={`${edu.institution}-${edu.degree}`}
                className="about-entry"
              >
                <div className="about-entry-left">
                  <span className="about-period">{edu.period}</span>
                </div>

                <div className="about-entry-body">
                  <div className="about-role">{edu.degree}</div>
                  <div className="about-org">{edu.institution}</div>

                  <p className="about-detail">{edu.detail}</p>

                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                    aria-label={`${edu.linkText} at ${edu.institution}`}
                  >
                    <span>{edu.linkText}</span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching and Workshops */}
        <div className="about-section">
          <div className="about-section-label">
            Teaching &amp; Workshops
          </div>

          <div className="workshops-grid">
            {workshops.map((workshop) => (
              <div
                key={workshop.type}
                className="workshop-card"
              >
                <div className="workshop-type">
                  {workshop.type}
                </div>

                <h4 className="workshop-title">
                  {workshop.title}
                </h4>

                <div className="workshop-session">
                  {workshop.session}
                </div>

                <ul className="workshop-topics">
                  {workshop.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>

                <div className="workshop-format">
                  {workshop.format}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="about-section">
          <div className="about-section-label">
            Technical Skills
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div
                key={group.category}
                className="skills-group"
              >
                <div className="skills-category">
                  {group.category}
                </div>

                <div className="skills-pills">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill"
                    >
                      {skill}
                    </span>
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