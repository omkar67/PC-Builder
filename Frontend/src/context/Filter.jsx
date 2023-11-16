import React, { useState, useEffect, useContext, useRef } from 'react'


const GamesContext = React.createContext()

export function useGame() {
  return useContext(GamesContext)
}

export function GamesProvider({ children }) {
 
  const [brand, setBrand] = useState("")
  const [type , setType] = useState("")
  const [socket , setSocket] = useState("")
  const [coreCount , setCoreCount] = useState("")
  const [threadCount , setThreadCount] = useState("")
  function makeBrand(brand) {
    setBrand(brand)
  }
  function makeType(type){
    setType(type)
  }
  function makeSocket(socket){
    setSocket(socket)
  }
  function makeCoreCount(coreCount){
    setCoreCount(coreCount)
  }
  function makeThreadCount(threadCount){
    setThreadCount(threadCount)
  }

  
  const value = {
    brand, 
    makeBrand,
    type,
    makeType,
    socket,
    makeSocket,
    coreCount,
    makeCoreCount,
    threadCount,
    makeThreadCount
   
  }
 
  return (
    <GamesContext.Provider value={value }>
      { children }
    </GamesContext.Provider>
  )
}