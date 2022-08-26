import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import redSignal from "../images/redSignal.jpeg";
import greenSignal from "../images/greenSignal.jpeg";
import yellowSignal from "../images/yellowSignal.jpeg";
import { changeSignalAction } from "../redux/actions";

class TrafficSignal extends React.Component {

  constructor(props) {
    super();
    this.state = {
      red: "red",
      yellow: "yellow",
      green: "green",
    };

  }

  render() {

    const { dispatch, signalColor } = this.props;

    const { red, yellow, green } = this.state;

    const renderSignal = (signalColor) => {
        switch (signalColor) {
          case "red":
            return redSignal;
          case "green":
            return greenSignal;
          case "yellow":
            return yellowSignal;
          default:
            return null;
        }
      };

    return (
      <div>
        <div className="button-container">
          <button onClick={ () => dispatch(changeSignalAction(red)) } type="button">Red</button>
          <button onClick={ () => dispatch(changeSignalAction(yellow)) } type="button">Yellow</button>
          <button onClick={ () => dispatch(changeSignalAction(green)) } type="button">Green</button>
        </div>
        
         <img className="signal" src={ renderSignal(signalColor) } alt="" />
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    signalColor: state.reducer.signal
})

export default connect(mapStateToProps)(TrafficSignal);

// const renderSignal = (signalColor) => {
//   switch (signalColor) {
//   case 'red':
//     return redSignal;
//   case 'green':
//     return greenSignal;
//   case 'yellow':
//     return yellowSignal;
//   default:
//     return null;
//   }
//s
// };

// function TrafficSignal({ signalColor }) {

// const { changeSignal } = this.props;

//   return (

//     <div>
//       <div className="button-container">
//         <button onClick={ () => changeSignal('red')} type="button">Red</button>
//         <button type="button">Yellow</button>
//         <button type="button">Green</button>
//       </div>
//       <img className="signal" src={ renderSignal(signalColor) } alt="" />
//     </div>
//   );
// }

// const mapStateToProps = () => ({
//   signalColor: '', /* Coloque seu código aqui... */
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeSignal: (color) => dispatch(changeSignalAction(color))
// });

// TrafficSignal.propTypes = {
//   signalColor: PropTypes.string.isRequired,
//   // changeSignal: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
