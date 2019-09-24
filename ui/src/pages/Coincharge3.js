//23.
//9.캠페인 후원하기
import React, { Component } from 'react'

import {
 
  Header,

  Segment,
 
} from 'semantic-ui-react'
import SideContent from './SideContent';
const HomepageLayout = () => (
    <Segment style={{ padding: '0em 15.6em 50em', display: 'flex' }} vertical >
    <SideContent part="coincharge" info={false}/>

      <div> 

      <div style= {{marginTop : "25px", display: 'flex'}}>
      <Header as='h2' style={{ fontSize: '3em',color:'#27AE60' }}>코인 충전</Header>      </div>
      <div style={{margin:"50px 0px 2px 200px"}}>
      <p style={{fontSize:'2.3em',color:"27AE60",margin:"70px 0px 50px 100px"}}><strong>50코인 충전이 완료되었습니다!</strong></p>
      
              

<div style={{marginLeft:"250px"}}>
      <div class="ui medium image">
         <div style={{width:"168px",height:"168px",color: '#FFFFFF', background:'#219451'}} class="ui circular inverted segment">
          <div  sytle={{marginTop:'20px'}}>
           <h1 class="ui inverted header">
         100코인
          <div class="sub header">나의 코인</div>
          </h1>
         </div>
         </div>
     </div>
</div>

   </div>
     </div>
    </Segment>
)
export default HomepageLayout