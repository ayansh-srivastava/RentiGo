import React from 'react'

const Title = (props) => {
  return (
    <div>
    <h1 className="text-3xl font-bold mt-10 text-gray-800 mb-2">{props.title}</h1>
      <p className="text-gray-600 mb-8 mt-4">{props.description}</p>
    </div>
  )
}

export default Title