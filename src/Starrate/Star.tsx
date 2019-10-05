import React from 'react'
import { DEFAULT_SIZE_PROP, getIconWidth } from '../size'
import DotSmallSvg from './DotSmallSvg'
import StarSvg from './StarSvg'

export type StarProps = typeof defaultProps & {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
}

export type StarState = 'off' | 'dim' | 'lit'

const defaultProps = {
  ...DEFAULT_SIZE_PROP,
  state: 'off' as StarState,
  dimOpacity: 0.25,
  disabled: false,
}

const Star = (props: StarProps) => {
  const { size, state, dimOpacity, disabled, ...mouseActions } = props

  const dotStyle: React.CSSProperties = {
    opacity: getDotOpacity(props),
    transition: 'opacity 100ms ease-in-out',
  }
  const starStyle: React.CSSProperties = {
    opacity: getStarOpacity(props),
    transform: `scale(${state === 'off' ? 0 : 1})`,
    transformOrigin: 'center',
    transition: 'opacity 200ms ease-in-out, transform 100ms ease-in-out',
  }

  const w = getIconWidth(size)
  const cursor = disabled ? 'auto' : 'pointer'

  return (
    <svg width={w} height={w} style={{ cursor }} {...mouseActions}>
      <g style={dotStyle} x={-0.2} y={0.9}>
        <DotSmallSvg />
      </g>
      <g style={starStyle}>
        <StarSvg />
      </g>
    </svg>
  )
}

const getDotOpacity = (props: StarProps): number => {
  switch (props.state) {
    case 'off':
      return props.dimOpacity
    case 'dim':
    case 'lit':
      return 0
  }
}

const getStarOpacity = (props: StarProps): number => {
  switch (props.state) {
    case 'off':
      return 0
    case 'dim':
      return props.dimOpacity
    case 'lit':
      return 1
  }
}

Star.defaultProps = defaultProps

export default Star
