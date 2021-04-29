import React from 'react'
import PropTypes from 'prop-types'

const Column = ({
  title, svgList, catList, color,
}) => {
  const elementList = []
  for (let i = 0; i < svgList.length; i += 1) {
    elementList.push(
      <li key={i}>
        <a href=".">
          {svgList[i]}
          <span>{catList[i]}</span>
        </a>
      </li>,
    )
  }
  elementList.push(
    <li key={svgList.length}>
      <a href="." style={{ borderColor: color }}>
        <svg viewBox="0 0 48 48">
          <g fill="none">
            <path d="M10 10h26v26H10z" />
            <path style={{ fill: color }} d="M14 11c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 20c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0-10c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm20-4c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0 20c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-10c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zM24 11c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 20c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0-10c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z" />
          </g>
        </svg>
        <span>More Topics »</span>
      </a>
    </li>,
  )

  return (
    <div>
      <h2 style={{ color }}>{`${title} ›`}</h2>
      <ul>
        {elementList}
      </ul>
    </div>
  )
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
  svgList: PropTypes.arrayOf(PropTypes.element).isRequired,
  catList: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
}

export default Column
