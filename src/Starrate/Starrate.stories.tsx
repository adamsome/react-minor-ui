import { action } from '@storybook/addon-actions'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { SIZES } from '../size'
import Starrate from './Starrate'

export default {
  component: Starrate,
  title: 'Starrate',
  excludeStories: ['actions'],
  decorators: [withKnobs],
}

export const actions = {
  onRatingChange: action('onRatingChange'),
}

const common = {
  ...actions,
  style: { marginBottom: '1rem' },
}

export const unrated = () => (
  <>
    {[...SIZES].reverse().map((size, i) => (
      <Starrate key={i} size={size} {...common} />
    ))}
  </>
)

export const rated = () => (
  <>
    {[...SIZES].reverse().map((size, i) => (
      <Starrate key={i} rating={number('rating', 3)} size={size} {...common} />
    ))}
  </>
)

export const maxRating = () => (
  <Starrate
    maxRating={number('maxRating', 10)}
    rating={number('rating', 3)}
    {...actions}
  />
)

export const disabled = () => (
  <Starrate
    disabled={boolean('disabled', true)}
    rating={number('rating', 3)}
    {...actions}
  />
)

export const colored = () => (
  <div style={{ color: '#0971f5' }}>
    <Starrate
      rating={number('rating', 3)}
      disabled={boolean('disabled', false)}
      {...actions}
    />
  </div>
)
