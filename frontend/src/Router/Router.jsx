import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../Components/Home";
import Login from "../Components/Login";

import React from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;