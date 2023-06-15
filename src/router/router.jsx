import { createBrowserRouter } from 'react-router-dom'
import { CalendarApp } from '../CalendarApp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CalendarApp />
  }
])