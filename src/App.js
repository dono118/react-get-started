import { Steps } from 'antd'
import 'antd/dist/antd.min.css'
const { Step } = Steps

const App = () => (
  <Steps direction="vertical" current={1}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
)

export default App
