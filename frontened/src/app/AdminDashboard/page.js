import { AppSidebar } from '@/components/admin/AppSidebar'
import Dashboard from '@/components/admin/Dashboard'
import React from 'react'

function page() {
  return (
    <div className='flex bg-black'>
      <div>
      <AppSidebar/>
      </div>
      <div>
      <Dashboard/>
      </div>
    </div>
  )
}

export default page