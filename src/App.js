import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div id="body">
                <Home/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
