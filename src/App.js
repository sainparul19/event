import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Table from "./components/Table";
import axios from "axios";

export const StudentContext = React.createContext();

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://my-json-server.typicode.com/sainparul19/projson/posts")
      .then((res) => {
        console.log(res);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <StudentContext.Provider value={info}>
        <Search />
        <Table />
      </StudentContext.Provider>
    </div>
  );
}

export default App;
