function CodeOnProject() {

  return (
    <section
      id="stem-project"
      className="code-on-section"
      aria-labelledby="code-on-title"
    >
      <div className="code-on-container">
        <div className="code-on-heading">
          <p className="code-on-eyebrow">STEM Entrepreneurship</p>

          <h2 id="code-on-title">
            Code On: Can You Crack the Genetic Code?
          </h2>

          <p className="code-on-introduction">
            A genetics card game designed to make science more accessible,
            enjoyable and engaging through play.
          </p>
        </div>

        <div className="code-on-card">
          <div className="code-on-image-container">
            <img
              src={`${import.meta.env.BASE_URL}CodeOn_Game.png`}
              alt="Code On genetics card game"
              className="code-on-image"
            />
          </div>

          <div className="code-on-content">
            <p>
              Code On is a problem-solving card game that introduces players
              to concepts from genetics, including DNA, codons and the genetic
              code, in a fun and interactive format.
            </p>

            <p>
              I independently managed the full project lifecycle, from the
              initial concept through to the finished product. This included
              game design, Adobe Illustrator artwork, play-testing, Kickstarter
              fundraising, manufacturing and fulfilment.
            </p>

            <div className="code-on-stat">
              <span className="code-on-stat-value">€6,742</span>
              <span className="code-on-stat-label">
                raised through Kickstarter
              </span>
            </div>

            <ul className="code-on-skills">
              <li>STEM communication</li>
              <li>Game design</li>
              <li>Adobe Illustrator</li>
              <li>Play-testing</li>
              <li>Crowdfunding</li>
              <li>Product development</li>
              <li>Manufacturing</li>
              <li>Fulfilment</li>
            </ul>

            <a
              className="code-on-link"
              href="https://www.kickstarter.com/projects/codeon/code-on-can-you-crack-the-genetic-code/community"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Kickstarter project
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodeOnProject