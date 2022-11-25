import { createSlice } from "@reduxjs/toolkit"; /*L'import obligatoire*/

const initialState = {
  value: [{title : '#Gabin_le_Boss', occurence : 5},
  {title : '#essai', occurence : 1 }
  ],
};

export const allTrendsSlice = createSlice({
  name: "allTrends",

  initialState,
  reducers: {
    addTrends: (state, action) => {
      state.value.push(action.payload);
    },
    updateTrend: (state, action) => {
     state.value =  state.value.map(elt => {
        if(elt.title === action.payload){
             const theOccurence = elt.occurence + 1;
             return {title : elt.title, occurence : theOccurence}
        }else{
             return elt;
        }
    });
    },
    removeTrends: (state, action) => {
      state.value=[];
    },
  },
});

export const { addTrends, updateTrend, removeTrends } = allTrendsSlice.actions; 
export default allTrendsSlice.reducer;