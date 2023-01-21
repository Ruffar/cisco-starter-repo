import './PublicAddress.css';
import React, {useState, useEffect} from 'react';


function PublicAddress(props)
{
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (props.useIpv6) {
            //Note: this always return ipv4 so far, but there is no API call guaranteed to return ipv6
            fetch('https://api64.ipify.org/?format=json').then((response) => response.json()).then((data)=>setAddress(data.ip)).catch(()=>setAddress("Error"));
        } else {
            fetch('https://api4.ipify.org/?format=json').then((response) => response.json()).then((data)=>setAddress(data.ip)).catch(()=>setAddress("Error"));
        }
    });
    

    return (
        <div>{props.useIpv6 ? "IPv6: " : "IPv4: "}<span className="AddressValue">{address}</span></div>
    );
}

export default PublicAddress;