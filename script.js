import { marked } from "https://cdn.skypack.dev/marked@4.0.16";

marked.setOptions({
  breaks: true });


const renderer = new marked.Renderer();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: example };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      text: event.target.value });

  }

  render() {

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "header" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement(Editor, { text: this.state.text, onChange: this.handleChange }), /*#__PURE__*/
      React.createElement(Preview, { text: this.state.text })));


  }}
// App ends

const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", null, "Editor"), /*#__PURE__*/
    React.createElement("textarea", {
      id: "editor",
      value: props.text,
      onChange: props.onChange })));



}; //Editor

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const markdown = this.props.text;
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", null, "Preview"), /*#__PURE__*/
      React.createElement("div", {
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: marked(markdown, { renderer: renderer }) } })));




  }}
//Preview

const example = `# This is an example of an H1 header.
## This is an H2 sub-header example.
**This is bold text**.
*This text is italicized*.
You can share a block quote like this:
> Don't believe everything you read on the internet, dude.
> Abraham Lincoln
Inline code is made possible by using \`backticks\`.
If you want to add a list, tha's easy too. You can make the list ordered or unordered like so:

### List 
- Dogs
- Cats
- Birds

### List
1. Winner
2. Runner-up
3. Third place
A block of code is made possible by triple back ticks, and is shown below:
\`\`\`
function(arg){
  return (arg + 1);
}
\`\`\`

You can even add links to your text like this: [FreeCodeCamp](www.freecodecamp.org).

Lastly, you can also include an image to spice things up.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));