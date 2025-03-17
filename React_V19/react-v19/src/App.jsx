import { useState } from 'react'
import User from './components/User'
import Sample from './components/Sample'
import Skill from './components/Skill'
import NastedLoop from './components/NastedLoop'
import UseFormStatus from './components/UseFormStatus'
import UseTransition from './components/UseTransition'
import DerivedState from './components/DerivedState'

// import './App.css'

function App() {


  return (
    <>
    <DerivedState/>
    <UseTransition/>
      <UseFormStatus />
      <NastedLoop />
      <Skill />
      <User />
      <Sample />
    </>
  )
}

export default App
