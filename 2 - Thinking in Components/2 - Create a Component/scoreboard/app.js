// React components MUST begin with a capital letter
// otherwise they may get confused with traditional html/jsx elements
function Header() {
  return  (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

ReactDOM.render(
  // this must exactly match the name of the function
  <Header />, // same as writing <Header></Header>, but because it has no children then you can make it self closing
  document.getElementById('root')
);
