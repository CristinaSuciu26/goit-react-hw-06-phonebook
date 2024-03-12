import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      state.contacts.push({
        id: nanoid(),
        name,
        number,
      });
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactSlice.actions;

export default contactSlice.reducer;
