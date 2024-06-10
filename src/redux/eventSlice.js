import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*
* fetch all events
*/
export const fetchAllEvents = createAsyncThunk("events/fetchAll", async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/event`);
  return await response.json();
});

/*
* add event
*/
export const createEvent = createAsyncThunk("events/add", async (event) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event)
  });
  return await response.json();
});

/*
* update event
*/
export const updateEvent = createAsyncThunk(
  "events/update",
  async ({ eventID, eventData }) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/event/${eventID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData)
    });
    return await response.json();
  }
);

/*
* delete event
*/
export const deleteEvent = createAsyncThunk(
  "events/delete",
  async (eventId) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/event/${eventId}`, {
      method: "DELETE"
    });
    return await response.json();
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchAllEvents.fulfilled]: (state, action) => action.payload.data,
    [createEvent.fulfilled]: (state, action) => {
      state.push(action.payload.data);
    },
    [updateEvent.fulfilled]: (state, action) => {
      return state.map((ev) => {
        if(ev._id === action.payload.data._id) {
          return action.payload.data;
        }
        return ev;
      });
    },
    [deleteEvent.fulfilled]: (state, action) => {
      return [...action.payload.data];
    }
  }
});

export default eventsSlice.reducer;
