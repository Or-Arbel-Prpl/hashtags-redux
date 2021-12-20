import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface Hashtag {
    id: String,
    name: String,
    slag: String,
    postsCount: Number
}

interface HashtagsListState {
    hashtags: Hashtag[]
}

// Define the initial state using that type
const initialState: HashtagsListState = {
    hashtags: []
};

export const fetchHashtags = createAsyncThunk('hashtags/fetchHashtags', async () => {
    const response = await fetch('https://newsrael-mern.herokuapp.com/api/hashtags')
    // console.log(response.hashtags);
    return response.json();
  })

export const addHashtag = createAsyncThunk('hashtags/addHashtag', async (val) => {
    const newHashtag = await fetch('https://newsrael-mern.herokuapp.com/api/hashtags',
    {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: val })
    })
    .then(res => res.json());
    
    console.log(newHashtag);
    return newHashtag;
  })


export const hashtagsSlice = createSlice({
  name: 'hashtags',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHashtags.pending, (state, action) => {
        console.log('loading');
        
      })
      .addCase(fetchHashtags.fulfilled, (state, action) => {          
        state.hashtags = action.payload.hashtags;
      })
      .addCase(fetchHashtags.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(addHashtag.pending, (state, action) => {
        console.log('adding hashtag...');
      })
      .addCase(addHashtag.fulfilled, (state, action) => {     
        let newHashtag = action.payload.hashtag;
        console.log(newHashtag); 
        state.hashtags = [...state.hashtags, {id: newHashtag._id, name: newHashtag.name, slag: newHashtag.slag, postsCount: newHashtag.postsCount || 0}];
        fetchHashtags();
      })
      .addCase(addHashtag.rejected, (state, action) => {
        console.log(action.error.message);
      })
  }
})



// export const { addHashtag } = hashtagsSlice.actions;

export const selectHashtags = (state: RootState) => state.hashtags;

export default hashtagsSlice.reducer;
