function Child({ sendDataToParent }) {
  return (
    <button onClick={() => sendDataToParent('Hello from child')}>
      Send Message
    </button>
  )
}

export default Child
