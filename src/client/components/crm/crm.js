import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    TextField: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    InputLabel: {
        padding: theme.spacing(1),
        fontSize: '15px',
        textAlign: 'left',
        color: 'black'
    },
    Button: {
        margin: theme.spacing(3),
        fullWidth: '15px'
    },
}));

const theme = createMuiTheme({

});


function Crm (props) {
    const {history} = props;
    const classes = useStyles();
    const theme = createMuiTheme();

    return (
        <div className={classes.root}>

            <br /><br />
            <h6>Fiche Suivi Client A ce Jour</h6>
            {/* <InputLabel
                htmlFor="filled-adornment-amount"
                className={classes.InputLabel}
            >
                Date de Confirmation de l'Action:
                    </InputLabel> */}
            <br />
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Pré-commande (avec sélection véhicule) enregistrée par IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Vérification par IV3A de précommande et Fiche Client
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Signalement par IV3A à PT d’une nouvelle pré-commande
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Vérif. de dispo. et réservation par PT du véhicule à RRG
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Proposition par PT de véhicule équivalent
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Confirmation de disponibilité/ génération proforma PT à IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Envoi au Client contrat/facture services & proforma par IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Réception contrat et proforma signés par le Client par IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Paiement du Client du contrat de services reçu par IV3A
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Réception par IV3A de copie d'ordre de vir. achat véhicule
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Confirmation par PT d'achat du vehicule à RRG
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Réception du virement d'achat du véhicule du Client par PT
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Ordre de virement d'achat du véhicule de PT à RRG
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Réception doc. originale du véhicule de RRG par IMP
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Ordre de préparation de transport de PT à ZS
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Documentation complète du véhicule reçue par ZS de IMP
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Livraison par RRG du Véhicule à PT (ZS)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Indication à PT par ZS d'une prevision de date de transport
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Instruction de PT à ZS de libérer le transport
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Envoi par ZS des documents d’exportation à PT
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Envoi DHL par PT (IMP) à IV3A de doc. véhicule définitive +clé
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Préparation par IV3A du Dossier (TVA, Douane, Imm.)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Information de ZS a IV3A de disponibilité véhicule au port
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Paiement taxes (TVA, Douane) par le Client (Accomp. IV3A)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Immatriculation Algérienne par le Client (Accomp.IV3A)
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Remise par IV3A du dossier complet du véhicule au Client
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <InputLabel
                    htmlFor="filled-adornment-amount"
                    className={classes.InputLabel}
                >
                    Livraison par IV3A du véhicule au Client
                    </InputLabel>
            </Grid>
            <Grid container spacing={3} className={theme.palette}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" />
                </Grid>
            </Grid>
            <br/>
            <Button
        variant="contained"
        position="left"
        color="danger"
        fullWidth
        disableFocusRipple
        onClick={() => {
          props.history.push("/dashboard")
        }}
      // openCloseCrmModal(this.props.history.push('/crm'))}
      >
        Panel
        </Button>

        </div>
    )
}

export default withRouter(Crm);