import React from "react";
import { connect } from "react-redux";
import { fetchRandomJoke } from "../actions/joke";
import Loader from "./Loader";

/* const RandomJoke = props => {
  return <div>{props.match.params.id}</div>;
}; */
class RandomJoke extends React.Component {
  componentDidMount() {
    const category = this.props.match.params.id;
    this.props.fetchJoke(category);
  }
  handleAddFavourite = () => {
    console.log("add to favourite");
  };
  handleFetch = () => {
    const { icon_url, value } = this.props.joke;
    if (this.props.fetching) {
      console.log("fetching");
      return <Loader />;
    }
    if (this.props.fetchFailed) {
      return <div>failed to fetch data</div>;
    }
    if (this.props.fetchSuccess) {
      return (
        <div className="joke-card">
          <div className="joke_header">
            <div
              className="image"
              style={{
                background: `url(${icon_url}) 
            no-repeat center center /cover`,
                height: "30px",
                width: "30px",
                display: "inline-block"
              }}
            />
            <div className="favourite-box">
              <i className="fam" onClick={this.handleAddFavourite} />
            </div>
          </div>
          <hr />
          <div className="joke-text">{value}</div>
        </div>
      );
    }
  };
  render() {
    return <React.Fragment>{this.handleFetch()}</React.Fragment>;
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    joke: state.joke,
    fetching: state.status.fetching,
    fetchSuccess: state.status.fetchSuccess,
    fetchFailed: state.status.fetchFailed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchJoke: category => {
      dispatch(fetchRandomJoke(category));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomJoke);
