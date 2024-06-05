import React from 'react'

function Mychildone(props) {
  return (
    <div className="card text-bg-primary mb-3">
    <div className="card-header">Header</div>
    <div className="card-body">
      <h5 className="card-title">Primary card title {props.abc}</h5>
      <input type='button' value="show msg" onClick={props.myfunc}/>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  )
}

export default Mychildone