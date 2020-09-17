import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment, { max } from 'moment';
import { ModeComment } from '@material-ui/icons';

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
        fullWidth: '15px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const theme = createMuiTheme();


class Crm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select:'',
            text: '',
            dueDate: '',
            date: ''
        };
    }



    addReminder() {
        this.props.addReminder(this.state.text, this.state.dueDate, this.state.date, this.state.select);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }


    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-7">
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
                                    <div type="date" onChange={event => this.setState({ date: event.target.value })}><em>{moment(new Date(reminder.date)).format('DD/MM/YYYY h:mm:ss a')}</em></div>
                                    <div type="date" onChange={event => this.setState({ dueDate: event.target.value })}><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                            </Card>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className={useStyles.root}>
                <br /><br />
                <h6>Fiche Suivi Client A ce Jour</h6>
                <br />
                <Grid item xs={9}>
                </Grid>
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
                    <MenuItem value={1}>1.Pré-commande (avec sélection véhicule) enregistrée par IV3A</MenuItem>
                    <MenuItem value={2}>2.Vérification par IV3A de précommande et Fiche Client</MenuItem>                   
                    <MenuItem value={3}>3.Signalement par IV3A à PT d’une nouvelle pré-commande</MenuItem>
                    <MenuItem value={4}>4.Vérifier de disposition et réservation par PT du véhicule à RRG</MenuItem>
                </Select>

                <Grid container spacing={3} >
                    <Grid item xs={4}>
                        <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" onChange={event => this.setState({ text: event.target.value })} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="outlined" fullWidth margin="normal" type="date" name="date" onChange={event => this.setState({ date: event.target.value })} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="outlined" fullWidth margin="normal" type="date" name="date" onChange={event => this.setState({ dueDate: event.target.value })} />
                    </Grid>
                    <Grid item xs={5}>
                        <Button className={useStyles.Button} multiline variant="contained" onClick={() => this.addReminder()}>Ajouter</Button>
                        {/* <div
                    className="btn btn-danger"
                    onClick={() => this.props.clearReminders()}
                    >
                        Clear Reminders
                    </div> */}
                    </Grid>
                    {this.renderReminders()}
                    <Grid item xs={5}>
                        <Button className={useStyles.Button} multiline variant="contained">IV3A</Button>
                    </Grid>
                </Grid>
                {/* <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Vérification par IV3A de précommande et Fiche Client
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" name="date1" type="date" name="date1" />
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={2}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>Saved</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Signalement par IV3A à PT d’une nouvelle pré-commande
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Vérif. de dispo. et réservation par PT du véhicule à RRG
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Proposition par PT de véhicule équivalent
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Confirmation de disponibilité/ génération proforma PT à IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Envoi au Client contrat/facture services & proforma par IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Réception contrat et proforma signés par le Client par IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Paiement du Client du contrat de services reçu par IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Réception par IV3A de copie d'ordre de vir. achat véhicule
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Confirmation par PT d'achat du vehicule à RRG
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Réception du virement d'achat du véhicule du Client par PT
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Ordre de virement d'achat du véhicule de PT à RRG
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Réception doc. originale du véhicule de RRG par IMP
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Ordre de préparation de transport de PT à ZS
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Documentation complète du véhicule reçue par ZS de IMP
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Livraison par RRG du Véhicule à PT (ZS)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Indication à PT par ZS d'une prevision de date de transport
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Instruction de PT à ZS de libérer le transport
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Envoi par ZS des documents d’exportation à PT
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={useStyles.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Envoi DHL par PT (IMP) à IV3A de doc. véhicule définitive +clé
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Préparation par IV3A du Dossier (TVA, Douane, Imm.)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Information de ZS a IV3A de disponibilité véhicule au port
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Paiement taxes (TVA, Douane) par le Client (Accomp. IV3A)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Immatriculation Algérienne par le Client (Accomp.IV3A)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Remise par IV3A du dossier complet du véhicule au Client
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={useStyles.InputLabel}
                >
                    Livraison par IV3A du véhicule au Client
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
                </Grid>
            </Grid> */}
                <br />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(Crm);