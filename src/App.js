import React from 'react';
import styled from 'styled-components';


class Content extends React.Component {
	constructor(props) {
		super(props);
		let { user_id } = props.match.params;
		let temp = JSON.parse(localStorage.getItem("users"))
		console.log(temp[user_id].name)
		this.state = {
			id: user_id,
			name: temp[user_id].name,
			currentList: temp[user_id].buyList
		};		
	}

	createList = () => {
		let Node = {
			name: "name",
			category: "category",
			counter: 10
		};
		this.setState(prevState => ({
			size: prevState.size + 1,
			currentList: [...prevState.currentList, Node]
		}));
		localStorage.setItem('currentList', this.state.currentList);
	}

	render() {
		return (
			<Wrapper>
				<Header></Header>
				<Sidebar>
					<Menu>
						<Logo></Logo>
						<MenuItem onClick={this.createList}><p>Добавить список</p></MenuItem>
						<MenuItem onClick={this.deleteList}><p>Удалить последний</p></MenuItem>
						<MenuItem></MenuItem>
					</Menu>
				</Sidebar>
				<List>
					
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
	grid-template-columns: 1fr;
	grid-auto-rows: 5vh;
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
