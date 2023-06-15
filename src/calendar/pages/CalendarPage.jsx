import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer } from '../../helpers/calendarLocalizer'
import { eventsMock } from '../../mocks/eventsMock'
import { getMessagesES } from '../../helpers/getMessages'
import { CalendarEvent } from '../components/CalendarEvent'
import { useEffect, useState } from 'react'
import { CalendarModal } from '../components/CalendarModal'

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  useEffect(() => {
    localStorage.setItem('lastView', lastView)
  }, [lastView])

  // eslint-disable-next-line no-unused-vars
  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log({ event, start, end, isSelected })

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return { style }
  }

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event })
  }

  const onSelect = (event) => {
    console.log({ selectEvent: event })
  }

  const onViewChange = (event) => {
    // console.log({ viewChange: event })
    setLastView(event)
  }

  return (
    <>
      <Calendar
        messages={getMessagesES()}
        culture='es-ES'
        localizer={localizer}
        events={eventsMock}
        defaultView={lastView}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />
      <CalendarModal />
    </>
  )
}
