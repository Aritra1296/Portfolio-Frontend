import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Grid } from '@material-ui/core'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'
import './App.css'

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className='main-content container_shadow'>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>
                <Route exact path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
