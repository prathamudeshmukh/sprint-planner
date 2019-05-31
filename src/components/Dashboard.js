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
import CreateSprintDialog from "./CreateSprintDialog";

const themeStyles = ({ palette, spacing }) => ({
    root: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: 50,
        right: 15,
        margin: '0 auto',
    },
    paper: {
        padding: spacing(2),
        textAlign: 'center',
        color: palette.text.secondary,
        margin: 20
    },
});

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = { openCreateSprintDialog: false };
        this.onAddClick = this.onAddClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    onAddClick() {
        this.setState( { openCreateSprintDialog: true } )
    }

    handleCancel() {
        this.setState( { openCreateSprintDialog: false } )
    }


    handleSave() {
        this.setState( { openCreateSprintDialog: false } )
    }

    render() {
        const { classes } = this.props;
        console.log(classes.root);
        return <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Sprint Planner
                    </Typography>
                </Toolbar>
            </AppBar>

            <Grid container spacing={3}>
                <Fab color="secondary" aria-label="Add" onClick={this.onAddClick} className={classes.fabButton}>
                    <AddIcon />
                </Fab>

                <Grid item xs={12} alignItems={"center"} justify="center" direction="row">
                    <Paper className={classes.paper}>
                        <SprintPlanChart/>
                    </Paper>
                </Grid>

            </Grid>
            <CreateSprintDialog
                open={this.state.openCreateSprintDialog}
                handleCancel={this.handleCancel}
                handleSave={this.handleSave}
            />
        </div>
    }
}

export default withStyles(themeStyles)(Dashboard)