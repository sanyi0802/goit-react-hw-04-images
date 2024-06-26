import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button type="button" className="load-more" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
