import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*
* fetch all volunteers
*/
export const fetchAllVolunteers = createAsyncThunk(
  "volunteers/fetchAll",
  async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/volunteer`);
    return await response.json();
  }
);

/*
* add a volunteer
*/
export const createVolunteer = createAsyncThunk(
  "volunteers/add",
  async (volunteer) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/volunteer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(volunteer)
    });
    return await response.json();
  }
);

/*
* update a volunteer
*/
export const updateVolunteer = createAsyncThunk(
  "volunteers/update",
  async ({ volunteerID, data }) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/volunteer/${volunteerID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return await response.json();
  }
);

/*
* delete a volunteer
*/
export const deleteVolunteer = createAsyncThunk(
  "volunteers/delete",
  async (volunteerId) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/volunteer/${volunteerId}`, {
      method: "DELETE"
    });
    return await response.json();
  }
);

const volunteersSlice = createSlice({
  name: "volunteers",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchAllVolunteers.fulfilled]: (state, action) => action.payload.data,
    [createVolunteer.fulfilled]: (state, action) => {
      state.push(action.payload.data);
    },
    [updateVolunteer.fulfilled]: (state, action) => {
      const index = state.findIndex((v) => v._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload.data;
      }
    },
    [deleteVolunteer.fulfilled]: (state, action) => {
      return [...action.payload.data];

    }
  }
});

export default volunteersSlice.reducer;
