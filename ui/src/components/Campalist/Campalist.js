import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import cam from '../../image/cam.PNG';
const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src={cam} />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>2018.12.11</span>
        </Item.Meta>
        <Item.Description><p>단체명</p>
        
        <p><br/>기부하세요요오오오ㅗㅇ오오오오</p>
        <p>모인금액 124,457,869원</p>
  
        
       </Item.Description>
        <Item.Extra>
        <Button style={{color: '#FFFFFF', background:'#27AE60'}} primary floated='right'>
            기부하기
            <Icon name='right chevron' />
          </Button>
          <Label>진행중</Label>
          
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src={cam} />

      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>2018.12.11</span>
        </Item.Meta>
        <Item.Description><p>단체명</p>
        
        <p><br/>기부하세요요오오오ㅗㅇ오오오오</p>
        <p>모인금액 124,457,869원</p>
  
        
       </Item.Description>
        <Item.Extra>
        <Button style={{color: '#FFFFFF', background:'#27AE60'}} primary floated='right'>
            기부하기  
            <Icon name='right chevron' />
          </Button>
          <Label>진행중</Label>
          
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
    <Item.Image src={cam} />

      <Item.Content>
        <Item.Header as='a'>Watchmen</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            기부하기
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default ItemExampleDivided
