import React from 'react';
import styled from 'styled-components';
import { Paper, Input, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Auth extends React.Component {
    state = {
        login: '',
        id: 0,
        access: false
    }

    handleLogin = event => {
        let value = event.target.value
        this.setState({
            login: value
        })
    }

    checkUser = () => {
        let buffer = JSON.parse(localStorage.getItem("users"))
        let check = false
        let index = 0
        for(let i=0; i < buffer.length; i++) {
            if (buffer[i].name === this.state.login) {
                check = true
                index = i
                break
            }
        }
        if(check){
            this.setState({
                id: index,
                access: true
            })
        }
        else{
            alert("Неверный логин! Зарегистрируйтесь!")
        }
    }

    render() {
        return (
            <AuthForm>
                <Paper>
                    <h1 align='center'>Введите логин</h1>
                    <Full><Input placeholder='Логин' onChange={this.handleLogin}></Input></Full>
                    <Full>
                        <Link to='/registration'><Button>Добавить пользователя</Button></Link>                   
                        <Link to={`/id=${this.state.id}`}><Button onClick={this.checkUser} >Войти</Button></Link>
                    </Full>
                </Paper>
            </AuthForm>
        )
    }
}

export default Auth;

const AuthForm = styled.div`
    position: absolute;
    top: 30vh;
    left: 60vh;
    right: 60vh;
    bottom: 30vh;
`;

const Full = styled.div`
    width: 100%;
    text-align: center;
`;