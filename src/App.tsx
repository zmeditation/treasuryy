import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import { useTheme, ThemeProvider } from '@mui/material/styles'
import store from 'store'

function App() {
  const theme = useTheme()
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

export default App
