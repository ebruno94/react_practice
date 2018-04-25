import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props){
  return(
    <div>
      <styles jsx>{`




      `}</styles>
      <h3>{props.name} -- {props.formattedWaitTime} ago</h3>
      <hr/>
      <p>{props.description}</p>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  description: PropTypes.string
}
