import React from 'react'

function Rating({data}) {
  return (
    <div>
        {data.map(item =>(
            <>
            <h3>{item.name}</h3>
            <div>
                <p>{item.data}</p>
                <p>{item.comments}</p>
                <p>{item.rating}</p>
            </div>
            </>
        ))}
        
    </div>
  )
}

export default Rating