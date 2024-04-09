import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <div className='container mx-auto py-10 xl:px-0 px-7'>
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        {blogs.map((blog, index) => (
          <div key={index} className='blogItem flex flex-col'>
            <div className='blogs grow'>
              <h2 className='blogHead'>{blog.title}</h2>
              <p>{blog.description}</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex blogDate flex-1'>{blog.date}</div>
              <div className='blogLikes'>{blog.likes}</div>
            </div>
            <a href={blog.link} className='blogLink'></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
