import React, { Component } from 'react'

export class FeedbackMessage extends Component {
  render() {
    return (
      <p>Bienvenido/a {this.props.nombre} al curso {this.props.app} </p>
    )
  }
}

export default FeedbackMessage