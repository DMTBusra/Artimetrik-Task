import React from 'react'

const Pagination = ({totalPages,handleClick}) => {
    const pages =[...Array(totalPages).keys()].map(num=>num+1);

  return (
    <div>{pages.map(num=>(
        <button className="btn_pgn"
        key={num}
        onClick={()=>handleClick(num)}
        >{num}</button>))}
    </div>
  )
}

export default Pagination