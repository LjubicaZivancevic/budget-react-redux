import React from 'react'
import { Button} from 'semantic-ui-react'

function ButtonSaveOrCancel(){
    return (
        <Button.Group>
            <Button>Cancel</Button>
            <Button.Or></Button.Or>
            <Button primary>OK</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel;