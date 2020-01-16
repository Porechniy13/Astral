import React from 'react';
import styled from 'styled-components';
import { Paper, Input, Button } from '@material-ui/core';

class Auth extends React.Component {
    constructor(props) {
        super(props)
        let check = JSON.parse(localStorage.getItem("buyLists"))
        if(check == undefined){
            localStorage.setItem("buyLists", JSON.stringify([]))
        }
        check = JSON.parse(localStorage.getItem("users"))
        if(check == undefined){
            localStorage.setItem("users", JSON.stringify([]))
        }
        this.state = {
            login: ''
        }
    }

    handleLogin = event => {
        let value = event.target.value
        this.setState({
            login: value
        })
    }

    goToRegistration = event => {
        this.props.history.push('/registration')
    }

    checkUser = () => {
        let buffer = JSON.parse(localStorage.getItem("users"))
        let check = false
        let index = 0
        for(let i=0; i < buffer.length; i++) {
            if (buffer[i] == this.state.login) {
                check = true
                index = i
                break
            }
        }
        if(check){
            let path = '/id='+index
            this.props.history.push(path)
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
                        <Button onClick={this.goToRegistration}>Добавить пользователя</Button>                  
                        <Button onClick={this.checkUser} >Войти</Button>
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