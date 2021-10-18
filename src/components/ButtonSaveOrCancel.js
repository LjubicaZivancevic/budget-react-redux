import React from 'react'
import { Button} from 'semantic-ui-react'

function ButtonSaveOrCancel({addEntry}){
    
 
    return (
        <Button.Group>
            <Button>Cancel</Button>
            <Button.Or></Button.Or>
            <Button primary onClick={() => addEntry()}>OK</Button>
          
            
        </Button.Group>
    )
}

export default ButtonSaveOrCancel;