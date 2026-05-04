import React from 'react'

const Child = React.memo(function Child() {
  console.log('Child rendered')

  return <p>Child component</p>
})

export default Child
