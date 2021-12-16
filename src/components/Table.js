import React from 'react'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectHashtags } from '../features/hashtags/hashtagsSlice.ts';


export default function Table() {
    const hashtags = useSelector(selectHashtags).hashtags;
    // console.log(hashtags);
    return (
        <div>
            <table id='hashtagsTable'>
                <tr>
                    <th style={{width:'5%'}}>#</th>
                    <th>Hashtag</th>
                    <th>Slag</th>
                    <th>Posts Count</th>
                    <th>Hashtag Id</th>
                </tr>
                {hashtags &&
                hashtags.map((h,i) => 
                    <tr>
                        <td style={{width:'5%'}}>{i+1}</td>
                        <td>{h.name}</td>
                        <td>{h.slag}</td>
                        <td>{h.postsCount}</td>
                        <td>{h.id}</td>
                    </tr>
                )
                }
            </table>
        </div>
    )
}
