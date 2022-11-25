import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const SW = require('southwind')

import RC from 'southwind-react'

export default function Home() {
  let str = `
    h2 { 
      fs-55 
      bg-blue-5 brad-5 inline tac b-rad-150 
      pl-50 pr-50 pb-10 hover:bg-green-5 pointer 
    }    

  `

  return (
    <div >
      --

      <RC name={"asdfasdf"}></RC>
      <h2>Test</h2>
    </div>
  )
}
