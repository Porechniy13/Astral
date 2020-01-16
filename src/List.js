import React from 'react';
import styled from 'styled-components';
import Dialog from "@material-ui/core/Dialog";
import {Input, Button} from "@material-ui/core";

class List extends React.Component {
	constructor(props) {
		super(props);		
		let { id: userId } = props.match.params;
		let { listName: name } = props.match.params;
		let temp = JSON.parse(localStorage.getItem("buyLists"))
		let purchase = []
		temp.map(function(item){
			if(item.name == name){
				purchase = item.list
			}
		})		
			
		this.state = {
			id: userId,
			listName: name,
			purchaseList: purchase,
			open: false,
			item: ""
		};		
	}

	addPurchase = () => {
		let temp = JSON.parse(localStorage.getItem("buyLists"))
		let buy = this.state.item
		let choose = this.state.listName
		temp.map(function(item){
			if(item.name == choose){
				item.list.push(buy)
			}
		})		
		this.setState({
			item: "",
			purchaseList: temp.list
		})
		localStorage.setItem("buyLists", JSON.stringify(temp))
		this.handleClose()
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

	handleList = (event) => {
		const temp = event.target.value
		this.setState({
			item: temp
		})
	}

	render(){
		let { name } = this.state
        return(
		<Wrapper>
			<Header>{name}</Header>
			<Sidebar>
				<Menu>
					<Logo></Logo>
					<MenuItem onClick={this.openList}><p>Добавить элементы</p></MenuItem>					
						<Dialog
							title="Dialog With Actions"								
							open={this.state.open}							
							>
							<form>
								<Input id="list-name" placeholder="Название покупки" onChange={this.handleList}></Input>
							</form>
							<Button onClick={this.addPurchase}>Добавить</Button>
							<Button onClick={this.handleClose}>Закрыть</Button>						
						</Dialog>		
				</Menu>
			</Sidebar>
			<BuyList>
				<ul>
				{this.state.purchaseList.map(function(item){
					return(
						<Note>
							<li>{item}</li>
						</Note>
					)
				})}
				</ul>
			</BuyList>
		</Wrapper>)
    }
}

export default List;

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

const BuyList = styled.div`
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


