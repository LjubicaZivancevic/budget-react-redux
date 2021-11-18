import React from 'react'
import {Header, Segment, Statistic} from 'semantic-ui-react'



function MainHeader({total}){
    return (
        
        <Segment textAlign="center">
          
      <Statistic size="small">
        <Statistic.Label style={{textAlign:"center"}}>
          Your Balance:
        </Statistic.Label>
        <Statistic.Value style={{textAlign:"center"}}>{total}</Statistic.Value>
      </Statistic>

        </Segment>
    )
}

export default MainHeader;