import { createSlice } from "@reduxjs/toolkit"; /*L'import obligatoire*/

const initialState = {
  value: [],
};

export const allTweetsSlice = createSlice({
  name: "allTweets",

  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.value.unshift(action.payload);
    },
  },
});

export const { addTweet } = allTweetsSlice.actions; 
export default allTweetsSlice.reducer;