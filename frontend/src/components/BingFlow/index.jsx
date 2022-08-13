import { useEffect, useRef, useState } from 'react'
import heartCake from '../../assets/heart-cake.svg'

function BingFlow() {
  // const flyBings = useRef([])

  // const generateBings = () => {
  //   let top = Math.floor((Math.random() * 75 + 8)) + '%';
  //   let dim = (Math.floor((Math.random() * 80 + 25))) + 'px';
  //   let index = (Math.ceil(Math.random() * 2));
  //   let velocity = Math.floor((Math.random() * 50) + 10 ) + 's';
  //   let style = {
  //     top: top,
  //     height: dim,
  //     zIndex: index,
  //     animationDuration: velocity,
  //     animationTimingFunction: 'linear',
  //     animationName: 'cloud',
  //     animationDelay: '0',
  //     position: 'absolute',
  //     padding: '0',
  //     margin: '0',
  //     left: '-100px',
  //     visibility: 'hidden',
  //     opacity: '0.78',
  //   }
  // }

  // useEffect(() => {})

  return (
    <>
      <img src={heartCake} alt='bingggg'></img>
    </>
  )
}

export default BingFlow

