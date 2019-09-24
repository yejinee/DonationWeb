//19.캠페인등록 
import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
  Segment,
} from 'semantic-ui-react';
import SideContent from './SideContent';

const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part ="groupmypage2"/>
   
     <div style= {{marginTop : "50px"}}>
       <Header as='h2' style={{ fontSize: '3em' }}>단체 소개</Header>
       <div style={{margin:"90px 0px 0px 20px"}}>
      <div><label style={{ fontSize: '1.3em'}}>프로젝트 개요</label> </div>
      
      <hr size="10" color="#27AE60"/>
 
      <div style={{dispaly:'flex'}}>
      <div style={{marginLeft:"40px"}}>프로젝트 제목</div>
     <div style={{margin:"-20px 500px 0px 300px"}}><input type="text"/></div> </div>
     <hr size="1.5" color="#EAEAEA"/>
     <div style={{dispaly:'flex'}}>
      <div style={{marginLeft:"40px"}}>프로젝트 요약</div>
     <div style={{margin:"-20px 500px 0px 300px"}}><input type="text"/></div> </div>
     <hr size="1.5" color="#EAEAEA"/>
     <div style={{dispaly:'flex'}}>
      <div style={{margin:"12px 0px 0px 40px"}}>대표 이미지 업로드</div>
     <div style={{margin:"-22px 500px 0px 300px"}}><button class="ui mini button">파일 업로드</button></div> </div>


     
     <hr size="1.5" color="#EAEAEA"/>
      <div style={{dispaly:'flex'}}>
      <div style={{marginLeft:"40px"}}>목표액</div>
     <div style={{display:'flex'}}>
  <div style={{margin:"-20px 0px 0px 300px"}}> <input type="text"/></div>
       <div style={{margin:"-18px 0px 0px 10px"}}>원</div>
  </div>
      </div>
      <hr size="1.5" color="#EAEAEA"/>

      <div style={{dispaly:'flex'}}>
      <div style={{marginLeft:"40px"}}>마감일</div>
     <div style={{display:'flex'}}>
  <div style={{margin:"-20px 0px 0px 300px"}}> <input type="text"/></div>
       <div style={{margin:"-18px 0px 0px 10px"}}>일</div></div></div>

      <hr size="1.5" color="#EAEAEA"/>
      <div style={{display:'flex',margin:"50px 0px 0px 250px"}}>
      
      <Link to="/donadone"><Button style={{color: '#FFFFFF', background:'#27AE60'}}>다음 단계</Button></Link>
   </div>
   </div>
      </div>
    </Segment>
)
export default HomepageLayout
