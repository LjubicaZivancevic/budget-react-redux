import React from 'react'
import {Header, Segment, Statistic} from 'semantic-ui-react'

function MainHeader(){
    return (
        
        <Segment textAlign="center">
              <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label style={{textAlign:"center"}}>
          Your Balance:
        </Statistic.Label>
        <Statistic.Value style={{textAlign:"center"}}>2,550.53</Statistic.Value>
      </Statistic>
        </Segment>
    )
}

export default MainHeader;