import React from 'react';

function Blog() {
  // Dummy data for the blog cards
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      author: 'Author 1',
      date: 'April 1, 2023',
      image: 'https://via.placeholder.com/500x300',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'Blog 2',
      author: 'Author 2',
      date: 'April 2, 2023',
      image: 'https://via.placeholder.com/500x300',
      excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 3,
      title: 'Blog 3',
      author: 'Author 3',
      date: 'April 3, 2023',
      image: 'https://via.placeholder.com/500x300',
      excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 4,
      title: 'Blog 4',
      author: 'Author 4',
      date: 'April 4, 2023',
      image: 'https://via.placeholder.com/500x300',
      excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container grid grid-cols-2 gap-4">
        {blogs.map(blog => (
          <div key={blog.id} className={`bg-white rounded-lg shadow-md ${blog.id % 2 === 0 ? 'col-start-2' : ''}`}>
            <img className="w-full h-48 object-cover rounded-t-lg" src={blog.image} alt={blog.title} />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{blog.author}</p>
              <p className="text-gray-600 text-sm mb-2">{blog.date}</p>
              <p className="text-gray-700 text-base">{blog.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
