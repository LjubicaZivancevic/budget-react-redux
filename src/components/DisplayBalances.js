import React from 'react'
import { Segment, Grid} from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';


function DisplayBalances(){
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value="10000" color="green"></DisplayBalance>
            </Grid.Column>
            <Grid.Column>   
            <DisplayBalance title="Expenses" value="5000" color="red"></DisplayBalance>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances;