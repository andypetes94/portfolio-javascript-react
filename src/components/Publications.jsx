const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: 4, verticalAlign: 'middle' }}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true" style={{ marginRight: 5, verticalAlign: 'middle' }}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const ThumbPlaceholder = ({ accent }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <rect x="1" y="1" width="30" height="30" rx="3" stroke={accent} strokeWidth="1.5" strokeDasharray="4 3" />
    <circle cx="11" cy="12" r="3" fill={accent} opacity="0.5" />
    <path d="M1 22 L10 14 L17 20 L23 13 L31 22" stroke={accent} strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity="0.6" />
  </svg>
)

const pubGroups = [
  {
    label: 'Football Analytics',
    accent: '#52b788',
    thumbBg: 'rgba(82, 183, 136, 0.08)',
    entries: [
      {
        year: 2026,
        title: 'When Timing Matters: Evaluating Temporal Leakage in Machine Learning Models of Football Pass Turnovers',
        journal: 'Research Quarterly for Exercise and Sport',
        description: 'Compares the original xPT model with leakage-corrected alternatives across multiple modelling approaches to distinguish retrospective from prospective models.',
        paper: 'https://doi.org/10.1080/02701367.2026.2677718',
        github: 'https://github.com/andypetes94/xTurnovers_Models',
        image: '/Timing_Matters.png',
      },
      {
        year: 2026,
        title: 'Applying an Expected Pass Turnovers Model to Inform Pressing Strategies in Professional Football',
        journal: 'International Journal of Performance Analysis in Sport',
        description: 'Extends the xPT framework to inform pressing strategy and introduces the Expected Pass Turnovers Forced (xPTF) metric.',
        paper: 'https://www.tandfonline.com/doi/full/10.1080/24748668.2026.2671547',
        github: 'https://github.com/andypetes94/ExpectedPassTurnovers',
        image: '/Applications.png',
      },
      {
        year: 2025,
        title: 'Defining Pressing Roles in Football',
        journal: 'International Journal of Computer Science in Sport',
        description: 'Uses a semi-supervised machine learning approach with Shapley values and clustering to identify pressing roles beyond traditional positional labels.',
        paper: 'https://doi.org/10.2478/ijcss-2025-0013',
        github: null,
        image: '/Pressing_Roles.png',
      },
      {
        year: 2025,
        title: 'Counterpressing in Football',
        journal: 'International Journal of Performance Analysis in Sport',
        description: 'Employs a rule-based approach to classify counterpressing and examines relationships between rest-defence positioning and shot or territory concession.',
        paper: 'https://www.tandfonline.com/doi/full/10.1080/24748668.2025.2473799',
        github: null,
        image: '/Counterpressing.jpg',
      },
      {
        year: 2024,
        title: 'Modelling Passing in Football',
        journal: 'Journal of Sport Sciences',
        description: 'Creates a novel metric, Expected Pass Turnovers (xPT), using a logistic mixed-effects model to evaluate possession retention from passing events.',
        paper: 'https://www.tandfonline.com/doi/full/10.1080/02640414.2024.2379697',
        github: 'https://github.com/andypetes94/ExpectedPassTurnovers/',
        image: '/Passing_Turnovers.jpg',
      },
    ],
  },
  {
    label: 'Conference Presentations',
    accent: '#6394d2',
    thumbBg: 'rgba(99, 148, 210, 0.08)',
    entries: [
      {
        year: 2022,
        title: 'A Machine Learning Approach to Identify Pressing Targets in Football',
        journal: '13th World Congress of Performance Analysis of Sport',
        description: 'Demonstrated how machine learning and positional data can identify pressing triggers and target patterns for elite sports environments.',
        paper: null,
        github: null,
        image: '/Conference.jpg',
      },
    ],
  },
  {
    label: 'Other Research',
    accent: '#c47c5a',
    thumbBg: 'rgba(196, 124, 90, 0.08)',
    entries: [
      {
        year: 2023,
        title: 'Inferring Somatic Mutations from RNA-Seq Data',
        journal: 'Genetics',
        description: 'Investigates germline and somatic mutation rates, finding that late-replicated regions show evidence of an elevated rate of somatic mutation.',
        paper: 'https://academic.oup.com/genetics/article/225/2/iyad128/7224426?login=false',
        github: null,
        image: '/Genetics._Publicationjpg.jpg',
      },
    ],
  },
]

export default function Publications() {
  return (
    <section id="publications" className="publications">
      <div className="pub-inner">
        <div className="pub-header">
          <h2 className="pub-heading">Publications</h2>
          <p className="pub-subheading">
            Peer-reviewed research across football analytics, machine learning, and computational biology.
          </p>
        </div>

        {pubGroups.map((group) => (
          <div key={group.label} className="pub-group">
            <div className="pub-group-label">{group.label}</div>

            <div className="pub-list">
              {group.entries.map((pub) => (
                <article key={pub.title} className="pub-entry">
                  <div
                    className="pub-thumb"
                    style={{ background: group.thumbBg }}
                  >
                    {pub.image
                      ? <img src={pub.image} alt={pub.title} className="pub-thumb-img" />
                      : <ThumbPlaceholder accent={group.accent} />
                    }
                  </div>

                  <div className="pub-body">
                    <div className="pub-meta">
                      <span className="pub-year-badge" style={{ color: group.accent, background: `${group.thumbBg}`, borderColor: `${group.accent}40` }}>
                        {pub.year}
                      </span>
                      <span className="pub-journal">{pub.journal}</span>
                    </div>
                    <h3 className="pub-title">{pub.title}</h3>
                    <p className="pub-desc">{pub.description}</p>
                    {(pub.paper || pub.github) && (
                      <div className="pub-links">
                        {pub.paper && (
                          <a href={pub.paper} target="_blank" rel="noopener noreferrer" className="pub-btn pub-btn-primary" style={{ background: group.accent, borderColor: group.accent }}>
                            Read Paper <ExternalLinkIcon />
                          </a>
                        )}
                        {pub.github && (
                          <a href={pub.github} target="_blank" rel="noopener noreferrer" className="pub-btn pub-btn-ghost">
                            <GitHubIcon /> GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
