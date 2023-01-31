import React from 'react'
import unchecked from './img/unchecked.png'

export default function UncheckedBox() {
  return (
    <div className='unchecked'>
        <img src={unchecked} alt='unchecked' />
        <p className='no-symptoms'>No Symptoms</p>
    </div>
  )
}
