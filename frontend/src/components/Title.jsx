import React from 'react'

const Title = (props) => {
  return (
    <>
    <h1 className="text-3xl font-bold mt-10 text-gray-800 mb-2 text-center">{props.title}</h1>
      <p className="text-gray-600 mb-8 text-center mt-4">{props.description}</p>
    </>
  )
}

export default Title