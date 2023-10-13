import React from 'react'
import "../Pages/css/dashboard.css"
import DashNavbar from './DashNavbar'
import DashAnalyticsStrip from './DashAnalyticsStrip'
import DashActivities from './DashActivities'
import ProductAndUser from './ProductAndUser'

function Dashboard() {
  return (
    <div className="rightDashboard">
      <DashNavbar />
      <DashAnalyticsStrip/>
      <DashActivities/>
      <ProductAndUser/>
    </div>
  )
}

export default Dashboard
