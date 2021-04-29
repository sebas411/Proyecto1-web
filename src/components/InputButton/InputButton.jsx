import React from 'react'
import PropTypes from 'prop-types'

const InputButton = ({ svg, text }) => (
  <li>
    <button type="button">
      {svg}
      <span>{text}</span>
    </button>
  </li>
)

InputButton.propTypes = {
  svg: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
}

export default InputButton
