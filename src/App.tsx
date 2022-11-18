import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { counterActions } from "./store/counter";
import reactLogo from "./assets/react.svg";
import "./App.css";
/* if you need help to understand the notes, check the readme file or go to my youtube channel ------- */

function App() {
  /* #4 - React redux library - here in the page that we need the actions and the state we import useSelector, useDispatch and counterActions */

  /* useDispatch, necessary to active the actions */
  const dispatch = useDispatch();

  /* useSelector, to get the newest state, we can also get other states, example: ((state: RootState) => state.isAuth.isAuth) */
  const counter = useSelector((state: RootState) => state.counter.value);
  const isEven = useSelector((state: RootState) => state.counter.isEven);

  function increment() {
    /* usage of our increment action */
    dispatch(counterActions.increment(1));
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* here is our const counter that come from useSelector (the state is managed by redux) */}
        <button onClick={increment}>count is {counter}</button>
        {/* here is our const isEven that come from useSelector (the state is managed by redux) */}
        <p>{isEven ? "even" : "odd"}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
