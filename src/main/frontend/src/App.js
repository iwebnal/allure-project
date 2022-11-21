import React, {useState, useEffect} from 'react';
import ReportsPage from './ReportsPage';
import Report from './Report';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import axios from 'axios';


function App() {
  const [dataInfo, setDataInfo] = useState([]);

  const fetchInfoData = () => {
    axios.get("http://localhost:8080/reports")
      .then(res => {
        console.log(res);
        setDataInfo(res.data);
      });
  }

  useEffect(() => {
    fetchInfoData();
  }, [])

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/reportsPage" element={<ReportsPage data={dataInfo} />}/>
          <Route exact path="/report" element={<Report />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
