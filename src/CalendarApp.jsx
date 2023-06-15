import { Outlet } from 'react-router-dom'
import { Navbar } from './calendar/components/NavBar'

export const CalendarApp = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
