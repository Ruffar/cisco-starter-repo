import './PublicAddress.css';
import React, {Component} from 'react';

class PublicAddress extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            address: "Loading..."
        }

        if (props.useIpv6) {
            //Note: this always return ipv4 so far, but there is no API call guaranteed to return ipv6
            fetch('https://api64.ipify.org/?format=json').then((response) => response.json()).then((data)=>this.setState({address: data.ip})).catch(()=>this.setState({address: "Error"}));
        } else {
            fetch('https://api4.ipify.org/?format=json').then((response) => response.json()).then((data)=>this.setState({address: data.ip})).catch(()=>this.setState({address: "Error"}));
        }
    }


    render()
    {
        return (
            <div>
                <h2>{this.props.useIpv6 ? "IPv6" : "IPv4"}</h2>
                <div className="AddressValue">{this.state.address}</div>
            </div>
        );
    }
}

export default PublicAddress;