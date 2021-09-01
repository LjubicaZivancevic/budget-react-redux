import React from 'react'
import { Segment, Grid} from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';


function DisplayBalances({inc, exp}){
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value={inc} color="green"></DisplayBalance>
            </Grid.Column>
            <Grid.Column>   
            <DisplayBalance title="Expenses" value={exp} color="red"></DisplayBalance>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances;