import React from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../../Hooks/useDetails';
import './Details.css'
const Details = () => {
    const {id}=useParams()
    console.log(id)
    const [details]=useDetails(id)
    console.log(details)
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Details;