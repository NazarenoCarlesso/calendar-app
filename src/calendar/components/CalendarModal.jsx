import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addHours, differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
// DatePicker es-ES
import es from 'date-fns/locale/es';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
registerLocale('es', es)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore()
  const { activeEvent } = useCalendarStore()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  const titleClass = useMemo(() => {
    if (!formSubmitted) return null
    if (formValues.title.length > 0) return 'is-valid'
    else return 'is-invalid'
  }, [formValues.title, formSubmitted])

  useEffect(() => {
    if (activeEvent !== null) {
      setFormValues({ ...activeEvent })
    }
  }, [activeEvent])

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormValues({ ...formValues, [name]: value })
  }

  const onDateChange = (event, changing = 'start') => {
    setFormValues({ ...formValues, [changing]: event })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    // se intentó postear el formulario
    const difference = differenceInSeconds(formValues.end, formValues.start)
    // console.log(difference)
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error')
      return console.log('Error en fechas')
    }
    // console.log(formValues)
    if (formValues.title.length === 0) {
      return console.log('Formulario incompleto')
    }
    // Cerrar modal
    closeDateModal()
  }

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formValues.start}
            className='form-control'
            name='start'
            dateFormat='Pp'
            locale='es'
            showTimeSelect
            timeCaption='Hora'
            onChange={(event) => onDateChange(event, 'start')}
          />
        </div>
        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            selected={formValues.end}
            className='form-control'
            name='end'
            dateFormat='Pp'
            locale='es'
            showTimeSelect
            timeCaption='Hora'
            onChange={(event) => onDateChange(event, 'end')}
          />
        </div>
        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>
        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  )
}
