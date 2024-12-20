import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [plants, setPlants] = useState([])
  const [myPlants, setMyPlants] = useState([])

  ///////// Handle plants from the plantcare api
  const getPlantsHandler = () => {
    axios.get('http://localhost:3000/plants')
    .then(response => {
      setPlants(response.data)
    }).catch(err => {
      console.log(err)
    })
  }
  
  const hidePlantsHandler = () => {
    setPlants([])
  }

  /////// add plants from plantcare to user
  const addPlantHandler = (plant) => {
    axios.post('http://localhost:3000/user_plants', 
      {
        name: plant,
      }
    )
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  const viewUserPlantsHandler = () => {
    axios.get('http://localhost:3000/user_plants')
    .then(res => {
      setMyPlants(res.data)
    }).catch(err => {
      console.log(err)
    })
  }





  return (
    <div>
      <button onClick={getPlantsHandler}>View list of plants</button>
      <button onClick={hidePlantsHandler}>Hide list of plants</button>
      <button onClick={viewUserPlantsHandler}>View my plants</button>
        {plants.map(plant => (
          <div key={plant.id}>
            <h1>{plant.name}</h1>
              <ul className='list'>
                <li>Light: {plant.light}</li>
                <li>Soil: {plant.soil}</li>
                <li>Water: {plant.water}</li>
                <li>Temperature: {plant.temperature}</li>
                <li>Humidity: {plant.humidity}%</li>
                <button onClick={() => addPlantHandler(plant.name)}>Add to your plants</button>
              </ul>
          </div>
        ))}
        <h3>/////////////////////////////////</h3>
        {myPlants.map(plant => (
          <div key={plant.id}>
            <h1>{plant.name}</h1>
          </div>
        ))}
    </div>

  )
}

export default App
