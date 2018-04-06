import React, { Component } from "react";
import { connect } from "react-redux";
import { addCounter } from "../actions";
import { bindActionCreators } from "redux";

class AddCounter extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log("AddCounter ------>");

    return (
      <div className="container">
        <form>
          <div className="field is-grouped">
            <div className="control" />
            <button
              className="button"
              onClick={e => {
                e.preventDefault;
                this.props.dispatch(addCounter());
              }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) };
}
export default connect(mapDispatchToProps)(AddCounter);
