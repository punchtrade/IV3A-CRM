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

// const delet =  $(document).on('change', '.sel', function() {
//     $(this).siblings().find('option[value="'+$(this).val()+'"]').remove()
// });

class Crm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: '',
            text: '',
            dueDate: '',
            date: '',
            message: '',
            sent: false,
        };
    }

    addReminder() {
        this.props.addReminder(this.state.text, this.state.dueDate, this.state.date, this.state.select);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

//  crmRequest = async () => {
//         await axios.post("http://localhost:9000/crm")
//           .then(response => {
//             var newData = data;
//             newData.map(client => {
//               if (client._id === selectedClient._id) {
//                 client.select = selectedClient.select;
//                 client.text = selectedClient.text;
//                 client.dueDate = selectedClient.dueDate;
//                 client.date = selectedClient.date;
//                 client.message = selectedClient.message;
//               }
//             });
//             setData(newData);
//             openCloseCrmModal();
//           }).catch(error => {
//             console.log(error);
//           })
//       }

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
                                <Card key={reminder.id} className="list-group-item">
                                    <div>
                                        <div className="list-item" onChange={event => this.setState({ select: event.target.value })}>{reminder.select}</div>
                                    </div>
                                    {/* <div className="list-item">{reminder.select}</div> */}
                                    <div>
                                        <div className="list-item">{reminder.text}</div>
                                    </div>
                                    <div>
                                        <div className="list-item delete-button"
                                            onClick={() => this.deleteReminder(reminder.id)}
                                        >
                                            &#x2715;
                                    </div>
                                        <Moment  calendar={calendarStrings}>{reminder.date}</Moment>
                                        <br></br>
                                        <Moment add={{days: 2}}>{reminder.dueDate}</Moment>
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
                        // value={age}
                        // onChange={handleChange}
                        label="Pour sélectionner"
                        onChange={event => this.setState({ select: event.target.value })}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>1.Commande (avec sélection véhicule) enregistrée par IV3A</MenuItem>
                    </Select>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item xs={9}>
                        <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" onChange={event => this.setState({ text: event.target.value })} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" onChange={event => this.setState({ date: event.target.value })} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="outlined" fullWidth margin="normal" type="date" name="date" onChange={event => this.setState({ dueDate: event.target.value })} />
                        {/* <div
                    className="btn btn-danger"
                    onClick={() => this.props.clearReminders()}
                    >
                        Clear Reminders
                    </div> */}
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

