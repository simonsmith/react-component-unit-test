import { expect } from 'chai';
import React from 'react';
import Post from '../../components/post.react';
import sd from 'skin-deep';

describe('Post component', () => {
  let tree;

  beforeEach(() => {
    tree = sd.shallowRender(React.createElement(Post, {title: 'Title', content: '<p>Content</p>'}));
  });

  it('should render a post title and content', () => {
    expect(tree.subTree('.Post-header').text()).to.equal('Title');
    expect(tree.subTree('.Post-content').text()).to.equal('Content');
  });

  describe('stripParagraphTags method', () => {
    it('should strip <p> tags', () => {
      const strippedText = Post.prototype.stripParagraphTags('<p>Some text.</p> <p>More text.</p>');

      expect(strippedText).to.equal('Some text. More text.');
    });
  });
});
