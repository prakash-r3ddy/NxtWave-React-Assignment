import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ResourceItem from './components/ResourceItem'
import AddResourceItem from './components/AddResourceItem'
import SignUp from './components/SignUp'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/resource/:id" component={ResourceItem} />
      <Route exact path="/add-resource" component={AddResourceItem} />
    </Switch>
  </BrowserRouter>
)

export default App
