import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

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
        padding: theme.spacing(3),
        fontSize: '13px',
        textAlign: 'left'
    },
    Button: {
        margin: theme.spacing(3),
        fullWidth: '15px'
    }
}));

export default function Crm() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <br /><br />
            <h6>Fiche Suivi Client A ce Jour</h6>
            <InputLabel
                htmlFor="filled-adornment-amount"
                className={classes.InputLabel}
            >
                Date de Confirmation de l'Action:
                    </InputLabel>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Pré-commande (avec sélection véhicule) enregistrée par IV3A" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Vérification par IV3A de précommande et Fiche Client" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined">  </TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Signalement par IV3A à PT d’une nouvelle pré-commande" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField
                        className={classes.TextField}
                        placeholder="Vérif. de dispo. et réservation par PT du véhicule à RRG" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Proposition par PT de véhicule équivalent" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Confirmation de disponibilité/ génération proforma PT à IV3A" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Envoi au Client contrat/facture services & proforma par IV3A" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Réception contrat et proforma signés par le Client par IV3A" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Paiement du Client du contrat de services reçu par IV3A" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Réception par IV3A de copie d'ordre de vir. achat véhicule" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Confirmation par PT d'achat du vehicule à RRG" multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Réception du virement d'achat du véhicule du Client par PT" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Ordre de virement d'achat du véhicule de PT à RRG" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Réception doc. originale du véhicule de RRG par IMP" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Ordre de préparation de transport de PT à ZS" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Documentation complète du véhicule reçue par ZS de IMP" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Livraison par RRG du Véhicule à PT (ZS)" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Indication à PT par ZS d'une prevision de date de transport" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Instruction de PT à ZS de libérer le transport" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Envoi par ZS des documents d’exportation à PT" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Envoi DHL par PT (IMP) à IV3A de doc. véhicule définitive +clé" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Préparation par IV3A du Dossier (TVA, Douane, Imm.)" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Information de ZS a IV3A de disponibilité véhicule au port" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Paiement taxes (TVA, Douane) par le Client (Accomp. IV3A)" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Immatriculation Algérienne par le Client (Accomp.IV3A)" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Remise par IV3A du dossier complet du véhicule au Client" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField className={classes.TextField} placeholder="Livraison par IV3A du véhicule au Client" multiline variant="outlined">
                    </TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
                <Grid item xs={2}>
                    <TextField className={classes.TextField} multiline variant="outlined"></TextField>
                </Grid>
            </Grid>
            <a href="/dashboard"><input type="submit" value='Panel'></input></a>

        </div>
    )
}