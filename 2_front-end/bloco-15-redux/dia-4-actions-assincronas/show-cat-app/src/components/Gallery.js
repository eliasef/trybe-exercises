import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import defaultCat from '../images/detCat.gif';

class Gallery extends Component {
  render() {
    const { imgPath, isLoading, useDefaultImg } = this.props;
    return (
      <div className="gallery-container">
        { isLoading && <div>LOADING...</div> }
        { useDefaultImg && <img src={ defaultCat } alt="default cat" /> }
        { !isLoading && !useDefaultImg && <img src={ imgPath } alt="random cat" /> }
      </div>
    );
  }
}

Gallery.propTypes = {
  imgPath: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  useDefaultImg: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  // caso utilize a API 'https://aws.random.cat/meow', utilize o imgPath abaixo 
  imgPath: state.gallery.imgURL,
  // caso utilize a API 'https://api.thecatapi.com/v1/images/search', comente o imgPath acima e descomente o imgPath abaixo
  // imgPath: state.gallery.imgURL[0].url,
  isLoading: state.gallery.isLoading,
  useDefaultImg: state.gallery.defaultImg,
});

export default connect(mapStateToProps)(Gallery);
