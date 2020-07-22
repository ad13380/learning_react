const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player"> 
      {/* the classnames are purely for css purposes */}
      <span className="player-name">
        Anthony
      </span>
      <Counter />   
    </div>
  );
}

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

// top level components
const App = () => {
  return (
    <div className="scoreboard">
      <Header />

      {/* Players list */}
      <Player />
    </div>

  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);