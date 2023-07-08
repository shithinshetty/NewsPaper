import React, { Component } from 'react'
import loading from './spinner.gif'
export default class Spinnder extends Component {
  render() {
    return (
      <div className='text-end'>
        <img src={loading} alt='loading' />
      </div>
    )
  }
}
