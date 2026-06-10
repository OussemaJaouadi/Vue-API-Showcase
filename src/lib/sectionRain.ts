export type SectionRainLevel = 'high' | 'medium' | 'low' | 'faint' | 'whisper'

interface SectionRainConfig {
  color: string
  opacity: number
  density: number
  duration: number
  blurIntensity: string
  className: string
}

const levels: Record<SectionRainLevel, SectionRainConfig> = {
  high: {
    color: 'oklch(0.508 0.118 165.612 / 0.24)',
    opacity: 0.65,
    density: 1.35,
    duration: 120,
    blurIntensity: '0',
    className: 'falling-pattern-section'
  },
  medium: {
    color: 'oklch(0.508 0.118 165.612 / 0.18)',
    opacity: 0.45,
    density: 1.45,
    duration: 150,
    blurIntensity: '0',
    className: 'falling-pattern-section'
  },
  low: {
    color: 'oklch(0.508 0.118 165.612 / 0.13)',
    opacity: 0.3,
    density: 1.55,
    duration: 180,
    blurIntensity: '0',
    className: 'falling-pattern-section'
  },
  faint: {
    color: 'oklch(0.508 0.118 165.612 / 0.09)',
    opacity: 0.2,
    density: 1.65,
    duration: 210,
    blurIntensity: '0',
    className: 'falling-pattern-muted'
  },
  whisper: {
    color: 'oklch(0.508 0.118 165.612 / 0.05)',
    opacity: 0.12,
    density: 1.75,
    duration: 240,
    blurIntensity: '0',
    className: 'falling-pattern-muted'
  }
}

export function getSectionRain(level: SectionRainLevel): SectionRainConfig {
  return levels[level]
}
