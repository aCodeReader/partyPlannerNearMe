import React from 'react'

export default function Home() {
  return (
    <div className='home'>

        <h1>this is the home page</h1>
        <img className='homeImg' src='https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60'/>
       <div className='homeStatement'>
        <h3> Every event is singular, </h3>
        <h3>Special and always fashionable</h3>
        </div>
        <div className='homePics'>
            <img/>
            <h1>WEDDINGS</h1>
            <img/>
            <h1>CORPORATE</h1>
            <img src='https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'/>
            <h1>SOCIAL</h1>
        </div>

    </div>
  )
}
