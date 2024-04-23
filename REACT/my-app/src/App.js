import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./profile/Profile";
import AvatarandCard from "./AvatarandCard/AvatarandCard";
import BestPractices from "./button/button";
class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>欢迎来到菜鸟教程</h2>
                <div className="profiles-row">
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>
            </div>
            <section>
                <h1>Amazing scientists</h1>
                <AvatarandCard/>
                <BestPractices/>
            </section>
            <p className="App-intro">
            你可以在 <code>src/App.js</code> 文件中修改。
            </p>
        </div>


    );
  }
}

export default App;