import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Paper, Input, Modal } from '@material-ui/core';

class Scenary extends React.Component{
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

export default Scenary;