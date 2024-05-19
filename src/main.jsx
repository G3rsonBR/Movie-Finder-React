import ReactDOM from 'react-dom/client'
import MainRoutes from './routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>,
)
