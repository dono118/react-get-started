import { Steps } from 'antd'
import 'antd/dist/antd.min.css'

const { Step } = Steps

const App = () => {
  return (
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  )
}
export default App
