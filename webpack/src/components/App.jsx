import { useState } from "react";
import logo from '../img/webpacklogo.png'

export const App = () => {
  const [state, setState] = useState(0);
  const arr = []

  return (
    <main>
			<img src={logo} style={{maxWidth: 400}}  alt="pic" />
      <p>{state}</p>

      <button onClick={() => setState((prev) => (prev += 1))}>+</button>
      <button onClick={() => setState((prev) => (prev -= 1))}>-</button>
    </main>
  );
};
