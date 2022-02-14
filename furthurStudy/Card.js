const Card = (props) => {
  return (
    <div class="card">
      <img src={props.pic} class="card-img-top"></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  );
};
