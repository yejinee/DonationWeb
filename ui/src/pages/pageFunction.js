import {
    Responsive,
  } from 'semantic-ui-react'
import axios from 'axios';

export const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


export const login = async (info) => {
  return await axios
  .post('/api/user/login',info)
  .then(res => {
    sessionStorage.setItem('usertoken', res.data.token);
    return res.data;
  })
  .catch(err => {
    console.log(err);
  })
}

export const emailCheck = async (email) => {
  return await axios
  .post('/api/user/emailCheck', {email : email})
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  })
}

export const signUp = async (info) => {
  return await axios
  .post('/api/user/signup',info)
  .then(res=>{
    console.log('signup');
    return res.data;
  })
  .catch(err => 
    console.log(err));
}