import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../../models/activity';
import Navbar from './Navbar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid'

const App = () => {
  const [activitites, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    axios.get<Activity[]>('/api/activities')
      .then(res => {
        setActivities(res.data)
      })
  }, [])


  const handleSelect = (id: string ) => {
    setSelectedActivity(activitites.find(x => x.id === id))
  }

  const handleCancelSelect = () => {
    setSelectedActivity(undefined)
  }

  const handleFormOpen = (id?: string) => {
    id ? handleSelect(id) : handleCancelSelect();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false)
  }

  const handleCreateOrEditActivity = (activity: Activity) => {
      activity.id ? setActivities([...activitites.filter(x => x.id !== activity.id ), activity ])
      : setActivities([...activitites, {...activity, id: uuid()}])
      setEditMode(false);
      setSelectedActivity(activity);
  }

  const handleDelete = (id: string) => {
    setActivities([...activitites.filter(x => x.id !== id)])
  }
  return (
    <Fragment>
      <Navbar openForm={handleFormOpen}/>
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
         activities={activitites}
         selectedActivity={selectedActivity}
          selectActivity={handleSelect}
          cancelSelectActivity={handleCancelSelect}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDelete}
          />
      </Container>
    </Fragment>
  )
}

export default App
