import React, { useEffect, useState } from 'react'
import Menu from '../components/HomeComponents/menu'
import FaqBody from '../components/FaqComponents/FaqBody'
import axios from 'axios';
const faq = () => {
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
    <div className='flex w-full'>
        <Menu Side={true} username={username}/>
        <FaqBody />
    </div>
  )
}

export default faq
