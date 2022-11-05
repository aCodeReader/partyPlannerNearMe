import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/blog" element={Blog} />
            <Route path="/contact" element={Contact} />
        </Routes>
    );
};

export default Router;