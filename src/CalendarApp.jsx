import { Outlet } from 'react-router-dom'
import { Navbar } from './calendar/components/Navbar'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  )
}
