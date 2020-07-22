// takes three arguments that define element you want to create
const title = React.createElement(
  // argument 1: type
  'h1',
  // argument 2: object containing any attribute and value you want to give the element
  { id: 'main-title', title: 'This is a title' }, // if you don't want to pass any attributes, just put {} or null
  // argument 3: contents or CHILDREN of the element you're creating
  // e.g. any text that will display between the open/close h1 tags
  // or more elements created by React.createElement
  // or null
  'My First React Element!'
);
// this is the same as <h1 id="main-title" title"This is aa title">My First React Element!</h1>

const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React node and render it into the DOM' // you can create as many children as you want
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

// // this is what does the  creating and updating of the DOM
// // it's what connects React to the DOM
// // accepts 2 arguments
// ReactDOM.render(
//   // argument 1: the react element / javascript object that describes element you'd like to render
//   title,
//   // argument 2: actual html element you want to update / render to
//   // note: if html element already has contents in it, it will be replaced  by React element
//   document.getElementById('root') // target DOM element with id 'root'
// )

ReactDOM.render(
  header,
  document.getElementById('root')
)