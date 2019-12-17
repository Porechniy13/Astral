import React from 'react';
import styled from 'styled-components';
import Dialog from "@material-ui/core/Dialog";
import {Input, Button} from "@material-ui/core";

class Content extends React.Component {
	constructor(props) {
		super(props);
		let { id: user_id } = props.match.params;
		let temp = JSON.parse(localStorage.getItem("users"))
		
		this.state = {
			id: user_id,
			name: temp[user_id].name,
			currentList: temp[user_id].buyList,
			open: false,
			listName: " "
		};		
	}

	newList = () => {
		let temp = this.state.currentList
		let bufferName = this.state.listName

		let check = temp.map(function(item){
			if(item.name == bufferName){
				return -1
			} 
		})

		
		if(check == -1){
			alert('Такое название уже используется!')
			return
		} else {
			temp.push({name: bufferName, list: []})
			this.setState({
				currentList: temp
			})
			this.handleClose()
		}		
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

	render() {
		return (
			<Wrapper>
				<Header></Header>
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
						<MenuItem onClick={this.deleteList}><p>Удалить последний</p></MenuItem>
						
						<MenuItem></MenuItem>
					</Menu>
				</Sidebar>
				<List>
					{this.state.currentList.map(function(item){
						return(
							<Link to={`/id=${this.state.id}/${}`}> #Сюда добавить передачу индекса
								<Note>								
									{item.name}
								</Note>
							</Link>
						)
					})

					}
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
