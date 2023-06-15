import { addHours } from 'date-fns'

export const eventsMock = [{
  title: 'Cumpleaños del Jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  user: {
    id: 47,
    name: 'Nazareno'
  }
}]