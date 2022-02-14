const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedCompnent name="Evie"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));