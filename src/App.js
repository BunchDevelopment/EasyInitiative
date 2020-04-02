import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import BattleScreen from './BattleScreen/BattleScreen'
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div id="body">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/CreateBattle" component={BattleScreen}/>
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
