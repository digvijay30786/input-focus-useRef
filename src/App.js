import "./styles.css";
import { useRef } from "react";
export default function App() {
  const inputRef = useRef();
  return (
    <div className="App">
      <h1>Using of UseRef()</h1>
      <input ref={inputRef} type="text" placeholder="Enter Your Name here" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Click Focus
      </button>
    </div>
  );
}
