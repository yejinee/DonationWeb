//16.기업마이페이지 단체소개
import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Segment
} from 'semantic-ui-react';
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
         <SideContent part ="groupmypage1"/>

   
     <div style= {{marginTop : "50px"}}>
       <Header as='h2' style={{ fontSize: '3em' }}>단체 소개</Header>
        <span> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        
        </span>


        <Link to="/groupintroedit"><Button style={{color: '#FFFFFF', background:'#27AE60'}}>수정</Button></Link>

      </div>
    </Segment>
)
export default HomepageLayout
