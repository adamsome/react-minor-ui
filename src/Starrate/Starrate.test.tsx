import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Starrate from './Starrate'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Starrate />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders correctly', () => {
  const tree = renderer.create(<Starrate rating={3} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders unrated correctly', () => {
  const tree = renderer.create(<Starrate maxRating={2} />).toJSON()
  expect(tree).toMatchSnapshot()
})
