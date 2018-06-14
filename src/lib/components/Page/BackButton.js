import React from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '../Button/IconButton';

const BackButton = (props) => {

  const backLink = props.match.url.split('/').slice(0, -1).join('/');

  return (
    <IconButton 
      use="arrow_back" 
      secondary
      onClick={() => props.history.push(backLink)}
    />
  );

};

BackButton.propTypes = {
};

export default withRouter(BackButton);