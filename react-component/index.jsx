import * as React from 'react'
const SW = require('../../')

let Main = (props) => (
  <>
    <style dangerouslySetInnerHTML={{__html: SW.processSWScript(props.code || '')}}></style>
  </>
)

export default Main