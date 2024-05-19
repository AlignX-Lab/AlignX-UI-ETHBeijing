import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './index.module.css';
import "lib-flexible";
import { AlignmentPage, HomePage, RewardPage } from './pages/control';

ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/alignment" element={<AlignmentPage />}></Route>
            <Route path="/reward" element={<RewardPage />}></Route>
        </Routes>
    </HashRouter>,
    document.getElementById('root')
);
