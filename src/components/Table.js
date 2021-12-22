import React from 'react'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectHashtags } from '../features/hashtags/hashtagsSlice.ts';
import { Page, Card, DataTable } from '@shopify/polaris'

export default function Table() {
    let hashtags = useSelector(selectHashtags).hashtags;
    hashtags = hashtags.map((h,i) => [i+1, h.name, h.slag, h.postsCount, h._id] );
    return (

      <Page title="Hashtags list">
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'text',
              'text',
              'numeric',
              'text',
            ]}
            headings={[
              '#',
              'Hashtag',
              'Slag',
              'Posts Count',
              'Hashtag Id',
            ]}
            rows={hashtags}
            footerContent={`Showing ${hashtags.length} of ${hashtags.length} results`}
          />
        </Card>
      </Page>

    )
}
