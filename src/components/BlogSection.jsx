import React from 'react'
import BlogCard from './BlogCard'
import blockchain1 from '../assets/blockchain1.jpg'
import blockchain2 from '../assets/blockchain2.jpg'
import blockchain3 from '../assets/blockchain3.jpg'

const BlogSection = () => {
    const blogs = [
        {
            title: 'How to buy ThorChain',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imgUrl: blockchain1,
        },
        {
            title: 'How to buy ThorChain',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imgUrl: blockchain2,
        },
        {
            title: 'How to buy ThorChain',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imgUrl: blockchain3,
        },
    ]
    return (
        <div className='blog-section-container'>
            <div className='blog-section-header'>
                <h1>
                    Learn More about <span className='highlighted'>TokSwap</span>
                </h1>
                <button className='secondary'>View More</button>
            </div>
            <div className='blogs-container'>
                {blogs.map((blog, idex) => {
                    return (
                        <BlogCard
                            key={idex}
                            title={blog.title}
                            description={blog.description}
                            imgUrl={blog.imgUrl}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default BlogSection
