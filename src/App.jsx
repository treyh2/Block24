import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
console.log("puppyList: ", puppyList);
function handleClick(clickedPupId){
  const clickedPuppy = puppies.find(puppy => puppy.id === clickedPupId);
  if (clickedPuppy)
  setFeatPupId(clickedPupId)

  console.log(clickedPuppy)
  const tricksString = clickedPuppy.tricks.map(trick => ` ${trick.title}`).join(', ');
  alert(`
      Puppy ID: ${clickedPuppy.id} \n
      Name: ${clickedPuppy.name} \n
      Age: ${clickedPuppy.age} \n
      Email: ${clickedPuppy.email} \n
      Tricks: ${tricksString}`);
} return (
  <div className='App'>
    <div className='header'>
      <h1>List of Puppies</h1>
      </div>
      <div className='puppyApp'>
      {puppies.map((puppy) => {
        return (<p className= "dog-name" onClick={() => handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>); 
      })}
      </div>
    </div>
  )
}

export default App
