import React from 'react';
import ReactLoading from 'react-loading';

const ButtonLoading = ({ disabled, loading, text, onClick = () => {} }) => {
  return (
    <button 
      data-testid='button-loading'
      onClick={onClick}
      disabled={disabled}
      type='submit'
      className='boton_2'
    >
      {loading ? <ReactLoading data-testid="loading-in-button" type='spin' height={30} width={30} /> : text}
    </button>
  );
};

export default ButtonLoading;