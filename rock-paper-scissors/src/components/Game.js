import React from "react";
import '../App.css';
import Paper from '../images/paper.png'
import Scissors from "../images/scissors.png";
import Rock from "../images/rock.png";

export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {hand:'', hand2:'', tryAgain: true, winner:'',
        chosenHand: false}
    }
    ai = () =>{
        // sets state to 'not selected(therefore opponent's hand will continue randomising)'
        this.setState({
            chosenHand:false})
        let hands = [Paper,Rock,Scissors];
        // this continually randomises the opponents hand 
        var myInterval = setInterval(() => {
            this.setState({
            // takes random value from array
            hand2: hands[Math.floor(Math.random()*3)],
            tryAgain: false
            })
            // checks if user has chosen an option and then sets the state depending if the user won or lost
            if (this.state.chosenHand === true){
                this.setState({
                    winner: this.decider()
                })
                clearInterval(myInterval)
            }
        },100);
    }

    // sets user's option to 'Rock'
    rock = () => {
        this.setState({
            hand:Rock,
            chosenHand:true
        });
    }
    
    // sets user's option to 'Paper'
    paper = () => {
        this.setState({
            hand:Paper,
            chosenHand:true
        });
    }

    // sets user's option to 'Scissors'
    scissors = () => {
        this.setState({
            hand:Scissors,
            chosenHand:true
        });
    }

    // this deciders who wins or loses
    decider = () =>{
        if (this.state.hand === this.state.hand2){
            return "It's a Draw"
        }
        if ((this.state.hand === Rock && this.state.hand2 === Scissors) ||
            (this.state.hand === Paper && this.state.hand2 === Rock)||
            (this.state.hand === Scissors && this.state.hand2 === Paper)){
                return "You Win!"
        }else{
            return "You Lose!"
        }
        
    }
    render(){
        return(
            <React.Fragment>
            <div className='button'>
            <h3>First Hit the Run Game/Try Again button before choosing your option
                <br/>
                {/* this displays if the user has wons or lost */}
                <h1>{this.state.winner}</h1>
            </h3>
                {/* the state od the button will change when the user runs the game */}
                {this.state.tryAgain?(<button onClick={this.ai} className='RunGame' >Run Game</button>) : (<button onClick={this.ai} className='RunGame' >Try Again</button>)}<br/>
                <button onClick={this.rock}>Rock</button>
                <button onClick={this.paper} >Paper</button>
                <button onClick={this.scissors} >Scissors</button>
            </div>
            <div className='game'>
            <div className="player" style={{marginRight: "20%"}}>
                <img src={this.state.hand} alt=""/>
            </div>
            <div className="player" style={{marginLeft: "20%"}}>
                <img src={this.state.hand2} alt=""/>
            </div>
            </div>
            </React.Fragment>
        )
    }
}