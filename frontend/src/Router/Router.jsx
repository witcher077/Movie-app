import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from "../Components/Home";
import Login from "../Components/Login";

import React from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='*' element={<Navigate to="/" />}/>
                <Route path='/login' exact element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;