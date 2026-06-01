import Parts from './Parts'

function Content(props) {
  return (
    <div>
      <Parts name={props.name1} exercises={props.exercises1}/>
      <Parts name={props.name2} exercises={props.exercises2}/>
      <Parts name={props.name3} exercises={props.exercises3}/>
    </div>
  )
}


export default Content