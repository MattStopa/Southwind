
import Link from 'next/link'
import styles from '../styles/Home.module.css'
 

import SWTag from 'southwind-react'

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
      <Link href={'./test'}>Test page</Link>
      <SWTag code={str}/>
      <h2>Test</h2>

      <div className='bg-reg-5'>This should have a red background</div>
    </div>
  )
}
