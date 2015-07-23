import { expect } from 'chai';
import React from 'react';
import Post from '../../components/post.react';
import createComponent from '../util/create-component';

describe('Post component', function() {
  let post;

  beforeEach(function() {
    post = createComponent(Post, { title: 'Title', content: '<p>Content</p>'});
  });

  it('should render a post title and content', function() {
    const postTitle = post.props.children[0];
    const postContent = post.props.children[1];

    expect(postTitle.props.children).to.equal('Title');
    expect(postContent.props.children).to.equal('Content');
  });

  it('should render a post title and content (alternative method)', function() {
    const expectedChildren = [
        React.DOM.h2({ className: 'Post-header' }, 'Title'),
        React.DOM.p({ className: 'Post-content'}, 'Content')
    ];

    expect(post.type).to.equal('div');
    expect(post.props.className).to.contain('Post');
    expect(post.props.children).to.deep.equal(expectedChildren);
  });

  describe('stripParagraphTags method', function() {
    it('should strip <p> tags', function() {
      const strippedText = Post.prototype.stripParagraphTags('<p>Some text.</p> <p>More text.</p>');

      expect(strippedText).to.equal('Some text. More text.');
    });
  });
});
