import React from 'react';
import Post from './post.react';

const { ul, li } = React.DOM;

export default React.createClass({
  displayName: 'PostList',

  renderListItems(posts) {
    return posts.map((post) => {
            return li({ key: post.id, className: 'PostList-item' },
              React.createElement(Post, { title: post.title, content: post.content })
            );
          });
  },

  render() {
    return ul({ className: 'PostList'}, this.renderListItems(this.props.posts));
  }
});
