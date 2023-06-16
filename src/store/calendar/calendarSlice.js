import { createSlice } from '@reduxjs/toolkit'
import { eventsMock } from '../../mocks/eventsMock'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [...eventsMock],
    activeEvent: null
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload
    }
  }
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;
