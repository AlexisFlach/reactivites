import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../models/activity'

interface Props  {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

const ActivityForm = ({closeForm, activity: selectedActivity, createOrEdit}: Props) => {

    const initialState = selectedActivity ?? {
        id: '',
        description: '',
        title: '',
        category: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    const handleSubmit = () => {
        createOrEdit(activity)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setActivity({...activity, [name]: value})
    }

    
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input placeholder="Title" onChange={handleInputChange} value={activity.title} name="title" />
                <Form.TextArea placeholder="Description" onChange={handleInputChange} value={activity.description} name="description" />
                <Form.Input placeholder="Category" onChange={handleInputChange} value={activity.category} name="category" />
                <Form.Input placeholder="Date" onChange={handleInputChange} value={activity.date} name="date" />
                <Form.Input placeholder="City" onChange={handleInputChange} value={activity.city} name="city" />
                <Form.Input placeholder="Venue" onChange={handleInputChange} value={activity.venue} name="venue"/>
                <Button floated="right" positive type="submit" content="Submit" />
                <Button onClick={closeForm} floated="right" type="submit" content="Cancel" />
            </Form>
        </Segment>
    )
}

export default ActivityForm
