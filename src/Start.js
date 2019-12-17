import React from 'react'
import Auth from './Auth' 
import Content from './App'
import Registration from './Registration'
import BuyList from './Modal'
import {Route, BrowserRouter } from 'react-router-dom'


class Start extends React.Component {    
    render(){
        return( 
            <BrowserRouter>
                <Route exact path='/' component={Auth}></Route>
                <Route exact path='/id=:id' component={Content}></Route>
                <Route exact path='/registration' component={Registration}></Route>
                <Route exact path='/id=:id/:listId' component={BuyList}></Route>
            </BrowserRouter>
        )
    }
}

export default Start;