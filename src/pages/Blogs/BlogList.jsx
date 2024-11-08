// BlogList.js
import React from 'react';
import BlogPost from './BlogPost';
import GroupImage from "../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import GroupImage2 from "../../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg";
import GroupImage3 from "../../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg";
import GroupImage4 from "../../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg";


const posts = [
  {
    category: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: GroupImage
  },
  {
    category: 'Business',
    title: 'How to build rapport with your web design clients',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: GroupImage2
  },
  {
    category: 'Startup',
    title: 'Logo design trends to avoid in 2022',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: GroupImage3
  },
  {
    category: 'Technology',
    title: '8 Figma design systems you can download for free today',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: GroupImage4
  }
];

const BlogList = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">All posts</h1>
      {posts.map((item, index) => (
        <BlogPost
          key={index}
          category={item.category}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl} 
        />
      ))}
    </div>
  );
};

export default BlogList;




