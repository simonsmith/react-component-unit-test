import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PostList from '../../components/post-list.react';
import Post from '../../components/post.react';
import sd from 'skin-deep';

describe('PostList component', function() {
  const postData = [
    { id: 1, title: 'Title 1', content: '<p>Content 1</p>' },
    { id: 2, title: 'Title 2', content: '<p>Content 2</p>' },
    { id: 3, title: 'Title 3', content: '<p>Content 3</p>' }
  ];

  it('should render a list of post components', () => {
    const tree = sd.shallowRender(React.createElement(PostList, {posts: postData}));
    const vdom = tree.getRenderOutput();
    const items = vdom.props.children.filter(postListItem => TestUtils.isElementOfType(postListItem.props.children, Post));

    expect(items.length).to.equal(postData.length);
  });
});
