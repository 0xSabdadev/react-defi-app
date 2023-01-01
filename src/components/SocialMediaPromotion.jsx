import React from 'react'
import Card from './Card'
import discord from '../assets/discord2.svg'
import youtube2 from '../assets/youtube2.svg'
import paper from '../assets/paper.svg'
import blog from '../assets/blog.svg'

const SocialMediaPromotion = () => {
    return (
        <div className='social-media-promotion-container'>
            <Card>
                <>
                    <div className='social-media-promotion-text'>
                        <h2>
                            <span className='highlighted'>
                                Join <span> our community</span>
                            </span>
                        </h2>
                    </div>
                    <div className='social-media-promotion-icons'>
                        <a href='/'>
                            <img src={discord} alt='discord' />
                        </a>
                        <a href='/'>
                            <img src={youtube2} alt='tube' />
                        </a>
                        <a href='/'>
                            <img src={paper} alt='whitepaper' />
                        </a>
                        <a href='/'>
                            <img src={blog} alt='discord' />
                        </a>
                    </div>
                </>
            </Card>
        </div>
    )
}

export default SocialMediaPromotion
