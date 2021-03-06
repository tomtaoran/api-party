import React, { Component } from 'react'
import './defaultGeoip.css'

class defaultGeoip extends Component {
  state = {
    result: {
      ip: "Unknown",
      country_name: "Unknown",
      region_name: "Unknown",
      city: "Unknown",
      zip_code: "Unknown",
      time_zone:"Unknown",
      latitude:"Unknown",
      longitude:"Unknown",
    },
    error:{

    }
  }
  constructor(props) {
    super(props)
    this.fetchUserData(this.props)
  }

  processData(data) {
      let result= {
      ip: "Unknown",
      country_name: "Unknown",
      region_name: "Unknown",
      city: "Unknown",
      zip_code: "Unknown",
      time_zone:"Unknown",
      latitude:"Unknown",
      longitude:"Unknown",
    }
        for(let key in data){
            let attrName= key
            let attrValue= data[key]
            result[attrName]=attrValue
            if((attrName==="country_name"|| attrName==="region_name" 
            || attrName==="city" || attrName==="city" 
            || attrName==="zip_code" || attrName==="time_zone") && attrValue===""){
                 result[attrName]="Unknown"
            }
            if((attrName==="latitude"|| attrName==="longitude")&& attrValue===0){
                 result[attrName]="Unknown"
            }
        }
    this.setState({result})
  }

  fetchUserData = (props) => {
    fetch(`http://freegeoip.net/json/`)
      .then(response => response.json())
      .then(data => this.processData(data))
      .catch(error => this.setState({error}))
  }

  render() {
    const { result } = this.state
    if(!this.state.error){
        return <h2><strong>Looks like something goes wrong: </strong>{this.state.error}</h2>
    }else{
    return (
        <div className="geoip-result">
        <h3>IP: {result.ip}</h3>
        <h3>Country: {result.country_name}</h3>
        <h3>Region/State: {result.region_name}</h3>
        <h3>City: {result.city}</h3>
        <h3>Zip Code: {result.zip_code}</h3>
        <h3>Local Time Zone: {result.time_zone}</h3>
        <h3>Latitude: {result.latitude}</h3>
        <h3>Longitude: {result.longitude}</h3>
        <h2><strong><i>To Our Valued Users:</i></strong> If you see some <i>unreadable/wired</i> IP feedbacks,
        please <i>refresh</i> your page. This API still need funding: </h2>
        <a href="http://freegeoip.net"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" alt="Donate on Paypal" width="15%" height="42" border="0" /></a>
      </div>
    )
    }
  }
}

export default defaultGeoip