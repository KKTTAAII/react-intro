const App = () => {
    return (
        <div>
            <Tweet name="Kratai" username="Ktai" msg="Hello World" date="2/13/2022"/>
            <Tweet name="Evie" username="Eve" msg="I love human food" date="2/10/2019"/>
            <Tweet name="Josie" username="Jo" msg="I am tired of cooking!" date="2/11/2022"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));