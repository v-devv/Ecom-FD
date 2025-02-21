import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
        <div className="DescriptionBox-navigator">
            <div className="DescriptionBox-nav-box">
            Description
            </div>
            <div className="DescriptionBox-nav-box fade">
            Reviews (122)
            </div>

        </div>
        <div className="DescriptionBox-Description">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate similique adipisci laudantium molestiae numquam modi ipsam quae, molestias laboriosam voluptatibus minus nostrum quia, iusto quam animi repellat soluta laborum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt cupiditate similique adipisci
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox