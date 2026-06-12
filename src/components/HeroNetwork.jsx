import { Particles, ParticlesProvider, useParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const OPTS = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
    },
    modes: {
      repulse: { distance: 180, duration: 0.4, speed: 1.5 },
    },
  },
  particles: {
    color: { value: '#888888' },
    links: {
      color: '#aaaaaa',
      distance: 160,
      enable: true,
      opacity: 0.35,
      width: 0.8,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
    number: {
      value: 130,
      density: { enable: true },
    },
    opacity: { value: 0.8 },
    shape: { type: 'circle' },
    size: {
      value: 5,
      random: { enable: true, minimumValue: 2 },
    },
  },
}

function ParticlesCanvas() {
  const { loaded } = useParticlesProvider()
  if (!loaded) return null
  return (
    <Particles
      id="hero-particles"
      options={OPTS}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    />
  )
}

export default function HeroNetwork() {
  return (
    <ParticlesProvider init={loadSlim}>
      <ParticlesCanvas />
    </ParticlesProvider>
  )
}
