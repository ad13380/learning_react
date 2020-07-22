// // this is JSX, an HTML extention of Javascript
// const title = <h1>My First React Element!</h1>;
// const desc = <p>I just learned how to create a React node and render it into the DOM.</p>;

const title = 'First React Element!';
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Anthony';

// recommended although not necessary to wrap two or more lines of JSX in parentheses
const header = (
  // use of { } means you are creating a JSX expression
  // this is like string interpolation, you're leaving JSX and writing javascript
  <header>
    <h1 id={ myTitleID }>{ name }'s { title }</h1>
    {/* NOTE THIS IS NOT HTML, e.g. for adding a class to an element you use className="  ", not class="" */}
    <p className="main-desc">{ desc }</p> 
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
); 