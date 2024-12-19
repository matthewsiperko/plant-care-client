import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [plants, setPlants] = useState([])

  const getPlants = () => {
    axios.get('http://localhost:3000/plants')
    .then(response => {
      setPlants(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <button onClick={getPlants}>Click Here</button>
        {plants.map(plant => (
          <div key={plant.id}>
            <h1>{plant.name}</h1>
            <br/>
              <ul>
                <li>{plant.light}</li>
                <li>{plant.soil}</li>
                <li>{plant.water}</li>
              </ul>
          </div>
        ))}
    </div>

  )
}

export default App
