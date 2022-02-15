const App = () => {
    const date = new Date().toISOString().replace("T"," ").slice(0,19);
    return (
        <div>
            <Tweet name="Kratai" username="Ktai" msg="Hello World" date={date}/>
            <Tweet name="Evie" username="Eve" msg="I love human food" date={date}/>
            <Tweet name="Josie" username="Jo" msg="I am tired of cooking!" date={date}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));