import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './styles/reports.css';

function ReportsPage(props) {

    const navigate = useNavigate();

    const navigateToReport = () => {
        navigate('/report');
    };
   
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    Header
                </div>
            </div>
            <div class="row">
                <div class="col filter-box-left">
                    <div class="dropdown-wrapp">
                        <div class="dropdown-box">
                            <div class="dropdown-center">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter text 1
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action one</a></li>
                                    <li><a class="dropdown-item" href="#">Action two</a></li>
                                    <li><a class="dropdown-item" href="#">Action three</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="dropdown-box">
                            <div class="dropdown-center">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter text 2
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action one 1</a></li>
                                    <li><a class="dropdown-item" href="#">Action two 1</a></li>
                                    <li><a class="dropdown-item" href="#">Action three 1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col filter-box-right">
                    Reports information
                </div>
            </div>
            <div class="row">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" class="col-1">#</th>
                            <th scope="col" class="col-5 row-name">Наименование</th>
                            <th scope="col" class="col-1">passed</th>
                            <th scope="col" class="col-1">broken</th>
                            <th scope="col" class="col-1">failed</th>
                            <th scope="col" class="col-1">skipped</th>
                            <th scope="col" class="col-1">new fail</th>
                            <th scope="col" class="col-1">flaky</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.map(function(object, i){
                        return (
                            <tr class="table-row" key={i} onClick={navigateToReport}>
                                <th scope="row" class="col-1">{object[0]}</th>
                                <td class="col-5 row-name">{object[1]}</td>
                                <td class="col-1">{object[2]}</td>
                                <td class="col-1">{object[3]}</td>
                                <td class="col-1">{object[4]}</td>
                                <td class="col-1">{object[5]}</td>
                                <td class="col-1">{object[6].toString()}</td>
                                <td class="col-1">{object[7].toString()}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }

export default ReportsPage;