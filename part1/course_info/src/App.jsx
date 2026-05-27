const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  function header(course) {
    return <h1>{course}</h1> 
  }

  function content(part, exercises) {
    return (
      <p>
        {part} {exercises}
      </p>
    )
  }

  function total(ex1, ex2, ex3) {
    return <p>Number of exercises {ex1 + ex2 + ex3}</p>
  }

  return (
    <div>
      {header(course)}
      {content(part1, exercises1)}
      {content(part2, exercises2)}
      {content(part3, exercises3)}
      {total(exercises1, exercises2, exercises3)}
    </div>
  )
}

export default App
