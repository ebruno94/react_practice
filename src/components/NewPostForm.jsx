import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Moment from 'moment';

export default function NewPostForm(props){
  let _name = null;
  let _description = null;
  let _photo = null;

  function handleNewPostSubmission(event){
    event.preventDefault();
    props.onNewPost({name: 'Ernest', description: _description.value, formattedWaitTime: new Moment(), id: v4()})
  }
  return(
    <div>
      <style jsx>{`






      `}</style>
    <div className='container'>
        <form onSubmit={handleNewPostSubmission}>
          <textarea
            id='description'
            placeholder='Caption this!'
            ref={(textarea) => {_description = textarea;}}
          />
          <input
            type='hidden'
            id='name'
            ref={()=>{_name = 'Ernest';}}
          />
        <button type='submit'>Post</button>
        </form>
      </div>
    </div>
  );
}
