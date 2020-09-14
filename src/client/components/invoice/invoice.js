import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    TextField: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        fontSize: 14,
    },
}))

export default class Invoice extends Component {
    state = {
        date: '',
        receiptId: '',
        idCard: '',
        firstName: '',
        lastName: '',
        address: '',
        carCatalogue: '',
        description: '',
        quantity: '',
        price: '',
        subtotal: '',
        porcent: '',
        vat: '',
        totalPrice: '',
        price2: '',
        porcent2: '',
        vat2: '',
        totalPrice2: '',
        withoutVat: '',
        vat3: '',
        totalPrice3: '',

    }

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    createAndDownloadPdf = () => {
        axios.post('http://localhost:9000/create-pdf', this.state)
            .then(() => axios.get('http://localhost:9000/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }

    render() {
        return (
            <div className="Invoice">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Typography className={useStyles.title} color="textSecondary" variant="h6" component="h2" gutterBottom>
                            <br></br>
                            FACTURE
                            <br></br>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                            PUNCHTRADE SL
                            <br></br>
                            Avenida de los Madroños, 54B
                            <br></br>
                            Madrid 28043
                            <br></br>
                            MADRID
                            <br></br>
                            ESPAÑA
                            <br></br>
                            CIF/VAT: ES B88606124
                        </Typography>
                    </Grid>
                    <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                        Date de facture:
                        <br></br>
                    </Typography>
                    <Grid container spacing={1}
                        direction="row"
                        justify="space-between"
                        alignItems="flex-end" >
                        <Grid item xs={3}>
                            <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="date" placeholder="Date de facture" name="date" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" placeholder="Nº Facture" name="receiptId" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Identification" name="idCard" onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" placeholder="Nom" name="firstName" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" fullWidth margin="normal" className={useStyles.TextField} type="text" placeholder="Prénom" name="lastName" onChange={this.handleChange} />
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Adresse" name="address" onChange={this.handleChange} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                        </Grid>
                    </Grid>
                    <br></br>
                    <br></br>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Immatriculation" name="carCatalogue" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={9}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Description" name="description" onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}
                        direction="row"
                        justify="space-between"
                        alignItems="flex-end"
                    >
                        <Grid item xs={1}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Unités" name="quantity" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Prix Unitaire" name="price" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Sous-total" name="subtotal" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="%TVA" name="porcent" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="TVA" name="vat" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Total avec TVA" name="totalPrice" onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={1}
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                        <Grid item xs={3}>
                            <Typography className={useStyles.title} variant="body2" component="p" color="textSecondary">
                                TOTAL
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Prix" name="price2" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="%TVA" name="porcent2" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="TVA" name="vat2" onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="Total avec TVA" name="totalPrice2" onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={1}
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                        <Grid item xs={3}>
                            <Typography className={useStyles.title} variant="body2" component="p" color="textSecondary">
                                TOTAL SANS TVA
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="€" name="withoutVat" onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={1}
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                        <Grid item xs={3}>
                            <Typography className={useStyles.title} variant="body2" component="p" color="textSecondary">
                                TVA
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="€" name="vat3" onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <Grid container
                        spacing={1}
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                        <Grid item xs={3}>
                            <Typography className={useStyles.title} variant="body2" component="p" color="textSecondary">
                                TOTAL FACTURE
                        </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField className={useStyles.TextField} variant="outlined" fullWidth margin="normal" type="text" placeholder="€" name="totalPrice3" onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Typography className={useStyles.title} variant="body2" component="p" color="textSecondary">
                        Par Transfert Bancaire á:
                                        <br></br>
                                        Intitulé du compte:
                                        <br></br>
                                        PUNCHTRADE S.L.
                                        <br></br>
                                        BIC:BSCHESMM
                                        <br></br>
                                        IBAN:ES87-0049-6190-0427-1617-1691
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        Conditions de Paiement: 100% à reception de la facture.
                                        <br></br>
                                        (1) Facture Export non soumise à IVA/TVA en Espagne.
                                </Typography>
                    </Grid>
                    <Grid container
                        spacing={1}
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                        <Button 
                         variant="outlined"
                         size="large"
                         color="default"
                         disabledElevation
                        onClick={this.createAndDownloadPdf}>Télécharger PDF</Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}