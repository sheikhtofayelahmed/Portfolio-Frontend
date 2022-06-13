import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useDetails = (id) => {
    console.log(id)
    const [details,setDetails]=useState({})
    useEffect(()=>{
        fetch(`https://nameless-bastion-97335.herokuapp.com/projects/${id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return [details]
};

export default useDetails;