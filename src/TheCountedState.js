import React, { Component } from 'react'
import PieChart from 'react-simple-pie-chart';
import './defaultTheCounted.css'

class TheCountedState extends Component {
 state = {
    causeOfDeath: {
      gunshot: 0,
      other: 0,
      struckbyvehicle: 0,
      deathincustody: 0,
      taser: 0,
    }
  }
  constructor(props) {
    super(props)
    this.fetchUserData(this.props)
    if(!document.querySelector("script")){
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    document.body.appendChild(script);
    }
  }

  processData(data) {
      let causeOfDeath={gunshot: 0,
      other: 0,
      struckbyvehicle: 0,
      deathincustody: 0,
      taser: 0,}
    for(let i=0; i < data.length; i++){
        let element=data[i];
        for(let key in element){
            let attrName= key
            let attrValue= element[key]
            if(attrName==="cause"){
                if(attrValue==="Gunshot"){
                    causeOfDeath.gunshot++;
                }
                if(attrValue==="Other"){
                    causeOfDeath.other++;
                }
                if(attrValue==="Struck by vehicle"){
                    causeOfDeath.struckbyvehicle++;
                }
                if(attrValue==="Death in custody"){
                    causeOfDeath.deathincustody++;
                }
                if(attrValue==="Taser"){
                    causeOfDeath.taser++;
                }
            }
        }
    }
    this.setState({causeOfDeath})
  }

  fetchUserData = (props) => {
    fetch(`https://thecountedapi.com/api/counted/?state=${props.match.params.inputState}`)
      .then(response => response.json())
      .then(data => this.processData(data))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { causeOfDeath } = this.state
    return (
        <div className="chart">
            <div className="graph">
                <PieChart
            slices={[
            {
            color: 'rgba(151,187,205,1)',
            value: causeOfDeath.gunshot,
            },
            {
            color: 'rgba(220,220,220,1)',
            value:  causeOfDeath.other,
            },
            {
            color: 'rgba(247,70,74,1)',
            value: causeOfDeath.struckbyvehicle,
            },
            {
            color: 'rgba(70,191,189,1)',
            value: causeOfDeath.deathincustody,
            },
            {
            color: 'rgba(253,180,92,1)',
            value: causeOfDeath.taser,
            },
            ]}
        />
            </div>
            
        <svg width="10" height="10"><rect id="label-gunshot"  width="10" height="10"/></svg>
        <li><span ></span>Gunshot</li>
        <svg width="10" height="10"><rect id="label-other"  width="10" height="10"/></svg>
        <li><span ></span>Other</li>
        <svg width="10" height="10"><rect id="label-structbyvehicle"  width="10" height="10"/></svg>
        <li><span ></span>Struct by Vehicle</li>
        <svg width="10" height="10"><rect id="label-deathincustody"  width="10" height="10"/></svg>
        <li><span ></span>Death in Custody</li>
        <svg width="10" height="10"><rect id="label-taser"  width="10" height="10"/></svg>
        <li><span ></span>Taser</li>
          
        </div>
    )
  }
}

export default TheCountedState