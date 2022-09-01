import React from 'react'
import Image from 'next/image'
import image from "../../assets/icon/image.svg"


const Empty = () => {
  return (
    <div className="flex bg-[#d4d4d4] justify-center items-center h-screen w-full border  ">
      <Image src={image.src} width="287" height="287" alt="" />
    </div>
  );
}

export default Empty