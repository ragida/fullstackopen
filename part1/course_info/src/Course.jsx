const Content = ({ parts }) => (
  <div>
    <Parts parts={parts} />
  </div>
)

const Parts = ({ parts }) => {
  return (
    <p>
      {parts.map(part => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </p>  
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>Total number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  )
}


function Course({course}) {
    return(
        <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
    )

  }
    export default Course