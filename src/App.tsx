import React, {useEffect} from 'react';
import './App.css';
import Table from './components/Table';
import { changeHashtag } from './features/hashtags/newHashtagSlice.ts';
import { useSelector, useDispatch } from 'react-redux';
import { selectHashtag } from './features/hashtags/newHashtagSlice.ts'
import { fetchHashtags, addHashtag } from './features/hashtags/hashtagsSlice.ts'
import { Heading, PageActions, Page, TextField, Button } from '@shopify/polaris'


function App() {
  const newHashtag = useSelector(selectHashtag);
  console.log(newHashtag);
  
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(addHashtag(newHashtag.name));
    dispatch(changeHashtag(''));
  }

  return (
    <React.Fragment>
      <Page
  title="Hashtags management"
  divider
>
      <PageActions
        primaryAction={{
          content: 'Load Hashtags',
          onAction: () => dispatch(fetchHashtags(newHashtag.name))
        }}
      />

    <TextField
      label="Add new hashtag"
      type="text"
      value={newHashtag.name}
      onChange={(e) => dispatch(changeHashtag(e))} 
      autoComplete="off"
      
      connectedRight={<Button onClick={() => submitHandler()}>Submit</Button>}
    />
    {/* <div className="App">
      <input type='text' 
        name='hashtag' 
        placeholder='Insert new hashtag...' 
        onChange={(e) => dispatch(changeHashtag(e.target.value))} 
        value = {newHashtag.name} 
      />
      <button onClick={() => dispatch(addHashtag(newHashtag.name))}>Add Hashtag</button>
      <button onClick={() => dispatch(fetchHashtags(newHashtag.name))}>Load Hashtags</button>
    </div> */}

    <Table/>
    </Page>
    </React.Fragment>
  );
}

export default App;
