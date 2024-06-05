import React from 'react'

const Video = () => {
  return (
    <div>
       <iframe
            className="w-[100%] rounded-xl"
            width="400"
            height="400"
            src="https://www.youtube.com/embed/DNNRvX_28ks?si=mGJok2fmSPhd6hNR"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
    </div>
  )
}

export default Video
