import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addPerson } from '../redux/reducerPerson'

const Tennisgames = ({ handlerClickPrevForm }) => {
  const [playerPointOne, setPlayerPointOne] = useState(0)
  const [prénom, setPrénom] = useState('')

  const handlerClickDeletePerson = (id) => {
    console.log(id)
  }
  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <div className="">
        <div className="row mt-3 ">
          <div className="card  m-2">
            <h1 className="card-title p-2">
              Le score est de : {playerPointOne}- {playerPointOne}
            </h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="m-2">
            <button
              type="button"
              className="btn btn-dark  p-3"
              onClick={handlerClickDeletePerson}
            >
              Point joueur 1
            </button>
          </div>
          <div className="m-2 ">
            <button
              type="button"
              className="btn btn-dark p-3"
              onClick={handlerClickDeletePerson}
            >
              Point joueur 2
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="m-2">
            <button
              type="button"
              className="btn btn-dark  p-3"
              onClick={handlerClickDeletePerson}
            >
              Remettre à zéro
            </button>
          </div>
          <div className="m-2 ">
            <button
              type="button"
              className="btn btn-dark p-3"
              onClick={handlerClickDeletePerson}
            >
              Pause / Reprendre
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tennisgames
