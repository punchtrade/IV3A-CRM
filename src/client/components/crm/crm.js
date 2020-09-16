// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField'
// import Grid from '@material-ui/core/Grid';
// import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
// import { createMuiTheme } from '@material-ui/core/styles';
// import axios from 'axios';
// import moment from 'moment';




// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     TextField: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
//     InputLabel: {
//         padding: theme.spacing(1),
//         fontSize: '15px',
//         textAlign: 'left',
//         color: 'black'
//     },
//     Button: {
//         margin: theme.spacing(3),
//         fullWidth: '15px'
//     },
// }));


// function Crm(props) {
//     const useStyles = useStyles();
//     const theme = createMuiTheme();
//     // const current = new Date();
//     // // console.log(select);
//     // const date = `${current.getDate() }/${current.getMonth() + 1}/${current.getFullYear()}`;
//     // const date1 = `${current.getDate() + 1}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     // console.log(date1);
//     // const date2 = `${current.getDate() + 2}/${current.getMonth() + 1}/${current.getFullYear()}`;
//     // console.log(date2);
//     // const [selectedDate, setDateSelected] = useState({
//     //     startDate: "",
//     //     endDate: "",
//     // })
//     const now = moment();
//     moment().format('DD/MM/YYYY HH:mm');
//     const date1 = moment().add(1, 'day');
//     console.log(date1);
//     const date2 = moment().add(2, 'day');

//     // const hadleDate = () => {
//     //     setDateSelected(!selectedDate);
//     // }

//     const onChange = date => {
//         this.props.onChange({ date: date });
//     };

//     const estimatedDate = date => {
//         alert(date);
//     }

//     const uploadDate = async () => {
//         await axios
//             .post("http://localhost:9000/dates", {
//                 headers: { "Content-Type": "application/json" },
//             })
//             .then((response) => {
//                 console.log(response);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }


//     return (
//         <div className={classes.root}>

//             <br /><br />
//             <h6>Fiche Suivi Client A ce Jour</h6>
//             <br />
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Pré-commande (avec sélection véhicule) enregistrée par IV3A
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" onChange={now} />
//                 </Grid>
//                 <Grid item xs={2}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" onClick={() => estimatedDate(date1)} placeholder={date1} />

//                 </Grid>
//                 <Grid item xs={2}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" onClick={() => estimatedDate(date2)} placeholder={date2} />
//                 </Grid>
//                 <Grid item xs={2}>
//                     <Button className={classes.Button} multiline variant="contained">Add</Button>
//                 </Grid>
//                 <Grid item xs={2}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Vérification par IV3A de précommande et Fiche Client
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date" onChange={now} />
//                 </Grid>
//                 <Grid item xs={2}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" name="date1" type="date" name="date1" onClick={() => estimatedDate(date1)} placeholder={date1} />
//                 </Grid>
//                 <Grid item xs={2}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" onClick={() => estimatedDate(date2)} placeholder={date2} />
//                 </Grid>
//                 <Grid item xs={2}>
//                     <Button className={classes.Button} multiline variant="contained" onClick={() => uploadDate()} disableElevation>Saved</Button>
//                 </Grid>
//                 <Grid item xs={2}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Signalement par IV3A à PT d’une nouvelle pré-commande
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" name="date2"  />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Vérif. de dispo. et réservation par PT du véhicule à RRG
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Proposition par PT de véhicule équivalent
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Confirmation de disponibilité/ génération proforma PT à IV3A
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Envoi au Client contrat/facture services & proforma par IV3A
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Réception contrat et proforma signés par le Client par IV3A
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>IV3A</Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Paiement du Client du contrat de services reçu par IV3A
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Réception par IV3A de copie d'ordre de vir. achat véhicule
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Confirmation par PT d'achat du vehicule à RRG
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Réception du virement d'achat du véhicule du Client par PT
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Ordre de virement d'achat du véhicule de PT à RRG
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Réception doc. originale du véhicule de RRG par IMP
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Ordre de préparation de transport de PT à ZS
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Documentation complète du véhicule reçue par ZS de IMP
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Livraison par RRG du Véhicule à PT (ZS)
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Indication à PT par ZS d'une prevision de date de transport
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Instruction de PT à ZS de libérer le transport
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Envoi par ZS des documents d’exportation à PT
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <Button className={classes.Button} multiline variant="contained" disableElevation>PT  </Button>
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Envoi DHL par PT (IMP) à IV3A de doc. véhicule définitive +clé
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Préparation par IV3A du Dossier (TVA, Douane, Imm.)
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Information de ZS a IV3A de disponibilité véhicule au port
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Paiement taxes (TVA, Douane) par le Client (Accomp. IV3A)
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Immatriculation Algérienne par le Client (Accomp.IV3A)
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Remise par IV3A du dossier complet du véhicule au Client
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <Grid item xs={7}>
//                 <InputLabel
//                     htmlFor="filled-adornment-amount"
//                     className={classes.InputLabel}
//                 >
//                     Livraison par IV3A du véhicule au Client
//                     </InputLabel>
//             </Grid>
//             <Grid container spacing={3} className={theme.palette}>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
//                 </Grid>
//                 <Grid item xs={3}>
//                     <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date3" />
//                 </Grid>
//             </Grid>
//             <br />
//         </div>
//     )
// }

// export default Crm;

import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';
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
}));

const theme = createMuiTheme();


class Crm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: '',
            date: moment().add({days:4})
        };
    }

    // componentDidMount() {
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    // tick() {
    //     this.setState({
    //         date: moment().add(1, 'day')
    //     });
    // }

    addReminder() {
        this.props.addReminder(this.state.text, this.state.dueDate, this.state.date);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }


    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-4">
                {
                    reminders.map(reminder => {
                        return (
                            <Card key={reminder.id} className="list-group-item">
                                <div className="list-item">{reminder.text}</div>
                                <div>
                                    <div className="list-item delete-button"
                                        onClick={() => this.deleteReminder(reminder.id)}
                                    >
                                        &#x2715;
                                    </div>
                                    <div type="date" onChange={event => this.setState({ dueDate: event.target.value })}><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                    <div type="date" onChange={event => this.setState({ date: event.target.value })}><em>{moment(new Date(reminder.date)).fromNow()}</em></div>
                                </div>
                            </Card>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        // console.log('this.props', this.props);
        return (
            <div className={useStyles.root}>

                <br /><br />
                <h6>Fiche Suivi Client A ce Jour</h6>
                <br />
                <Grid item xs={9}>
                    <InputLabel
                        htmlFor="filled-adornment-amount"
                        className={useStyles.TextField}
                    >
                        Pré-commande (avec sélection véhicule) enregistrée par IV3A
                    </InputLabel>
                </Grid>
                <Grid container spacing={3} >
                    <Grid item xs={5}>
                        <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" name="pre-commande" onChange={event => this.setState({ text: event.target.value })} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField variant="outlined" fullWidth margin="normal" type="date" name="date" onChange={event => this.setState({ dueDate: event.target.value })} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField variant="outlined" fullWidth margin="normal" type="date" name="date" onChange={event => this.setState({ date: event.target.value })} />
                    </Grid>
                    {/* <Grid item xs={2}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date1" />

                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" name="date2" />
                </Grid> */}
                    <Grid item xs={2}>
                        <Button className={useStyles.Button} multiline variant="contained" onClick={() => this.addReminder()}>Add</Button>
                        {/* <div
                    className="btn btn-danger"
                    onClick={() => this.props.clearReminders()}
                    >
                        Clear Reminders
                    </div> */}
                    </Grid>
                    {this.renderReminders()}
                    <Grid item xs={2}>
                        <Button className={useStyles.Button} multiline variant="contained" disableElevation>IV3A</Button>
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