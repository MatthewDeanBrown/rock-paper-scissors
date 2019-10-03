import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Landing from "./Landing";
import Game from "./Game";
import Help from "./Help";
import "../App.css"


class Navbar extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <nav>
                <ul>
                    <li><NavLink exact className='NavLink' to='/'>Home</NavLink></li>
                    <li><NavLink className='NavLink' to='/Game'>Game</NavLink></li>
                    <li><NavLink className='NavLink' to='/Help' >Help</NavLink></li>
                </ul>
            </nav>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path="/Game" component={Game} />
                    <Route path="/Help" component={Help} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Navbar