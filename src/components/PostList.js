import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.post.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relax divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    post: state.posts,
  };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
