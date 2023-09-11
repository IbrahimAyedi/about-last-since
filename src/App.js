import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import axios from "axios";
import Info from "./Components/Info";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(list);
  // useing Fetch method

  //   const getUsers=()=>{
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users=>setList(users)).then(setLoading(false)).catch(error=>console.log(error))
  //    }
  //  useEffect(() => {

  //  getUsers()
  //  }, [])

  // useing axios method

  const getUsers = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random")
      setList(res.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      // alert("Get Error");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route
            path="/"
            element={<UserList data={list} loading={loading} />}
            />
          <Route
            element={<Info data={list} loading={loading} />}
            path="/info/:id"
            />
        </Routes>
      </Router> */}
      <img src={list} alt="" />
    </div>
  );
}

export default App;
