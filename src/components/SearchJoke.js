import React from "react";
import { connect } from "react-redux";
import { Search } from "../actions/search";
import Loader from "./Loader.js";
class SearchText extends React.Component {
  state = {
    search: "",
    sumbit: false
  };
  handleChange = e => {
    console.log(e.target.value);
    const search = e.target.value;
    this.setState(() => {
      return {
        search
      };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const text = this.state.search;
    if (text !== "") {
      this.setState(() => {
        return {
          submit: true
        };
      });
      this.props.Search(text);
    }
  };
  handleStatus = () => {
    const { total, searchResult } = this.props;
    if (this.props.fetching) {
      return <Loader />;
    }
    if (this.props.fetchSuccess) {
      return (
        <div className="search-result">
          <div className="result-total">
            Total Results {!!searchResult ? total : ""}
          </div>
          <div className="row">
            {!!searchResult.length > 0 ? (
              searchResult.map((result, index) => {
                return (
                  <div className="col-6" key={index}>
                    <div className="box">
                      <div
                        className="joke-image"
                        style={{
                          background: `url(${
                            result.icon_url
                          }) no-repeat center center`,
                          height: "70px",
                          width: "70px"
                        }}
                      />

                      <div className="joke">{result.value}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-4 message">No data found</div>
            )}
          </div>
        </div>
      );
    }
    if (this.props.fetchFailed) {
      return <h1>Error Occured and data not fetched</h1>;
    }
  };
  render() {
    return (
      <div className="Search-container">
        <form onSubmit={this.handleSubmit} className="searchForm">
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
            placeholder="Enter Text to Search"
          />
          <button>Search</button>
        </form>
        {this.state.submit ? (
          this.handleStatus()
        ) : (
          <div className="message">
            <h3>Please enter some text to search</h3>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const searchResult = state.searchResult.result;
  const total = state.searchResult.total;

  return {
    searchResult,
    total,
    fetching: state.status.fetching,
    fetchSuccess: state.status.fetchSuccess,
    fetchFailed: state.status.fetchFailed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Search: text => dispatch(Search(text))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchText);
