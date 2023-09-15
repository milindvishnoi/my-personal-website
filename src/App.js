import { useEffect, useState } from "react";
import "./App.css";
import LoadingScreen from "./components/loading-screen/LoadingScreen";

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoad(true);
    }, 4200);
  }, []);
  return <div className="App">{!load ? <LoadingScreen /> : "Hello"}</div>;
}

export default App;