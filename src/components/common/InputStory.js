import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const classes = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
});

export default class InputStory extends React.Component {

    render() {
        return <Paper className={classes.root}>
            <InputBase className={classes.input} placeholder="Add stories"/>
            <IconButton className={classes.iconButton} aria-label="Add">
                <AddIcon/>
            </IconButton>
        </Paper>
    };
}