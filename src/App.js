import React from 'react';
import styled from 'styled-components';
import Dialog from "@material-ui/core/Dialog";
import {Input, Button} from "@material-ui/core";

class Content extends React.Component {
	constructor(props) {
		super(props);
		let { id: userId } = props.match.params;
		let temp = JSON.parse(localStorage.getItem("users"))
		let userName = temp[userId]
		let lists = JSON.parse(localStorage.getItem("buyLists"))
		let buyLists = []
		lists.map(function(item){
			if(item.id == String(userId)){
				buyLists.push(item)
			}
		})
		
		this.state = {
			id: userId,
			name: userName,
			open: false,
			userList: buyLists,
			listName: " "
		};		
	}

	newList = () => {
		let temp = this.state.userList
		let glob = JSON.parse(localStorage.getItem("buyLists"))
		let bufferName = this.state.listName

		temp.push({id: this.state.id, name: bufferName, list: []})
		glob.push({id: this.state.id, name: bufferName, list: []})
		this.setState({
			userList: temp
		})
		localStorage.setItem("buyLists", JSON.stringify(glob))
		this.handleClose()
	}		
	
	handleList = (event) => {
		const temp = event.target.value
		this.setState({
			listName: temp
		})
	}

    handleClose = () => {
        this.setState({
            open: false
        });
    }

	openList = () => {
		this.setState({
			open: true
		});
	}

	deleteList = () => {
		let temp = this.state.currentList
		console.log(temp.pop())
		this.setState({
			currentList: temp
		})
	}

	goToList = (event) => {
		const path = '/id='+this.state.id+'/'+event.target.id
		this.props.history.push(path)
	}

	render() {
		const userId = this.state.id
		const goList = this.goToList
		return (
			<Wrapper>
				<Header><h3>Добро пожаловать, {this.state.name}!</h3></Header>
				<Sidebar>
					<Menu>
						<Logo></Logo>
						<MenuItem onClick={this.openList}><p>Добавить список</p></MenuItem>
						<Dialog
							title="Dialog With Actions"								
							open={this.state.open}							
							>
							<form>
								<Input id="list-name" placeholder="Название списка" onChange={this.handleList}></Input>
							</form>
							<Button onClick={this.newList}>Добавить</Button>
							<Button onClick={this.handleClose}>Закрыть</Button>						
						</Dialog>							
						
					</Menu>
				</Sidebar>
				<List>
					{this.state.userList.map(function(item){
						return (
							<Note onClick={goList} id={item.name}>
								<p>{item.name}</p>
							</Note>							
						)
					})}
				</List>
			</Wrapper>
		)
	}

}

export default Content;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 10vh;
	grid-column-gap: 1vh;
	grid-row-gap: 1vh;
`;

const Header = styled.div`
	grid-column-start: 2;
	grid-column-end: 4;	
	background: #EEEEEE;
	border-radius: 1vh;
	text-align: center;
`;

const Sidebar = styled.div`
	grid-row-start: 1;
	grid-row-end: 10;
`;

const List = styled.div`
	grid-column-start: 2;
	grid-column-end: 4;
	grid-row-start: 2;
	grid-row-end: 10;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 20vh;
	grid-column-gap: 1vh;
	grid-row-gap: 1vh;
	background: #EEEEEE;
	border-radius: 1vh;
	padding: 1vh;
`;

const Note = styled.div`
	grid-row-gap: 1vh;
	background: #CCCCCC;
	border-radius: 1vh;
	padding: 1vh;
	:hover {
		cursor: pointer;
		background: aqua;
	}
`;

const Menu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 10vh;
	grid-row-gap: 1vh;
`;

const Logo = styled.div`
	background: aqua;
	border-radius: 1vh;
`;

const MenuItem = styled.div`
	background: #EEEEEE;
	border-radius: 1vh; 
	text-align: center;
	:hover {
		cursor: pointer;
		background: aqua;
	}
`;
