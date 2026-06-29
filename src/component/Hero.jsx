import {
  Tagline,
  Heading,
  Trust_Line,
  HeroTags,
  KeyFacts,
} from '../assets/Constants/hero'
import Reveal, { Float, StaggerItem, StaggerReveal } from '../assets/animations/reveal.jsx'
import Register from './RegisterButton'
import { useWebinar } from '../context/WebinarContext'
import { Webinar_info } from '../assets/Constants/Detail'
import { formatWebinarPrice } from '../utils/webinar'

const Hero = () => {
    const { webinar, loading, error } = useWebinar()
  
  return (
    <section className="hero">
      <div className="blur-circle blur1" />
      <div className="blur-circle blur2" />

      <div className="container hero-container">
        <Reveal variant="fadeLeft" animateOnMount className="hero-content">
          <StaggerReveal className="hero-badges" aria-label="Webinar highlights" animateOnMount>
            {HeroTags.map(({ label, emphasis }) => (
              <StaggerItem key={label} variant="textReveal">
                <span
                  className={`highlight-tag${emphasis ? ' highlight-tag--emphasis' : ''}`}
                >
                  {label}
                </span>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal variant="textReveal" animateOnMount delay={0.1}>
            <p className="hero-subtitle">{Tagline}</p>
          </Reveal>

          <Reveal variant="fadeUp" animateOnMount delay={0.2}>
            <h1 className="hero-title">
              {Heading[0]}  <span className='bg-orange-400/10 rounded-2xl'>{Heading[1]} {Heading[2]}</span>
            </h1>
          </Reveal>

          <Reveal variant="fadeUp" animateOnMount delay={0.3}>
          <p className="hero-description">
           Your marriage doesn't have to stay stuck forever.
              <br />
           Join this <strong className="text-highlight">FREE 90-minute live webinar</strong> and
           discover why relationships lose connection, what keeps couples trapped in
           the same painful patterns, and how healing yourself can become the first step
          toward healing your marriage.
          </p>
          </Reveal>
          <Reveal variant="fadeUp" animateOnMount delay={0.35}>
            <StaggerReveal className="key-facts" aria-label="Key webinar facts" animateOnMount>
              {KeyFacts.map(({ value, label }) => (
                <StaggerItem key={label} variant="cardReveal" className="key-fact">
                  <span className="key-fact__value">{value}</span>
                  <span className="key-fact__label">{label}</span>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </Reveal>

          <Reveal variant="fadeUp" animateOnMount delay={0.4}>
            <div className="hero-actions">
              <Register                
                className="btn btn-primary btn-primary-lg"
                pulse
                label={`Reserve My Seat · ${webinar ? formatWebinarPrice(webinar.price) : Webinar_info.price} →`}
              />
            </div>
          </Reveal>

          <StaggerReveal className="hero-meta" as="ul" animateOnMount>
            {Trust_Line.map((line) => (
              <StaggerItem key={line} as="li" variant="textReveal">
                <span className="trust-pill">
                  <span className="trust-pill__check" aria-hidden="true">
                    ✓
                  </span>
                  {line}
                </span>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </Reveal>

        <Reveal variant="fadeRight" animateOnMount delay={0.25} className="hero-image">
          <Float className="hero-image-frame">
            {/* <span className="hero-image-badge">With Khushboo</span> */}
            <img src="curosal.jpeg" alt={`${Heading[0]} webinar with Khushboo`} />
          </Float>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
