import React from 'react'
import { Outlet } from 'react-router-dom'
import Cabecera from '../../components/cabecera/Cabecera'
import PieDePagina from '../../components/pieDePagina/PieDePagina'

function DefaultLayout() {
  return (
    <div>
        <Cabecera />
        <Outlet />
        <PieDePagina />
    </div>
  )
}

export default DefaultLayout
