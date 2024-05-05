import React from 'react'
import { Header } from '../components/Header'
import { Info } from '../components/Info'
import { Outlet } from 'react-router-dom'

export const Principal = () => {
  return (
    <>
        <Header/>
        <Info/>
    </>
  )
}
