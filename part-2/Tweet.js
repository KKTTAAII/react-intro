const Tweet = (props) => {
    return (
        <div>
            <h1>{props.msg}</h1>
            <p>Tweet from : {props.username}</p>
            <p>Name: {props.name}</p>
            <span>Date: {props.date}</span>
        </div>
    )
}