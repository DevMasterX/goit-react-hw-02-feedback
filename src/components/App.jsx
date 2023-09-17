import { Component } from "react";

export class App extends Component {
  state = { 
    good: 0,
    neutral: 0,
    bad: 0 } 

    // handleClickFeedbackBtn =({target}) =>{
    //   console.log(target)
    //   const feedback = target.textContent.toLowerCase();
    //   this.setState((prevState) => {
    //     return{
    //       [feedback]: prevState[feedback] +1
    //     }
    //   })
    // }

    handleClickFeedbackBtn = (feedback) => {
      this.setState((prevState) => ({
        [feedback]: prevState[feedback] + 1,
      }));
    };

    
    
    
    
    
    


    countTotalFeedback=()=>{
      return this.state.good + this.state.neutral+this.state.bad
    }; 

    countPositiveFeedbackPercentage=()=> {
      return Math.round((this.state.good / this.countTotalFeedback())*100);
    }

  render() { 
    const{good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>

 <h2>Please leave feedback</h2>

<ul>
  <li><button onClick={() => this.handleClickFeedbackBtn('good')}>Good</button></li>
   <li><button onClick={() => this.handleClickFeedbackBtn('neutral')}>Neutral</button></li>
  <li><button onClick={() => this.handleClickFeedbackBtn('bad')}>Bad</button></li>
 </ul>
 <h2>Statistics</h2>
 <ul>
 <li>Good: {good}</li>
   <li>Neutral: {neutral}</li>
  <li>Bad: {bad}</li>
  <li>Total: {total}</li>
  <li>Positive feedback: {positivePercentage}%</li>
 </ul>

      </div>
    );
  }
}
 





// <h2>Please leave feedback</h2>

// <ul>
//   <li><button>Good</button></li>
//   <li><button>Neutral</button></li>
//   <li><button>Bad</button></li>
// </ul>
// <h2>Statistics</h2>
// <ul>
//   <li>Good: 0</li>
//   <li>Neutral: 0</li>
//   <li>Bad: 0</li>
//   <li>Total: 0</li>
//   <li>Positive feedback: 0%</li>
// </ul>