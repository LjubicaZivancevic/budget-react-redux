import React from 'react'
import { Button, Statistic} from 'semantic-ui-react'

function DisplayBalance({title, value, color}){
    return (
        <Statistic size="tiny" color={color}>
        <Statistic.Label style={{textAlign:"center"}}>
            {title}
        </Statistic.Label>
        <Statistic.Value>
            {value}
        </Statistic.Value>
      </Statistic>
    )
}

export default DisplayBalance;