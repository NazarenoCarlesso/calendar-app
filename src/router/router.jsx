import { createBrowserRouter } from 'react-router-dom'
import { CalendarApp } from '../CalendarApp'
import { LogInPage } from '../auth/pages/LogInPage'
import { CalendarPage } from '../calendar/pages/CalendarPage'

export const router = createBrowserRouter([
  {
    path: '/calendar',
    element: <CalendarApp />,
    children: [
      {
        path: '/calendar',
        element: <CalendarPage />
      }
    ]
  },
  {
    path: '/auth/login',
    element: <LogInPage />
  }
])