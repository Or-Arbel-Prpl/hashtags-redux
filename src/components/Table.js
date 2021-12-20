import React from 'react'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectHashtags } from '../features/hashtags/hashtagsSlice.ts';
import { Page, Card, DataTable } from '@shopify/polaris'

export default function Table() {
    let hashtags = useSelector(selectHashtags).hashtags;
    hashtags = hashtags.map((h,i) => [i+1, h.name, h.slag, h.postsCount, h._id] );
    // hashtags = hashtags.map((h) => Object.values(h)) ;
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
        //   totals={['', '', '', 255, '$155,830.00']}
          footerContent={`Showing ${hashtags.length} of ${hashtags.length} results`}
        />
      </Card>
    </Page>


        // <div>
        //     <table id='hashtagsTable'>
        //         <tr>
        //             <th style={{width:'5%'}}>#</th>
        //             <th>Hashtag</th>
        //             <th>Slag</th>
        //             <th>Posts Count</th>
        //             <th>Hashtag Id</th>
        //         </tr>
        //         {hashtags &&
        //         hashtags.map((h,i) => 
        //             <tr>
        //                 <td style={{width:'5%'}}>{i+1}</td>
        //                 <td>{h.name}</td>
        //                 <td>{h.slag}</td>
        //                 <td>{h.postsCount}</td>
        //                 <td>{h.id}</td>
        //             </tr>
        //         )
        //         }
        //     </table>
        // </div>
    )
}
