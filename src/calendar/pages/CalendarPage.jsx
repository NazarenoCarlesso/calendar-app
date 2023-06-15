import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer } from '../../helpers/calendarLocalizer'
import { eventsMock } from '../../mocks/eventsMock'
import { getMessagesES } from '../../helpers/getMessages'

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({ event, start, end, isSelected })

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return { style }
  }

  return (
    <Calendar
      messages={getMessagesES()}
      culture='es-ES'
      localizer={localizer}
      events={eventsMock}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 500 }}
      eventPropGetter={eventStyleGetter}
    />
  )
}
