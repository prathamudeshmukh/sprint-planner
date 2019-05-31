import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

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
    margin: 20,
  },
});
class CreateSprintForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {

  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          onChange={this.handleChange('name')}
          margin="normal"
        />
      </form>
    );
  }
}

withStyles(themeStyles)(CreateSprintForm);
