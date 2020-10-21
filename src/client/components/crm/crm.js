import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions'
import axios from 'axios';
import Moment from 'react-moment';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    TextField: {
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    InputLabel: {
        padding: theme.spacing(9),
        fontSize: '13px',
        textAlign: 'left',
        color: 'black'
    },
    Button: {
        margin: theme.spacing(3),
        marginTop: '25px',
        fullWidth: '10px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const theme = createMuiTheme();



class Crm extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            clientId: '',
            select: '',
            description: '',
            date: this.minDate,
            dueDate: this.maxDate,
            message: '',
            sent: false,
        };
        // this.data = extend([], resourcesData, null, true);
        this.minDate = new Date('10/15/2020');
        this.maxDate = new Date('10/17/2020');
       
    }

    onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:9000/crm", this.state, {
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    treeTemplate(props) {
        return (<div id="waiting"><div id="waitdetails"><div id="waitlist">{props.clientId}</div>
            <div id="waitcategory">{props.description} - {props.date} - {props.select}</div></div></div>);
    }

    minDate =() => {
        this.setState({
            date: this.minDate(new Date('10/15/2020').moment().format("Do dddd MMMM gggg"))
        })
    }
    maxDate =() => {
        this.setState({
           dueDate: this.maxDate(new Date('10/17/2020'))
        })
    }

    addReminder(id) {
        this.props.addReminder(this.state.description, this.state.dueDate, this.state.date, this.state.select, this.state.clientId);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    sendEmail = (e) => {
        e.preventDefault();

        const data = {
            message: this.state.message
        }

        axios.post('/send-email', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log('message  send');

            })
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <div className="col-6">
                <ul className="list-group col-sm-12">
                    {
                        reminders.map(reminder => {
                            return (
                                <Card key={reminder.id} id="waitdetails" className="card_id" draggable>
                                    <div className="list-item" name="_id">{reminder.clientId}</div>
                                    <div>
                                        <div className="list-item" name='Name' onChange={event => this.setState({ select: event.target.value })}>{reminder.select}</div>
                                    </div>
                                    <div>
                                        <div className="list-item" name="Description">{reminder.description}</div>
                                    </div>
                                    <div>
                                        <div className="list-item delete-button"
                                            onClick={() => this.deleteReminder(reminder.id)}
                                        >
                                            &#10006;
                                    </div>
                                        <Moment format="Do MMMM YYYY" type="text" name="date">{this.minDate}</Moment>
                                        <br></br>
                                        <Moment format="Do MMMM YYYY" type="text" name="dueDate">{this.maxDate}</Moment>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        console.log(this.state.select);
        return (
            <div className={useStyles.root}>
                <br /><br />
                <h6>1.Commande (avec sélection véhicule) enregistrée par IV3A</h6>
                <br />
                <TextField  name="clientId" type="number" onChange={event => this.setState({ clientId: event.target.value })}>ID</TextField>
                <Grid item xs={9}>
                    <InputLabel id="select">Pour sélectionner</InputLabel>
                    <Select
                        variant="outlined" fullWidth margin="normal"
                        labelId="select"
                        Id={1}
                        label="Pour sélectionner"
                        onChange={event => this.setState({ select: event.target.value })}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1.Commande (avec sélection véhicule) enregistrée par IV3A</MenuItem>
                    </Select>
                </Grid>
                <br />
                <Grid container spacing={1} >
                    <Grid item xs={9}>
                        <TextField
                            variant="outlined"
                            fullWidth margin="normal"
                            className={useStyles.TextField}
                            type="text"
                            onChange={event => this.setState({ description: event.target.value })} />
                    </Grid>
                    <Grid item xs={9}>
                        <div className='control-pane'>
                            <div className='control-section'>
                                <div className='daterangepicker-control-section'>
                                    <DateRangePickerComponent min={this.minDate} max={this.maxDate}
                                    onChange={this.setState(this.props.date) && this.setState(this.props.dueDate)} 
                                    ></DateRangePickerComponent>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <br /> <br />
                        <Button
                            className={useStyles.Button}
                            multiline variant="contained"
                            onChange={event => this.setState({ select: event.target.value })}
                            onClick={this.onSubmitHandler.bind(this)}
                            onClick={() => this.addReminder()}>Ajouter</Button>
                        <br />  <br />
                        <Button
                            className={useStyles.Button}
                            multiline variant="contained"
                            onChange={this.treeTemplate}
                            onClick={this.onSubmitHandler.bind(this)}>Envoyer</Button>
                    </Grid>
                    {this.renderReminders()}
                    <Grid item xs={12}>
                        <br />
                        <div onClick={this.sendEmail} className={this.state.sent ? 'msg msgAppear' : 'msg'}>
                            <Button className={useStyles.Button} multiline variant="contained" type="submit">IV3A</Button>
                        </div>
                    </Grid>
                </Grid>
                <br />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        reminders: state,
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(Crm);

