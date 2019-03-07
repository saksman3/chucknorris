import React from "react";
import Categories from "../components/Categories";
import { connect } from "react-redux";
import { fetchList } from "../actions/categories";
import Loader from "./Loader";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }
  checkDataState = () => {
    if (this.props.fetching) {
      return <Loader />;
    }
    if (this.props.fetchFailed) {
      return <div>failed to fetch data</div>;
    }
    if (this.props.fetchSuccess) {
      const categories = this.props.categories;
      return <Categories categories={categories} />;
    }
  };
  render() {
    return (
      <main id="main">
        <h1>Categories</h1>
        {this.checkDataState()}
      </main>
    );
  }
}
const MapStateToProps = state => {
  console.log(state.categories[0]);
  return {
    categories: state.categories,
    fetching: state.status.fetching,
    fetchSuccess: state.status.fetchSuccess,
    fetchFailed: state.status.fetchFailed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchList: () => dispatch(fetchList())
  };
};
export default connect(
  MapStateToProps,
  mapDispatchToProps
)(Dashboard);
