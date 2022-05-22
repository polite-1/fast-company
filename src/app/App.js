import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/ui/navBar'
import EditUser from './layouts/editUser'
import Login from './layouts/login'
import Main from './layouts/main'
import NotFound from './layouts/not-found'
import Users from './layouts/users'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId/edit" component={EditUser} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
