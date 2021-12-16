import React, {useEffect} from 'react';
import './App.css';
import Table from './components/Table';
import { changeHashtag } from './features/hashtags/newHashtagSlice.ts';
import { useSelector, useDispatch } from 'react-redux';
import { selectHashtag } from './features/hashtags/newHashtagSlice.ts'
import { fetchHashtags, addHashtag } from './features/hashtags/hashtagsSlice.ts'


function App() {
  const newHashtag = useSelector(selectHashtag);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
    <div className="App">
      <input type='text' 
        name='hashtag' 
        placeholder='Insert new hashtag...' 
        onChange={(e) => dispatch(changeHashtag(e.target.value))} 
        value = {newHashtag.name} 
      />
      <button onClick={() => dispatch(addHashtag(newHashtag.name))}>Add Hashtag</button>
      <button onClick={() => dispatch(fetchHashtags(newHashtag.name))}>Load Hashtags</button>
    </div>

    <Table/>
    </React.Fragment>
  );
}

export default App;
