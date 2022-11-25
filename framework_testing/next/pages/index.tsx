
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SWTag from 'southwind-react'
import { useState } from 'react'

export default function Home() {
  let str = `
    h2 { 
      fs-55 
      bg-blue-5 brad-5 inline tac b-rad-150 
      pl-50 pr-50 pb-10 hover:bg-green-5 pointer 
    }    

  `

  const [test, setTest] = useState(false)

  return (
    <div >
      --
      <Link href={'./test'}>Test page</Link>
      <SWTag code={str}/>
      <h2>Test</h2>

      <div className='bg-red-5'>This should have a red background</div>

      <button onClick={() => setTest(!test)}>Toggle</button>

      { test ?  <div className='bg-blue-8 fc-white p-2'>Testing dynamic elements</div> : '' }
    </div>
  )
}
