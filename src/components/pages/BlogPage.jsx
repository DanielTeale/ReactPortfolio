import React from 'react';

const BlogPage = (props) => {
  return (
    <article id="blog">
      <br/><br/>
        <blockquote className="embedly-card">
          <h4><a href="https://medium.com/@djteale90/my-life-before-and-after-ruby-9927fd62cda9">My life before and "after" Ruby - Daniel
          Teale - Medium</a></h4>
          <p>So its Monday of week 4 at Coder Academy and we've been told that the course is now finished with pure Ruby, so I thought
        I'd tke advantage of this lul in content and do a write up. So how do I feel...</p>
        </blockquote>
        <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
      <section class="picture2">
        <h2>“Technology is best when it brings people together.” <span>Matt Mullenweg, Social Media Entrepreneur</span></h2>
      </section>
  </article>

  )
}

export default BlogPage;