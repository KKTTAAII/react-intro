const Person = (props) => {
  let name = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
  let msg = props.age > 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>;
  return (
    <div>
      <p>Learn some information about this person</p>
      {msg}
      <p>Name: {name}</p>
      <p>Age: {props.age}</p>
      <b>Hobbies:</b>
      <ul>
        {props.hobbies.map(hobby =><li>{hobby}</li>)}
      </ul>
    </div>
  );
};
