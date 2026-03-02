import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/bhumikagupta17')
    //     .then(response=>response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data=useLoaderData()
  return (
    <div className='text-white text-center p-4 bg-gray-600'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/bhumikagupta17')
    return response.json()
}
