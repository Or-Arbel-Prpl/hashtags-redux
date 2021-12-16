import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface NewHashtag {
    name: String
}

const initialStateNewHashtag: NewHashtag = {
    name: ''
}

export const newHashtagSlice = createSlice({
    name: 'hashtag',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initialStateNewHashtag,
    reducers: {
      changeHashtag: (state, action: PayloadAction<string>) => {
          state.name = action.payload;
      },
      
    },
  })

export const { changeHashtag } = newHashtagSlice.actions;

export const selectHashtag = (state: RootState) => state.newHashtag;

export default newHashtagSlice.reducer;

