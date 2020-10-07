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
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';
import axios from 'axios';


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

class Crm6 extends Component {
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
                                        <div type="date" onChange={event => this.setState({ date: event.target.value })}><em>{moment(new Date(reminder.date)).format('Do MMMM YYYY, h:mm:ss a')}</em></div>
                                        <div type="date" onChange={event => this.setState({ dueDate: event.target.value })}><em>{moment(new Date(reminder.dueDate)).add(3, 'days').format('Do MMMM YYYY, h:mm:ss a')}</em></div>
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
                <h6>6.Confirmation de disponibilité/ génération proforma PT à IV3A</h6>
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
                        {/* <MenuItem value={1}>1.Pré-commande (avec sélection véhicule) enregistrée par IV3A</MenuItem> */}
                        {/* <MenuItem value={2}>2.Vérification par IV3A de précommande et Fiche Client</MenuItem> */}
                        {/* <MenuItem value={3}>3.Signalement par IV3A à PT d’une nouvelle pré-commande</MenuItem> */}
                        {/* <MenuItem value={4}>4.Vérifier de disposition et réservation par PT du véhicule à RRG</MenuItem> */}
                        {/* <MenuItem value={5}>5.Proposition par PT de véhicule équivalent</MenuItem> */}
                        <MenuItem value={6}>6.Confirmation de disponibilité/ génération proforma PT à IV3A</MenuItem>
                        {/* <MenuItem value={7}>7.Envoi au Client contrat/facture services & proforma par IV3A</MenuItem>
                        <MenuItem value={8}>8.Réception contrat et proforma signés par le Client par IV3A</MenuItem>
                        <MenuItem value={9}>9.Paiement du Client du contrat de services reçu par IV3A</MenuItem>
                        <MenuItem value={10}>10.Réception par IV3A de copie d'ordre de vir. achat véhicule</MenuItem>
                        <MenuItem value={11}>11.Confirmation par PT d'achat du vehicule à RRG</MenuItem>
                        <MenuItem value={12}>12.Réception du virement d'achat du véhicule du Client par PT</MenuItem>
                        <MenuItem value={13}>13.Ordre de virement d'achat du véhicule de PT à RRG</MenuItem>
                        <MenuItem value={14}>14.Réception doc. originale du véhicule de RRG par IMP</MenuItem>
                        <MenuItem value={15}>15.Ordre de préparation de transport de PT à ZS</MenuItem>
                        <MenuItem value={16}>16.Documentation complète du véhicule reçue par ZS de IMP</MenuItem>
                        <MenuItem value={17}>17.Livraison par RRG du Véhicule à PT (ZS)</MenuItem>
                        <MenuItem value={18}>18.Indication à PT par ZS d'une prevision de date de transport</MenuItem>
                        <MenuItem value={19}>19.Instruction de PT à ZS de libérer le transport</MenuItem>
                        <MenuItem value={20}>20.Envoi par ZS des documents d’exportation à PT</MenuItem>
                        <MenuItem value={21}>21.Envoi DHL par PT (IMP) à IV3A de doc. véhicule définitive +clé</MenuItem>
                        <MenuItem value={22}>22.Préparation par IV3A du Dossier (TVA, Douane, Imm.)</MenuItem>
                        <MenuItem value={23}>23.Information de ZS a IV3A de disponibilité véhicule au port</MenuItem>
                        <MenuItem value={24}>24.Paiement taxes (TVA, Douane) par le Client (Accomp. IV3A)</MenuItem>
                        <MenuItem value={25}>25.Immatriculation Algérienne par le Client (Accomp.IV3A)</MenuItem>
                        <MenuItem value={26}>26.Remise par IV3A du dossier complet du véhicule au Client</MenuItem>
                        <MenuItem value={27}>27.Livraison par IV3A du véhicule au Client</MenuItem>  */}

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
                    <Grid item xs={4}>
                        <br />
                        <Button className={useStyles.Button} multiline variant="contained" onChange={event => this.setState({ select: event.target.value })} onClick={() => this.addReminder()}>Ajouter</Button>
                    </Grid>
                    {this.renderReminders()}
                    <Grid item xs={12}>
                        <br />
                        <div onClick={this.sendEmail} className={this.state.sent ? 'msg msgAppear' : 'msg'}>
                            <Button className={useStyles.Button} multiline variant="contained" type="submit">PT</Button>
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

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(Crm6);

