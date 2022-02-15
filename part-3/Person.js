const Person = ({name, age, hobbies}) => {
  let personName = name.length > 8 ? name.slice(0, 6) : name;
  let msg = age > 18 ? <h3>please go vote!</h3> : <h3>you must be 18</h3>;
  return (
    <div>
      <p>Learn some information about this person</p>
      {msg}
      <p>Name: {personName}</p>
      <p>Age: {age}</p>
      <b>Hobbies:</b>
      <ul>
        {hobbies.map(hobby =><li>{hobby}</li>)}
      </ul>
    </div>
  );
};
