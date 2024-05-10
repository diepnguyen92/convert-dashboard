import React from 'react'
import ClientHeader from '../../Component/client/ClientHeader'
import ClientFooter from '../../Component/client/ClientFooter'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
    <ClientHeader />

    <Outlet />
    <ClientFooter />
    </>
  )
}

export default ClientLayout