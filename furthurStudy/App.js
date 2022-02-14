const App = () => {
  return (
    <div>
      <Alert msg="alert alert! hungry for peking duck!" />
      <Button msg="click me for peking duck! 🍗" />
      <br></br>
      <br></br>
      <Card
        title="Peking Duck🍗"
        text="Favorite food and I want one now, please"
        pic="https://static01.nyt.com/images/2019/01/28/dining/kc-peking-duck/kc-peking-duck-articleLarge-v2.jpg"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
