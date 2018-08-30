import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/** 触摸事件 */
import varEvent from "./var";
// import touch from "./touch";
/** 函数 curry 化 */
// import curry from "./curry";
// import xss from "./xss";
// import senior from "./senior";
// import animate  from './animate'
// import Event from './eventTarget'
// import lazycount from "./lazycount";
// import SelfString from "./string";
// import shuffle from "./shuffle";
// import lazy from "./lazy";
// touch();
// curry();
// senior();
// animate()
// Event()
// lazycount();
// SelfString();
// shuffle();
// lazy();
varEvent();

// var vconsole = new VConsole();
// xss();
class App extends React.Component {
  constructor(props) {
    super(props);

    this.wrap = React.createRef();

    this.state = {
      clientX: "",
      clientY: "",
      showMenu: false
    };
  }

  componentDidMount() {}

  showMenu() {
    document.addEventListener(
      "contextmenu",
      evt => {
        let clientX = evt.clientX;
        let clientY = evt.clientY;
        this.setState({
          clientX: clientX + "px",
          clientY: clientY + "px",
          showMenu: true
        });
      },
      false
    );
  }

  render() {
    return (
      <div className="App" onTouchStart={evt => this.touchStart(evt)}>
        <div className="inside" id="SomeElementYouWantToAnimate">
          <h1 className=".demo">test</h1>
          <h1 className=".demo">test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>Hello toti</h1>
          <h1>Hello toti</h1>
          <h1>Hello toti</h1>
          <h1>Hello toti</h1>
          <h1>Hello toti</h1>
          <h1>Hello toti</h1>
          <h1>Hello toti</h1>
          <h1>Hello toti</h1>
          <h1>Hello CodeSandtoti</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello CodeSandbox</h1>
          <h1>Hello toti</h1>
        </div>
        <div
          ref={this.wrap}
          style={
            this.state.showMenu
              ? {
                  display: "block",
                  position: "absolute",
                  top: this.state.clientX
                }
              : { display: "none" }
          }
        >
          ()
        </div>
      </div>
    );
  }

  touchStart(evt) {}

  touchMove(evt) {}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
