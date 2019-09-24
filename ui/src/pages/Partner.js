//12.파트너 기업
import React, { Component } from 'react'
import Partnerpic from '../components/Partnerpic';
import {
  Header,
  Segment
} from 'semantic-ui-react';
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
      <SideContent part ="partner" info ={true}/>
      <div> 

      <div style= {{marginTop : "25px", display: 'flex'}}>
      <Header as='h2' style={{ fontSize: '3em' }}>단체소개</Header></div>
      <div style= {{marginTop : "20px", display: 'flex'}}>
      <div style= {{margin : "50px"}}> <Partnerpic/> </div>
      <div style= {{margin : "50px"}}> <Partnerpic/> </div>
      <div style= {{margin : "50px"}}> <Partnerpic/> </div>

   
   </div>
      </div>
    </Segment>
)
export default HomepageLayout
