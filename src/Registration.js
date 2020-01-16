import React from 'react';
import styled from 'styled-components';
import { Paper, Input, Button } from '@material-ui/core';

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
            let check = true
            for(let i = 0; i < temp.length; i++){
                if (temp[i] == this.state.login) {
                    alert('Логин занят! Введите другой.')
                    check = false
                    break
                }
            }
            if(check){
                temp.push(this.state.login)
                localStorage.setItem("users", JSON.stringify(temp))
                this.props.history.push('/')
            }            
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
                    <Button onClick={this.setLogin}>Создать пользователя</Button>
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