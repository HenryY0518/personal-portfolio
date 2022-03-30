import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 2400) {
        if (this.state.status !== "third") {
          this.setState({ status: "third" });
        }
      } else {
        if (scrolled >= 1600) {
          if (this.state.status !== "second") {
            this.setState({ status: "second" });
          }
        } else {
          if (scrolled >= 800) {
            if (this.state.status !== "first") {
              this.setState({ status: "first" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    if (this.state.status === "top") {
      return (
        <div className='header'>
          <span className='headerText'>What does it mean to be a designer?</span>
        </div>
      );
    } else {
      if (this.state.status === "first") {
        return (
          <div className='header'>
            <span className='headerText'>It means being a life-long learner who tries to understand others,</span>
          </div>
        );
      } else {
        if (this.state.status === "second") {
          return (
            <div className='header'>
              <span className='headerText'>People from all walks of life and cultural backgrounds,</span>
            </div>
          );
        } else {
          return (
            <div className='header'>
              <span className='headerText'>To solve problems that are unique to human beings together.</span>
            </div>
          );
        }
      }
    }
  }
}
