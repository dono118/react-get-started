import { Steps } from 'antd'
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.min.css'

const { Step } = Steps

const App = () => {
  return (
    <Steps>
      <Step status="finish" title="Login" icon={<UserOutlined />} />
      <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
      <Step status="process" title="Pay" icon={<LoadingOutlined />} />
      <Step status="wait" title="Done" icon={<SmileOutlined />} />
    </Steps>
  )
}
export default App
