import React from 'react';
import { connect } from 'react-redux';
// import propTypes from 'prop-types';
import { thunkCharacter } from '../actions/characterAction'
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { importedThunk } = this.props;
  importedThunk(inputText)
  this.setState({
    inputText: ''
  })
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character of GOT below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}

};

const mapDispatchToProps = (dispatch) => ({
  importedThunk: (name) => dispatch(thunkCharacter(name))
});

export default connect(null, mapDispatchToProps)(SearchForm);





// mapeie as ações despachadas como propriedade do componente


// conecte as ações despachadas ao redux

//faça as proptypes da ação oriunda do thunk

