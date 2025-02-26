import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/amareshmaharana')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-black text-white p-4 text-3xl flex'>
      <div className='mt-4 ml-7 mr-9'>
        <img src={data.avatar_url} alt="Git picture" width={200} />
      </div>
      <div className='m-3'>
        <p className='font-sans font-semibold mb-3'>Github Info:</p>
        <p className='font-bold text-left text-2xl font-sans'>Name:- <span className='text-xl font-mono'>{data.name}</span></p>
        <p className='font-bold text-left text-2xl font-sans'>Followers:- <span className='text-xl font-mono'>{data.followers}</span></p>
        <p className='font-bold text-left text-2xl font-sans'>Followings:- <span className='text-xl font-mono'>{data.following}</span></p>
        <p className='font-bold text-left text-2xl font-sans'>Repos:- <span className='text-xl font-mono'>{data.public_repos}</span></p>
        <p className='font-bold text-left text-2xl font-sans'>Visit:- <span className='text-xl font-mono'><a href={data.html_url} className='hover:underline'>{data.html_url}</a></span></p>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/github')
    return response.json()
}