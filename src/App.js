import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const InfoData = () => {

  const [dataInfo, setDataInfo] = useState([]);

  const fetchInfoData = () => {
    axios.get("http://localhost:8080/greeting")
      .then(res => {
        console.log(res);
        setDataInfo(res.data);
      });
  }

  useEffect(() => {
    fetchInfoData();
  }, [])

  // return dataInfo.map((data, index) => {
  //   return (
  //     <div>
  //       <div>{data.API}</div>
  //       <span>{data.Description}</span>
  //     </div>
  //   )
  // });

  return (
    <div>
      <div>{dataInfo.content}</div>
      <div>{dataInfo.id}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InfoData />
        </a>
      </header>
    </div>
  );
}

export default App;
