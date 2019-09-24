//23.
//9.캠페인 후원하기
import PropTypes from 'prop-types'
import React, { Component } from 'react'


import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part = "coincharge" info={false}/>

      <div> 

      <div style= {{marginTop : "25px", display: 'flex'}}>
      <Header as='h2' style={{ fontSize: '3em',color:'#27AE60' }}>코인 충전</Header>      </div>
      <div style={{margin:"90px 0px 0px 20px"}}>
      <div><label style={{ fontSize: '1.3em'}}>충전 코인 입력</label> </div>
      
      <hr size="10" color="#27AE60"/>
 
      <div style={{dispaly:'flex'}}>
      <div style={{marginLeft:"200px"}}><input type="text"/>코인 <Icon name='arrow right'  style={{color:'#27AE60'}} /></div>
     <div style={{margin:"-20px 300px 0px 500px"}}>500원</div> </div>
      
     
      <hr size="1.5" color="#EAEAEA"/>
      <div style={{display:'flex',margin:"20px 0px 0px 400px"}}>
      <Link to="/coincharge2"><Button style={{color: '#FFFFFF', background:'#27AE60'}}>충전하기</Button></Link>
   </div>
   
      </div>
     </div>
    </Segment>


)
export default HomepageLayout
