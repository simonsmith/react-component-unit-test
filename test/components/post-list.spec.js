import { expect } from 'chai';
import React from 'react/addons';
import PostList from '../../components/post-list.react';
import Post from '../../components/post.react';
import createComponent from '../util/create-component';

const TestUtils = React.addons.TestUtils;

describe('PostList component', function() {
  const postData = [
    { id: 1, title: 'Title 1', content: '<p>Content 1</p>' },
    { id: 2, title: 'Title 2', content: '<p>Content 2</p>' },
    { id: 3, title: 'Title 3', content: '<p>Content 3</p>' }
  ];

  it('should render a list of post components', function() {
    const postList = createComponent(PostList, { posts: postData });
    const items = postList.props.children.filter(postListItem => TestUtils.isElementOfType(postListItem.props.children, Post));

    expect(items.length).to.equal(postData.length);
  });
});
