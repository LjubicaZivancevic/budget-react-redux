import React from 'react'
import { Button} from 'semantic-ui-react'

function ButtonSaveOrCancel({addEntry, description, value, isExpense}){
    return (
        <Button.Group>
            <Button>Cancel</Button>
            <Button.Or></Button.Or>
            <Button primary onClick={() => addEntry(description,value, isExpense)}>OK</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel;