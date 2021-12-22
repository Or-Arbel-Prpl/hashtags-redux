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
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(addHashtag(newHashtag.name));
    dispatch(changeHashtag(''));
  }

  return (
    <React.Fragment>
      <Page
        title="Hashtags management"
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

    <Table/>
    </Page>
    </React.Fragment>
  );
}

export default App;
