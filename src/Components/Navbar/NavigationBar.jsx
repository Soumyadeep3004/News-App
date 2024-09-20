import React, { useState } from 'react'
import logo from "./logo.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function NavigationBar() {
    const [query,setQuery] = useState('');
    const [searchParams,setSearchParams] = useState('');
    // console.log('search> ', searchParams);
    
    return (
        <div>
            <nav style={{ marginBottom: '20px' }} className="navbar">

                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                {/* <div className='category-list'>
                    <ul>
                        <li>Science</li>
                        <li>Business</li>
                        <li>Health</li>
                        <li>Sports</li>
                        <li>Technology</li>
                    </ul>
                </div> */}
                <div className='search-bar-container'>
                    <input value={searchParams} type="text" className='search-input' placeholder='Search here...' 
                    onChange={(e)=>{
                        setSearchParams(e.currentTarget.value)
                    }}
                    />
                    <button className='search-button'><Link to={`/category/${searchParams}`}>🔍</Link></button>
                </div>
            </nav>

            {/* <div className='category-items'>
                <a href="">Science</a>/
                <a href="">Business</a>/
                <a href="">Health</a>/
                <a href="">Technology</a>
            </div> */}
        </div>
    )
}
