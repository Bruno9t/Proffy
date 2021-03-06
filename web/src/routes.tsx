import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

// pages
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm'
import TeacherList from './pages/TeacherList'



const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Landing} />
            <Route  path='/study' component={TeacherList} />
            <Route  path='/give-classes' component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes