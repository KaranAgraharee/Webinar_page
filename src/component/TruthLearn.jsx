import { learnSection, truthSection, truthContent  } from '../assets/Constants/sections'
import Reveal, { StaggerItem, StaggerReveal } from '../assets/animations/reveal.jsx'

const TruthLearn = () => (
  <>
    <section className="section truth-section">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">{truthSection.eyebrow}</span>
          <h2 className="section-title">{truthSection.title}</h2>
        </Reveal>

        <Reveal delay={0.1}>
           <div className="truth-box">
               {truthContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
                 ))}
           </div>
        </Reveal>
      </div>
    </section>

    <section className="section section-soft learn-section">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">{learnSection.eyebrow}</span>
          <h2 className="section-title">{learnSection.title}</h2>
          <p className="section-subtitle">{learnSection.description}</p>
        </Reveal>

        <StaggerReveal className="card-grid learn-grid">
          {learnSection.items.map(({ num, title, desc }) => (
            <StaggerItem key={num} variant="cardReveal">
              <article className="card learn-card">
                <span className="learn-num">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  </>
)

export default TruthLearn
