const fs = require('fs')

let contents = fs.readFileSync('./dist/swcss.js', {encoding:'utf8'})

let data = `

<body></body>


<div class="large-text">This is large text</div>

<style rel='ext'>
  .large-text { mt-2 fs-55 }
</style>

<script>
  ${contents}
</script>



`


fs.writeFileSync('./playground.html', data, {encoding:'utf8'})

