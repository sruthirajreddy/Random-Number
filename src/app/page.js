'use client'
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const[randomnumber,setRandomNumber] = useState()
  useEffect(()=> {
    const number = async() => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)
        setRandomNumber(response.data.body);
      }
      catch(error) {
        console.log(error)
      }
    }
    number();
  },[])
  return (
   <div>
      <h3>RANDOM NUMBER:{randomnumber}</h3>
   </div>
  );
}
