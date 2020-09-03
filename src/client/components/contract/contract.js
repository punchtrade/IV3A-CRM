import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    TextField: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
    },
}))

export default class Contract extends Component {
    state = {

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
            <div className="Contract">
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Typography className={useStyles.title} color="textSecondary" gutterBottom>
                            <br></br>
                            CONTRAT DE SERVICES
                            <br></br>
                        </Typography>
                    </Grid>
                    
                    <Grid container
                        spacing={1}
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end">
                        <Button onClick={this.createAndDownloadPdf}>Télécharger PDF</Button>
                    </Grid>
                </Grid>

            </div>
        );
    }
}