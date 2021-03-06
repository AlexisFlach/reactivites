import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Activity } from '../../../models/activity'


interface Props {
    activity: Activity | undefined,
    cancelSelectActivity: () => void;
    openForm: (id:string) => void;

}
const ActivityDetails = ({ activity, cancelSelectActivity, openForm }: Props) => {

  
        if(activity) {
            return (
                <Card fluid>
                <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{activity.title}</Card.Header>
                    <Card.Meta>
                        <span>{activity.date}</span>
                    </Card.Meta>
                    <Card.Description>
                        {activity.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group widths="2">
                        <Button onClick={() => openForm(activity.id)} color="blue" content="Edit"></Button>
                        <Button onClick={() => cancelSelectActivity()} color="red" content="Delete"></Button>
                    </Button.Group>
                </Card.Content>
            </Card>
            )
        } else {
            return null
        }
    


}

export default ActivityDetails
