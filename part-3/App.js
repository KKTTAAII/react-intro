const App = () => {
    return (
        <div>
            <Person name="KrataiPrasert" age="30" hobbies={["eating","loving doggo","sleeping"]}/>
            <Person name="Evie" age="5" hobbies={["playing tug war","begging for treats"]}/>
            <Person name="Jo" age="31" hobbies={["working","hunting"]}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));