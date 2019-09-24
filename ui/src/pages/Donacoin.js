//10.캠페인 후원하기
import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Segment,
} from 'semantic-ui-react';
import SideContent from './SideContent';
//9.후원하기-후원안내 

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
      <SideContent part ="donation" info = {false}/>

      <div> 

      <div style= {{marginTop : "25px"}}>
      <Header as='h2' style={{ fontSize: '3em' }}>후원하기</Header>      </div>
      <div style={{margin:"90px 0px 0px 20px"}}>
      <div><label style={{ fontSize: '1.3em'}}>정보입력</label> </div>
      
      <hr size="10" color="#27AE60"/>
 
      <div style={{dispaly:'flex'}}>
      <div style={{marginLeft:"40px"}}>보유 코인</div>
     <div style={{margin:"-20px 400px 0px 400px"}}>500코인</div> </div>
      
     <hr size="1.5" color="#EAEAEA"/>
      <div style={{dispaly:'flex'}}>
      <div style={{marginLeft:"40px"}}>기부 코인</div>
     <div style={{display:'flex'}}>
  <div style={{margin:"-20px 0px 0px 300px"}}> <input type="text"/></div>
       <div style={{margin:"-18px 0px 0px 10px"}}>코인</div>
  </div>
      </div>
      <hr size="1.5" color="#EAEAEA"/>
      <div style={{display:'flex',margin:"50px 0px 0px 250px"}}>
      <Button style={{color: '#FFFFFF', background:'#27AE60',marginLeft:"40px"}}>뒤로가기</Button> 
      <Link to="/donadone"><Button style={{color: '#FFFFFF', background:'#27AE60'}}>후원하기</Button></Link>
   </div>
   
      </div>
     </div>
    </Segment>
)
export default HomepageLayout
