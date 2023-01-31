import './LatencyReader.css';
import React, {Component} from 'react';


class LatencyReader extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            meanLatency: 0,
            presentLatency: 0,
            highestLatency: 0, //Arbitrary low initial number
            lowestLatency: 0 //Arbitrary high initial number
        }

        this.recentLatencies = [] //Acts like a queue

        this.socket = new WebSocket(this.props.socket);
        this.socket.addEventListener('message', (event) => {
            let latency = new Date().getTime()-event.data

            //Add latency to recent ones
            this.recentLatencies.push(latency)
            if (this.recentLatencies.length > 30) { //Max 30 recent latencies
                this.recentLatencies.shift(); //remove oldest latency value
            }

            this.setState({
                //Reduce for quick summation of array and divide by length to get mean
                meanLatency: Math.round(this.recentLatencies.reduce((sum, currentLatency)=>sum+currentLatency,0)/this.recentLatencies.length),
                //Current, immediate latency
                presentLatency: Math.round(latency),
                //Get highest latency out of recent
                highestLatency: Math.round(this.recentLatencies.reduce((highest, currentLatency)=>currentLatency>highest?currentLatency:highest, -1)),
                //Get lowest latency out of recent
                lowestLatency: Math.round(this.recentLatencies.reduce((lowest, currentLatency)=>currentLatency<lowest?currentLatency:lowest, 10000))
            });
        });
        //this.socket.addEventListener('error', (event) => {

        //});
    }


    render()
    {
        return (
            <div>
                <h2>Latency</h2>
                <div className="LatencyInfo">
                    <div>
                        <h3>Mean</h3>
                        <div className="LatencyValue">{this.state.meanLatency} <span className="MsUnit">ms</span></div>
                    </div>
                    <div className="LowPriorityLatency">
                        <h3>Present</h3>
                        <div className="LatencyValue">{this.state.presentLatency} <span className="MsUnit">ms</span></div>
                    </div>
                    <div className="SmallLatency">
                        <div className="LowPriorityLatency">
                            <h3>Highest</h3>
                            <span className="LatencyValue">{this.state.highestLatency} <span className="MsUnit">ms</span></span>
                        </div>
                        <div className="LowPriorityLatency">
                            <h3>Lowest</h3>
                            <span className="LatencyValue">{this.state.lowestLatency} <span className="MsUnit">ms</span></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LatencyReader;