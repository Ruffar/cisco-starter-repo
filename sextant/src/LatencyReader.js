import './LatencyReader.css';
import React, {Component} from 'react';


class LatencyReader extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            latency: 0
        }

        this.socket = new WebSocket(this.props.socket);
        this.socket.addEventListener('message', (event) => {
            this.setState({latency: (new Date().getTime()-event.data)});
        });
    }


    render()
    {
        return (
            <div>
                Latency: <span className="LatencyValue">{this.state.latency} ms</span>
            </div>
        );
    }
}

export default LatencyReader;