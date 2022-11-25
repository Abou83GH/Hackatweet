import { createSlice } from "@reduxjs/toolkit"; /*L'import obligatoire*/

const initialState = {
  value: {
    firstName,
    userName,
    password,
  } /*Value de base dans l'exemple un tableau*/,
};

export const userSlice = createSlice({
  name: "user" /*Le nom de ton reducer*/,

  initialState /*Appel de l'état initial*/,
  reducers: {
    addUser: (state, action) => {},
  },
});

export const { changeModaleUp } = userSlice.actions; /*Expore des actions*/
export default userSlice.reducer;
