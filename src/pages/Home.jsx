import React from 'react'
import Hero from '../component/Hero'
import About from '../component/About'
import Abut from '../component/Abut'
import MyProject from '../component/MyProject'
import Contact from '../component/Contact'
function Home() {
  return (
    <>
     
    <div>
      <div className="smoke-bg">
  {Array.from({ length: 12 }).map((_, i) => (
    <span key={i} className="smoke"></span>
  ))}
</div>
      <div><Hero /></div>
      
      <div><About /></div>
      <div><Abut /></div>
      <div><Contact /></div>
      <div><MyProject /></div>
    </div></>
  )
}

export default Home