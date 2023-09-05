import { useState } from "react";
import MenuCard from "./components/MenuCard";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-x-2 p-2">
        <div className="w-1/4">
          <MenuCard />
        </div>
        <div className="w-3/4 bg-slate-700">w-2/3</div>
      </div>
    </>
  );
}

export default App;
