import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Layout
