import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import cam from '../../image/cam.PNG';
const CardExampleCard = () => (
  
  <Card>
    
    <Image src={cam} wrapped ui={false} />
    <Card.Content>
      <Card.Header>기부 프로그램 제목</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
    
  </Card>
  
)

export default CardExampleCard