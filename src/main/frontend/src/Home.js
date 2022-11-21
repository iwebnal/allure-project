import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './styles/index.css';

function Home(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                ></a>
                <div>
                    <Link to="/reportsPage">Go to Reports Page</Link>
                </div>
            </header>
        </div>
    );
  }

export default Home;