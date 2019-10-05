import React, { useState } from 'react'
import { DEFAULT_SIZE_PROP } from '../size'
import Star, { StarState } from './Star'

type StarrateProps = typeof defaultProps & {
  rating?: number
  style?: React.CSSProperties
  onRatingChange?: (rating: number) => void
}

const defaultProps = {
  ...DEFAULT_SIZE_PROP,
  disabled: false,
  maxRating: 5,
}

const Starrate = (props: StarrateProps) => {
  const { rating, maxRating, size, disabled, style, onRatingChange } = props

  const [hoverIndex, setHoverIndex] = useState<number>(-1)

  const resetHover = () => setHoverIndex(-1)
  const setHover = (i: number) => () => setHoverIndex(i)

  const handleClick = (i: number) => () =>
    onRatingChange && onRatingChange(i + 1)

  const getStarState = (i: number): StarState => {
    const unlit = () => (rating != null ? 'dim' : 'off')

    if (!disabled && hoverIndex >= 0) {
      if (i <= hoverIndex) {
        return 'lit'
      }
      return unlit()
    }

    if (rating != null && i < rating) {
      return 'lit'
    }
    return unlit()
  }

  const createStar = (state: StarState, i: number): JSX.Element => (
    <Star
      key={i}
      state={state}
      disabled={disabled}
      size={size}
      onMouseEnter={setHover(i)}
      onMouseLeave={resetHover}
      onClick={handleClick(i)}
    />
  )

  const stars = range(0, maxRating)
    .map(getStarState)
    .map(createStar)

  return <div style={style}>{stars}</div>
}

const range = (from: number, to: number) => {
  const result = []
  let n = from
  while (n < to) {
    result.push(n)
    n += 1
  }
  return result
}

Starrate.defaultProps = defaultProps

export default Starrate
