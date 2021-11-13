import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

const App = () => {
  const [activitites, setActivities] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(res => {
      console.log(res);
      setActivities(res.data)
    } )
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='reactivities' />
      <List>
      {activitites.map((activity: any) => {
        return <List.Item key={activity.id}>{activity.title}</List.Item>
      })
      }  
      </List>

    </div>
  )
}

export default App
