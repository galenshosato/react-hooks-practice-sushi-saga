import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [filter4, setFilter4] = useState({id: 1})

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushis(data))
  }, [])

  const filteredList = sushis.filter(sushi => {
    return sushi.id === filter4.id
  })

  return (
    <div className="app">
      <SushiContainer sushis={filteredList} setSushis={setSushis} />
      <Table />
    </div>
  );
}

export default App;
