import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.min.css'

const App = () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  )
}

export default App
