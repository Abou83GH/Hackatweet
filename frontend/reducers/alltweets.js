import { createSlice } from "@reduxjs/toolkit"; /*L'import obligatoire*/

const initialState = {
  value: [{firstname : 'Nico', username : 'Lead', date : "", message :'blabla,' ,likes : 2 , userLike:true},
  {firstname : 'Gabin', username : 'Junior', date : "", message :'blabla, #test' ,likes : 5, userLike:false }
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