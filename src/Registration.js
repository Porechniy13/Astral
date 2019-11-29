import React from 'react';
import styled from 'styled-components';
import { Paper, Input, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Registration extends React.Component { 
    state = {
        login: ' '
    }
    
    handleLogin = event => {
        let value = event.target.value
        this.setState({
            login: value
        })
    }
    
    setLogin = () => {
        if(this.state.login !== " "){
            let temp = JSON.parse(localStorage.getItem("users"))
            let buffer = {"name": this.state.login, "buyList": []}
            console.log(temp)
            temp.push(buffer)
            localStorage.clear()
            localStorage.setItem("users", JSON.stringify(temp))
        } else {
            alert("Введите логин!")
        }
    }

    render(){
        return(
            <AuthForm>
                <Paper>
                    <Input placeholder='Введите Ваш логин' onChange={this.handleLogin}></Input>
                    <br></br>
                    <Link to='/'><Button onClick={this.setLogin}>Создать пользователя</Button></Link>
                </Paper>
            </AuthForm>
        )
    }
}

export default Registration;

const AuthForm = styled.div`
    position: absolute;
    top: 30vh;
    left: 60vh;
    right: 60vh;
    bottom: 30vh;
    text-align: center;
`;