import React from 'react'
import Link from 'next/link'
import classes from './postItem.module.css'
import Image from 'next/image'

const PostItem = (props) => {
    const {title, description, time} = props
    
    return (
        <li className={classes.post}>
            <Link>
                <a>
                    <div className={classes.image}>
                        {/* Image */}
                    </div>
                    <div className={classes.content}>
                        <h3>Title</h3>
                        <time>July 29th 2022</time>
                        <p>Lorum ipsum dolor sit amet</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem
