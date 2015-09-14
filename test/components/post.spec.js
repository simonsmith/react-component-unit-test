import { expect } from 'chai';
import React from 'react';
import Post from '../../components/post.react';
import sd from 'skin-deep';

describe('Post component', function() {
  let vdom, instance;

  beforeEach(function() {
    const tree = sd.shallowRender(React.createElement(Post, {title: 'Title', content: '<p>Content</p>'}));

    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it('should render a post title and content', function() {
    const postTitle = vdom.props.children[0];
    const postContent = vdom.props.children[1];

    expect(postTitle.props.children).to.equal('Title');
    expect(postContent.props.children).to.equal('Content');
  });

  it('should render a post title and content (alternative method)', function() {
    const expectedChildren = [
      React.DOM.h2({ className: 'Post-header', onClick: instance.doSomethingOnClick}, 'Title'),
      React.DOM.p({ className: 'Post-content'}, 'Content')
    ];

    expect(vdom.type).to.equal('div');
    expect(vdom.props.className).to.contain('Post');
    expect(vdom.props.children).to.deep.equal(expectedChildren);
  });

  describe('stripParagraphTags method', function() {
    it('should strip <p> tags', function() {
      const strippedText = instance.stripParagraphTags('<p>Some text.</p> <p>More text.</p>');

      expect(strippedText).to.equal('Some text. More text.');
    });
  });
});
