import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './Components/ImageSlider/ImageSlider'

function App() {
  const [count, setCount] = useState(0)


    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      // Add more image URLs here
    ];


  return (
    <>
      <div className="App bg-violet-700 rounded-lg p-5">
        <h1>React Vite Tailwind</h1>
        <p>Created with chatGPT</p>
        <div className="box text-red-600">BOX</div>
        <ImageSlider images={images}/>
      </div>
    </>  
  )
}

export default App;
