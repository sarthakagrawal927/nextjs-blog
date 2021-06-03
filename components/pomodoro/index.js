import Timer from "./Timer";

const App = () => {
  return (
    <div className='app-container'>
      <h1 style={{ color: "greenyellow", fontSize: "3rem" }}>Pomodoro Clock</h1>
      <Timer />
    </div>
  );
};

export default App;
