import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";



function App() {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
    </div>
  );
}

export default App;
