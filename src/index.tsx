import ReactDOM from 'react-dom/client'
import App from './App'
import './fonts/IRANSans(FaNum)_Regular.ttf'
import './fonts/IRANSans(FaNum)_Bold.ttf'
import './fonts/IRANSans(FaNum)_Medium.ttf'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
