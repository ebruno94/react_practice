import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

export default function PostList(props){
  return(
    <div>
      <style jsx>{`
        .container{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-column-gap: 25px;
          grid-row-gap: 25px;
        }

        .box{
          display: block;
          border: 1px solid black;
          box-shadow: 0px 0px 10px black;
          border-radius: 20px;
          padding: 30px;
          height: 200px;
          width: 200px;
        }

        .box:hover{
          border: 1px solid black;
          box-shadow: 0px 0px 0px white;
          cursor: pointer;
        }



      `}</style>
      <div className='container'>
        {props.postList.map((post)=>
          <div className='box'>
            <Post
              description={post.description}
              name={post.name}
              key={post.id}
              formattedWaitTime={post.formattedWaitTime}
              />
          </div>
        )}
      </div>
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};
