import './components/transactionbar'
import Dashboard from './components/primaryDashboard'
import { Stack } from '@mui/system'
import SideBar from './components/sidebar'

export default function App() {
  
  
  return (
    <Stack
    direction="row"
    justifyContent="start"
    >
      <SideBar/>
      <Dashboard/>
      
    </Stack>
  )
}

