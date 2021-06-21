import React, { Component } from "react";

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phrase: "Lord, please answer my question.",
      question: "",
      prankAnswer: "",
      realAnswer: "",
    };
  }

  handleQuestionChange = (event) => {
    this.setState({ question: event.target.value });
    this.setState({ prankAnswer: "" });
    this.setState({ realAnswer: "" });
  };

  handleResponse = (event) => {
    if (this.state.realAnswer.length > 0)
      alert(this.state.realAnswer.substring(1));
    else {
      let randomPhrases = [
        "How do you expect me to know that?!",
        "Do not insult me with such questions",
        "That is not how you ask for my help",
        "You are not worthy, let someone else ask",
        "Hmmm, even I must ponder on this question",
      ];
      var num = Math.floor(Math.random() * 5);
      alert(randomPhrases[num]);
    }
  };

  handleAnswerChange = (event) => {
    var element = document.getElementById("answer");
    var str = event.target.value;
    var prankAns;
    if (this.state.realAnswer.length === 0) {
      if (str === "/") {
        prankAns = "L";

        element.value = prankAns;
        this.setState({ prankAnswer: prankAns });
        this.setState({ realAnswer: str });
      }
    } else {
      if (event.target.value.length >= this.state.phrase.length) {
        str = str.substring(str.length - 1);
        prankAns = this.state.phrase;
      } else {
        str = str.substring(this.state.realAnswer.length);
        prankAns = this.state.phrase.substring(0, event.target.value.length);
      }
      this.setState({ realAnswer: this.state.realAnswer + str });
      element.value = prankAns;
      this.setState({ prankAnswer: prankAns });
    }
  };

  render() {
    return (
      <div>
        <input
          id="question"
          value={this.question}
          onChange={this.handleQuestionChange}
          placeholder={"Your question"}
        ></input>
        <br />
        <input
          id="answer"
          value={this.prankAnswer}
          onChange={this.handleAnswerChange}
          placeholder={"Request for my help"}
        ></input>
        <br />
        <button onClick={this.handleResponse}>Submit</button>
      </div>
    );
  }
}
export default Page;
