import { configureStore } from "@reduxjs/toolkit";
import { hashtagsSlice } from '../features/hashtags/hashtagsSlice.ts'
import { newHashtagSlice } from '../features/hashtags/newHashtagSlice.ts'

export const store = configureStore({
    reducer: {
        hashtags: hashtagsSlice.reducer,
        newHashtag : newHashtagSlice.reducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch