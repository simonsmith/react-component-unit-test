import { expect } from 'chai';

import PostList from '../../components/post-list.react';
import createComponent from '../util/create-component';

describe('PostList component', function() {
  const postData = [
    { id: 1, title: 'Title 1', content: '<p>Content 1</p>' },
    { id: 2, title: 'Title 2', content: '<p>Content 2</p>' },
    { id: 3, title: 'Title 3', content: '<p>Content 3</p>' }
  ];

  it('should render a list of post components', function() {
    const postList = createComponent(PostList, { posts: postData }).getRenderOutput();
    const items = postList.props.children.filter(postListItem => postListItem.props.children.type.displayName === 'Post');

    expect(items.length).to.equal(postData.length);
  });
});
