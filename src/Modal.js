import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Paper, Input } from '@material-ui/core';

class BuyList extends React.Component{
    constructor(props){
        super(props)
        let { id: uid, listId: lid } = props.match.params
        let temp = JSON.parse(localStorage.getItem("users"))

        this.state = {
			id: uid,
			listId: lid,
			currentList: temp[uid].buyList[lid]
		};		
    }
    render(){
        return(
            <Dialog>
                <Paper>
                    <form>
                        <Input></Input>
                    </form>
                </Paper>
            </Dialog>
        )
    }
}

export default BuyList;