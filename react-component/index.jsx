import * as React from 'react'
const SW = require('../../')

let Greet = (props) => (
  <>
    <h1>Hello, world2!! {props.name}</h1>
    <style dangerouslySetInnerHTML={{__html: SW.processSWScript(props.str || '')}}></style>
  </>
)

export default Greet