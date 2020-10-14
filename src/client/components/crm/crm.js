import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
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
import { ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject, ViewsDirective, ViewDirective, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { appointments, recurrenceAppointments, resourcesData } from '../scheduler/appointments';
import { extend, createElement } from '@syncfusion/ej2-base';



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
        super(props);
        this.state = {
            select: '',
            text: '',
            dueDate: '',
            date: '',
            message: '',
            dataSource: '',
            sent: false,
        };
        this.data = extend([], resourcesData, null, true);
    }

    addReminder(id) {
        this.props.addReminder(this.state.text, this.state.dueDate, this.state.date, this.state.select, this.state.dataSource);
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
        const calendarStrings = {
            nextDay: '[Tomorrow at] LT',
        }
        return (
            <div className="col-9">
                <ul className="list-group col-sm-12">
                    {
                        reminders.map(reminder => {
                            return (
                                <Card key={reminder.id} className="list-group-item" draggable>
                                    <div>
                                        <div className="list-item" onChange={event => this.setState({ select: event.target.value })}>{reminder.select}</div>
                                    </div>
                                    <div>
                                        <Moment calendar={calendarStrings}className="list-item">{reminder.selectedDate}</Moment>
                                    </div>
                                    <div>
                                        <div className="list-item">{reminder.text}</div>
                                    </div>
                                    <div>
                                        <div className="list-item delete-button"
                                            onClick={() => this.deleteReminder(reminder.id)}
                                        >
                                            &#x2715;
                                    </div>
                                        <Moment minDate={new Date(2020, 9, 13)} calendar={calendarStrings}>{reminder.minDate}</Moment>
                                        <br></br>
                                        <Moment type="text"  maxDate={new Date(2020, 9, 15)} add={{ days: 2 }}>{reminder.maxDate}</Moment>
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
                <Grid item xs={9}>
                    <InputLabel id="demo-simple-select-outlined-label">Pour sélectionner</InputLabel>
                    <Select
                        variant="outlined" fullWidth margin="normal"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
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
                <ScheduleComponent
                    width='100%'
                    height='550px'
                    currentView='Month'
                    type="date"
                    name="date"
                    className={useStyles.TextField}
                    onChange={event => this.setState({ dataSource: event.target.value })}
                    selectedDate={new Date(2020, 1, 31, 9, 30, 0)}
                    minDate={new Date(2020, 9, 13)}
                    maxDate={new Date(2020, 9, 15)}
                    eventSettings={{ dataSource: this.data }}
                    >
                    <ViewsDirective>
                        <ViewDirective option='Day' />
                        <ViewDirective option='Week' />
                        <ViewDirective option='WorkWeek' />
                        <ViewDirective option='Month' />
                        <ViewDirective option='Agenda' />
                    </ViewsDirective>
                    <Inject services={[Day, Week, WorkWeek, Agenda, Month, Resize, DragAndDrop]} />
                </ScheduleComponent>
                <Grid container spacing={1} >
                    <Grid item xs={9}>
                        <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" onChange={event => this.setState({ text: event.target.value })} />
                    </Grid>
                    <Grid item xs={3}>
                        <br />
                        <Button className={useStyles.Button} multiline variant="contained" onChange={event => this.setState({ select: event.target.value })} onClick={() => this.addReminder()}>Ajouter</Button>
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

