import React from 'react';
import { connect } from 'react-redux';
import { actionFetchDog } from './store';
import './App.css';

function App({ isFetching, src, fetchDog }) {

  return (
    isFetching ? <p>Loading</p>
    : (
      <div style={{ width: 500 }}>
        <button
        style={{ display: 'block' }}
        onClick={fetchDog}
        type="button"
        >
          Novo Doguinho
        </button>
      {src ? <img style={{ width: '100%'}} src={src} alt="dog" /> : <p>Busque um doguinho</p>}
      
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(actionFetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
