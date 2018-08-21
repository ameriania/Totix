import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/** 触摸事件 */
// import touch from "./touch";
/** 函数 curry 化 */
// import curry from "./curry";
// import xss from "./xss";
// import senior from "./senior";
// import animate  from './animate'
// import Event from './eventTarget'
// import lazycount from "./lazycount";
// import SelfString from "./string";
import shuffle from "./shuffle";
// touch();
// curry();
// senior();
// animate()
// Event()
// lazycount();
// SelfString();
shuffle();

// var vconsole = new VConsole();
// xss();
class App extends React.Component {
  constructor(props) {
    super(props);

    this.wrap = React.createRef();
  }

  componentDidMount() {
    this.wrap.current.addEventListener(
      "touchmove",
      evt => {
        // evt.preventDefault();
        evt.stopPropagation();
      },
      {
        passive: false
      }
    );

    var start = null;
    var element = this.wrap.current;
    element.style.position = "absolute";

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      element.style.left = Math.min(progress / 10, 200) + "px";
      if (progress < 2000) {
        window.requestAnimationFrame(step);
      }
    }

    // window.requestAnimationFrame(step);
  }
  render() {
    return (
      <div className="App" onTouchStart={evt => this.touchStart(evt)}>
        <div
          className="inside"
          ref={this.wrap}
          id="SomeElementYouWantToAnimate"
        >
          <h1>test</h1>
          <h1>test</h1>
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
      </div>
    );
  }

  touchStart(evt) {}

  touchMove(evt) {}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
