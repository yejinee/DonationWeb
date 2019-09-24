//9.캠페인 후원하기
import React from 'react'
import cam from '../image/cam.PNG';
import Cardtab from '../components/Cardtab';
import { Link } from 'react-router-dom';
import {
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';
import SideContent from './SideContent';
//9.후원하기-후원안내 
const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
      <SideContent part ="donation" info = {false}/>
      <div> 

      <div style= {{marginTop : "25px", display: 'flex'}}>
      <Header as='h2' style={{ fontSize: '3em' }}>기부 프로그램 제목</Header>      </div>
      <div style= {{marginTop : "20px", display: 'flex'}}>
       <div style= {{margin : "40px"}}><Image size='massive' src={cam}/> </div> 
        <div style= {{marginLeft : "50px"}}>  
         <label style={{ fontSize: '1.3em' }}>모인금액</label>
          <div style={{display:'flex', marginBottom:'-55px' }}>
           <p style={{ fontSize: '4em'}}>141,441,000</p>  
           <p style={{ fontSize: '1.3em',marginTop:'27px'}}>원</p>
          </div>
          <label style={{ fontSize: '1.3em'}}>남은 시간</label>
          <div style={{display:'flex', marginBottom:'-55px' }}>
           <p style={{ fontSize: '4em'}}>5</p>  
           <p style={{ fontSize: '1.3em',marginTop:'27px'}}>일</p>
          </div>
          <label
           style={{ fontSize: '1.3em' }}>후원자</label>
          <div style={{display:'flex', marginBottom:'-55px' }}>
           <p style={{ fontSize: '4em'}}>500</p>  
           <p style={{ fontSize: '1.3em',marginTop:'27px'}}>명</p>
           
          </div>
          
          <Link to="/donacoin"><button class="ui fluid button">후원신청 하기</button></Link>
        </div>
       </div>
       <Cardtab/>
     </div>
    </Segment>
)
export default HomepageLayout
