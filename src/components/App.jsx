import { Component } from "react";

export class App extends Component {
  state = { 
    good: 10,
    neutral: 10,
    bad: 0 } 

    countTotalFeedback=()=>{
      return this.state.good + this.state.neutral+this.state.bad
    }; 

    countPositiveFeedbackPercentage=()=> {
      return Math.round((this.state.good / this.countTotalFeedback())*100);
    }

  render() { 
    const{good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>

 <h2>Please leave feedback</h2>

<ul>
  <li><button>Good</button></li>
   <li><button>Neutral</button></li>
  <li><button>Bad</button></li>
 </ul>
 <h2>Statistics</h2>
 <ul>
 <li>Good: {good}</li>
   <li>Neutral: {neutral}</li>
  <li>Bad: {bad}</li>
  <li>Total: {total}</li>
  <li>Positive feedback: {percentage}%</li>
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