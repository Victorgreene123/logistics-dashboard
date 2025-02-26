import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import SummaryCards from './components/summary'
import PackageTracking from './components/packagetracking'
import ShipmentOverview from './components/shipmentoverview'
import FleetStatus from './components/fleet'
import PackageType from './components/packagetype'
import LogisticsDashboard from './components/shipmenttdetails'

function App() {
 

  return (
    <>
    <Navbar />
    <div className="p-6 bg-gray-100 min-h-screen">
      <Header />
      <SummaryCards />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <PackageTracking />
        <ShipmentOverview />
        {/* <FleetStatus/>  */}
        <PackageType />
      </div>

      <LogisticsDashboard />
     
    </div>
      
    </>
  )
}

export default App
