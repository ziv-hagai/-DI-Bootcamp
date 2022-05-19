const Todo = (props) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <p>todo #{props.id}</p>
      <h3>{props.title}</h3>
      {props.completed ? <i>done</i> : <i>pending</i>}
    </div>
  )
};

export default Todo;
