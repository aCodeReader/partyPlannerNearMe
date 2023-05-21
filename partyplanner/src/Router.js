import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Corporate from './components/Corporate'
import Social from './components/Social'
import Weddings from './components/Weddings'
const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/social" element={<Social/>} />
            <Route path="/corporate" element={<Corporate/>} />
            <Route path="/weddings" element={<Weddings/>} />
        </Routes>
    );
};

export default Router;