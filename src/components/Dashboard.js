import React from 'react';
import SprintPlanChart from "./SprintPlanChart";
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: 30,
        right: 10,
        margin: '0 auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 20
    },
});

function DashBoard(props) {
        const { classes } = props;
        return <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Sprint Planner
                    </Typography>
                </Toolbar>
            </AppBar>
            <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
                <AddIcon />
            </Fab>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8} alignItems={"center"} justify="center" direction="row">
                    <Paper className={classes.paper}>
                        <SprintPlanChart/>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>

        </div>
}
export default withStyles(styles)(DashBoard);
