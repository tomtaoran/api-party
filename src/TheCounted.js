import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import defaultTheCounted from './defaultTheCounted'
import TheCountedState from './TheCountedState'
//import './TheCounted.css'

class TheCounted extends Component {
  state = {
    inputState: ''
  }
  handleClick = (ev) =>{
      //console.log(ev.currentTarget.value)
    const inputState = ev.currentTarget.value
    this.state.inputState=inputState; // This is intended to act this way, no setState for now
  }
  handleSubmit = (ev) => {
    this.setState({inputState:this.state.inputState}) // Well... Probably there is a better way? 
    //Seth or Dave, tell me please?
    ev.preventDefault()
    this.props.history.push(`/thecounted/${this.state.inputState}`)
  }

  render() {
    return (
      <div className="thecounted">
        <img className="thecounted-logo" src="http://media.graytvinc.com/images/POLICE+SHOOTING+MGN.jpg" alt="police shooting logo"/>
        <form onSubmit={this.handleSubmit}>
            <select className="userState" defaultValue="" onClick={this.handleClick}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            <button type="submit">See <i><strong>The Count</strong></i> </button>
        </form>

        <Route exact path='/thecounted' component={defaultTheCounted} />
        <Route path='/thecounted/:inputState' component={TheCountedState} />
      </div>
    )
  }
}

export default TheCounted