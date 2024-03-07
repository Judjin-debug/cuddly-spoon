import React from 'react'
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";

const ButtonTab = ({ setPostfix }) => {
  return (
    <section className='ButtonTab'>
      <Users 
        setPostfix={setPostfix}
      />
      <Posts 
        setPostfix={setPostfix}
      />
      <Comments 
        setPostfix={setPostfix}
      />
    </section>
  )
}

export default ButtonTab