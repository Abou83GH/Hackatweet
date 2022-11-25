import { createSlice } from "@reduxjs/toolkit"; /*L'import obligatoire*/

const initialState = {
  value: [{firstname : 'Nico', username : 'Lead', date : "", message :'blabla,' ,likes : 2 },
  {firstname : 'Gabin', username : 'Junior', date : "", message :'blabla,' ,likes : 5 }
  ],
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