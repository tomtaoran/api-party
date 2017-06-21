import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import defaultGeoip from './defaultGeoip'
//import './Geoip.css'
import GeoipDefined from './GeoipDefined'

class Geoip extends Component {
  constructor(props) {
    super(props)
    this.state= {
        userinput:''
    }
  }

  handleChange = (ev) => {
    const userinput = ev.currentTarget.value
    this.setState({ userinput })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({userinput:''})
    this.props.history.push(`/geoip/${this.state.userinput}`)

  }

  render() {
    return (
      <div className="geoip">
        <img className="geoip-logo" src="http://blogs-images.forbes.com/jacobmorgan/files/2014/05/internet-of-things-2.jpg" alt="The Internet Snapshot "/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              id="user_input"
              type="text"
              placeholder="Input IP address or domain name, like 8.8.8.8 or google.com"
              value={this.state.userinput}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div>
            <button type="submit">Where is this address?</button>
          </div>
        </form>

        <Route exact path='/geoip' component={defaultGeoip} />
        <Route path='/geoip/:userinput' component={GeoipDefined} />
      </div>
    )
  }
}
//
export default Geoip