import React from 'react'

const Picture = ({data}) => {
  return (
    <div className='picture'>
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        在此下载图片: <a target='_blank' href={data.src.larger}>按一下</a>
      </p>
    </div>
  )
}

export default Picture
