//import { useState } from 'react'
import Navbar from './components/Navbar';
//import Logo from './components/Logo';
import Hero from './components/Hero';
import List from './components/List';





const App = () => {
  let items= ['benue', 'lagos', 'angle', 'bracket']
  const handleSelectedItem= (item: string) =>{
    console.log(item)
  }
  return (
    <div className='app'>
    
      <Navbar />
      <Hero />
       
     
      <List items={items} heading='EMMY' onSelectedItem= {handleSelectedItem}/>
    </div>
  )
}

export default App;
