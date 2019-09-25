import {
    Responsive,
  } from 'semantic-ui-react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

// 페이지에 관련된 모든 함수들을 만들어 놓는 곳

export const login = async (info) => { // 로그인
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

export const emailCheck = async (email) => { // 이메일 체크, 중복확인.
  return await axios
  .post('/api/user/emailCheck', {email : email})
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
  })
}

export const signUp = async (info) => { // 회원 가입
  return await axios
  .post('/api/user/signup',info)
  .then(res=>{
    return res.data;
  })
  .catch(err => 
    console.log(err));
}

export const getEmail = () => { // 이메일 가져오기
  let token = '';
  sessionStorage.usertoken ? token=sessionStorage.usertoken : token = null;
  if(token === null){
    return null;
  }
  const decode = jwt_decode(token);
  const email = decode.email;
  return email;
}

export const chargeCoin = async (email, chargeCoin) => { // 코인 충전.
  return await axios
  .post('/api/coin/chargeCoins',{
    email,
    chargeCoin
  })
}

export const getCoin = async (email) => {
  return await axios
  .get(`/api/coin/getAllCoins/${email}`)
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.error(err);
  })
}