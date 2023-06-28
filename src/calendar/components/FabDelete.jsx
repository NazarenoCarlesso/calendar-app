import { useCalendarStore } from '../../hooks/useCalendarStore'
import { useUiStore } from '../../hooks/useUiStore'

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore()
  const { isDateModalOpen } = useUiStore()

  const handleClickDelete = () => {
    startDeletingEvent()
  }

  return (
    <button
      className='btn btn-danger fab-danger'
      onClick={handleClickDelete}
      disabled={!hasEventSelected}
      style={{
        display: hasEventSelected && !isDateModalOpen ? '' : 'none'
      }}
    >
      <i className='fas fa-trash-alt' />
    </button>
  )
}
