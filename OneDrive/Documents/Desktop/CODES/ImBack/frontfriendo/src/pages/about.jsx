import React, { useEffect, useState } from 'react'
import AboutBody from '../components/AboutComponents/AboutBody'
import Menu from '../components/HomeComponents/menu'
import axios from 'axios';
const about = () => {
  const[username,setUsername] = useState('');
  const getUsername = () => {
    const url = "http://localhost:8080/api/v1/extra/getUsername";
    axios({
      method:'get',
      url:url,
      withCredentials:true
    }).then(res => setUsername(res.data))
    .catch(err => console.log(err))
  }
  useEffect(getUsername,[]);
  return (
    <div className='flex' username={username}>
      <Menu Side={true}/>
      <AboutBody />
    </div>
  )
}

export default about
