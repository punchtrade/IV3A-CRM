import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
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

    },
}))

var usuario = localStorage.getItem('usuario');

export default class Contract extends Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        model: '',
        date: '',
    }

    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })

    createAndDownloadPdf = () => {
        axios.post('http://localhost:9000/create-pdf2', this.state)
            .then(() => axios.get('http://localhost:9000/fetch-pdf2', { responseType: 'blob' }))
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
                        <Typography className={useStyles.title} color="textSecondary" variant="h6" component="h2" gutterBottom>
                            <br></br>
                            CONTRAT DE SERVICES: {usuario}
                            <br></br>
                        </Typography>
                    </Grid>
                    <Grid container spacing={1}>
                        {/* <Grid item xs={3}> */}
                        <Typography className={useStyles.title} color="textSecondary" variant="body2" gutterBottom>
                            Entre les soussignés:
                    </Typography>
                        {/* </Grid> */}
                    </Grid>
                    <Grid container spacing={1}
                        direction="row"
                    >
                        <Grid item xs={3}>
                            <TextField
                                variant="outlined"
                                fullWidth margin="normal"
                                className={useStyles.TextField}
                                type="text"
                                placeholder="Nom"
                                name="firstName"
                                onChange={this.handleChange} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                variant="outlined"
                                fullWidth margin="normal"
                                className={useStyles.TextField}
                                type="text"
                                placeholder="Prénom"
                                name="lasttName"
                                onChange={this.handleChange} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}
                        direction="row"
                    >
                        <Typography className={useStyles.title} color="textSecondary" variant="body2" gutterBottom>
                            Residant á:
                    </Typography>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Grid item xs={9}>
                                <TextField
                                    variant="outlined"
                                    fullWidth margin="normal"
                                    className={useStyles.TextField}
                                    type="text"
                                    placeholder="Adresse"
                                    name="address"
                                    onChange={this.handleChange} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography className={useStyles.title} color="textSecondary" variant="body2" gutterBottom>
                                Ci-après désigné(e) e Client,
                                d’une part,
                    </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography className={useStyles.title} color="textSecondary" variant="body2" gutterBottom>
                                et
                    </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography className={useStyles.title} color="textSecondary" variant="body2" gutterBottom>
                                La société IV3A, Société forme juridique au capital de ____________DZ,
                                dont le siège social est ____________, ____________, ____________,
                                enregistrée au Registre du Commerce et des Sociétés d’Alger sous le numéro ____________,
                                représentée par Monsieur / Madame / Mademoiselle ____________ ____________ ____________ nom et qualité,
                                ci-après dénommé(e)
                                « le Prestataire de Services » ou « le Prestataire »,
                                d'autre part,
                    </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography className={useStyles.title} color="textSecondary" display="inline" variant="body2" gutterBottom>
                                il a été convenu ce qui suit :
                                Préambule
                                Le Client a décidé d’acheter, sur ses fonds propres en € (Euros), par débit sur son compte en € (Euros)
                                no 400125000000000000, ouvert à la Banque Crédit Populaire d'Algérie, succursale de Alger Grande Poste,
                                à un vendeur européen identifié par le Prestataire, un véhicule de moins de trois (3) ans d’âge, de type,
                            </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Grid item xs={9}>
                                <TextField
                                    variant="outlined"
                                    fullWidth margin="normal"
                                    className={useStyles.TextField}
                                    type="text"
                                    placeholder="Módele"
                                    name="model"
                                    onChange={this.handleChange} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography color="textSecondary" display="inline" margin="normal" variant="body2" gutterBottom>
                                ou bien le modèle le plus proche disponible,
                                au moment précis de l’achat, dans le catalogue du vendeur européen mis en ligne par le Prestataire,
                                et d’importer ce véhicule, comme l’autorise l’Article 110 de la Loi no 19-14 portant loi de finances pour 2020.
                            </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography color="textSecondary" display="inline" variant="body2" gutterBottom>
                                Le Client indique connaître la loi et savoir en particulier qu’il n’est autorisé à un tel achat qu’une fois tous les trois (3) ans.
                            </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography color="textSecondary" display="inline" variant="body2" gutterBottom>
                                Le Prestataire a pour rôle unique d’assister le Client dans son achat de véhicule auprès du vendeur européen et de délivrer au Client les prestations de services listées dans les paragraphes qui suivent
                                et qui sont connexes à l’achat du véhicule.
                                </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography color="textSecondary" display="inline" variant="body2" gutterBottom>
                                Même si la mission du Prestataire est de faciliter la relation entre le Client et le vendeur européen du véhicule et de permettre la livraison en Algérie du véhicule,
                                le Prestataire n’est en aucun cas impliqué dans l’opération de vente / achat du véhicule et n’est en aucun cas impliqué dans,
                                ni responsable de, l’opération d’achat telle que prévue par la Loi no 19-14, ni vis à vis du Client ni du vendeur européen.
                                </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Typography color="textSecondary" display="inline" variant="body2" gutterBottom>
                                Les Prestations, objet de ce contrat sont les suivantes :
                                <br></br>
                                • Assistance au Client, si nécessaire, dans la recherche du véhicule désigné au premier paragraphe du préambule, à partir du site web du Prestataire et en coordination avec le vendeur européen,
                                éditeur du catalogue de véhicules disponibles, mise en ligne par le Prestataire, et fournisseur de ce véhicule ;
                                <br></br>
                                • Recherche, pour le Client, d’un véhicule équivalent au véhicule désigné au premier paragraphe du préambule,
                                au cas où ce dernier ne serait plus disponible au catalogue du vendeur européen (acheté par un autre client dans les heures précédentes à la finalisation de la commande) ;
                                <br></br>
                                • Assistance à la constitution du dossier administratif permettant l’achat et l’importation du véhicule par le Client ;
                                le Prestataire est libéré de toute obligation si le Client ne fournit pas la totalité de la documentation requise par l’Administration,
                                vendeurs ou entreprises de transport maritime ;
                                <br></br>
                                • Assistance éventuelle à l’ouverture d’un compte en Euros (€) par le Client, si celui-ci n’en dispose pas, auprès d’une banque partenaire ;
                                <br></br>
                                • Coordination avec le vendeur européen pour la réservation du véhicule,
                                l’émission par le vendeur européen et la remise au Client de la facture d’achat pour son paiement immédiat ;
                                <br></br>
                                • Suivi de la commande du véhicule auprès du vendeur européen ;
                                <br></br>
                                • Assistance pendant les procédures d’achat et de paiement par le Client du montant du prix véhicule,
                                cet achat devant être effectué par le Client, sur ses fonds propres en € (Euros), par virement,
                                sur le compte bancaire du vendeur européen de 100%, à la commande de la valeur du prix exact du véhicule depuis son compte en € (Euros) indiquant ci-dessus,
                                l’ensemble des frais bancaires ainsi que tous autres frais, droits et taxes liés à cet achat restant intégralement à la charge du Client ;
                                <br></br>
                                • Négociation des conditions économiques du transport maritime du véhicule, en Containeur, depuis le port européen d’origine,
                                lieu où la vente devient effective, jusqu’au port d’Alger, y incluse l’assurance transport du véhicule,
                                coordination avec le transporteur maritime et facturation au Client de la prestation de transport dont le Client devra s’acquitter dès réception de facture et,
                                en tout état de cause, avant le transport du véhicule ;
                                <br></br>
                                • Supervision de la mise en Containeur du véhicule au port européen d’origine ;
                                <br></br>
                                • Réception du véhicule au Port d’Alger ;
                                <br></br>
                                • Accompagnement du Client dans l’ensemble des procédures techniques et administratives d’exportation (1),
                                de transport (2) depuis l’Europe et d’importation (3) en Algérie ;
                                <br></br>
                                • Assistance au Client dans la relation avec l’administration des douanes (jusqu’au paiement des taxes de dédouanement par le Client),
                                des impôts (jusqu’au paiement de la TVA due sur le véhicule
                                importé par le Client) et de la Préfecture (Wilaya) (jusqu’au paiement des taxes et impôts d’immatriculation et de circulation par le Client) ;
                                <br></br>
                                • Mise à disposition de la documentation originale (Fiche Technique) et des clés au Client pour réception finale de son véhicule.
                                <br></br>
                                (1) Les coûts des formalités et de la documentation liés aux opérations d’exportation du véhicule depuis l’Europe sont inclus dans le prix d’achat du véhicule.
                                <br></br>
                                (2) Les coûts des formalités et de la documentation liés aux opérations d’exportation du véhicule depuis l’Europe sont inclus dans le prix d’achat du véhicule.
                                <br></br>
                                (3) LES FRAIS, DROITS ET TAXES LIES AUX OPERATIONS DE TRANSPORT, D’IMPORTATION (PAIEMENT DES TAXES DE DOUANES ET DE LA TVA) D’IMMATRICULATION,
                                DE MISE EN CIRCULATION ET D’ACHAT D’ASSURANCES DU VEHICULE EN ALGERIE NE SONT EN AUCUN CAS INCLUS, NI DANS LE PRIX D’ACHAT DU VEHICULE,
                                NI DANS LE PRIX DES PRESTATIONS FAISANT L’OBJET DU PRÉSENT CONTRAT ET DEVRONT ÊTRE INTÉGRALEMENT ACQUITTÉS PAR LE CLIENT DIRECTEMENT AUPRÈS DE L’ADMINISTRATION.
                                </Typography>
                        </Grid>
                        <Grid item xs zeroMinWidth
                        >
                            <Typography color="textSecondary" display="inline" variant="body2" gutterBottom>
                                Ceci exposé,
                                <br></br>
                                Il a été convenu ce qui suit :
                                <br></br>
                                Article premier - Objet
                                Le présent contrat est un contrat de prestations ayant pour objet la mission définie au préambule du présent contrat.
                                En contrepartie de la réalisation de ces prestations, le Client verse au Prestataire la somme de 203.225,00 DZ non remboursable,
                                correspondant à cent pour cent (100%) du montant du contrat, à la signature de celui-ci.
                                La somme indiquée ci-dessus sera payée par virement, dans les trois jours de la réception de la facture, droits et taxes éventuels en sus.
                                <br></br>
                                Article 2 – Durée
                                Ce contrat est passé pour la durée nécessaire à l’approvisionnement du véhicule désigné au premier paragraphe du préambule.
                                Il prendra effet le jour de sa signature et arrivera à son terme le jour de la livraison au Client du véhicule.
                                Toutes les obligations du Prestataire au titre du présent contrat se termineront à l’instant même de la remise au Client du véhicule et de ses clés.
                                <br></br>
                                Article 3 - Exécution de la prestation
                                Le Prestataire s'engage à mener à bien la tâche précisée à l'Article premier, conformément aux règles de l'art et de la meilleure manière.
                                <br></br>
                                Article 4 - Obligation de collaborer
                                Le Client tiendra à la disposition du Prestataire toutes les informations nécessaires pour contribuer à la bonne réalisation de l'objet du présent contrat. A cette fin, le Client remettra,
                                à la signature du contrat, la documentation suivante :
                                <br></br>
                                • une copie ou un scan de sa pièce d’identité en cours de validité.
                                <br></br>
                                • une copie ou un scan d’une facture (datant de moins de 3 mois) de consommation de l'Électricité et du Gaz correspondant à l’adresse exacte de son domicile.
                                <br></br>
                                • une copie ou un scan du relevé d’identité bancaire (RIB) avec l’adresse de la succursale bancaire où est domicilié son compte en Euros (€)
                                avec indication du BIC de la Banque et du numéro IBAN électronique de son compte.
                                <br></br>
                                La présentation des originaux de cette documentation sera exigée par le Prestataire au moment de la livraison du véhicule au Client ou à tout moment,
                                lorsque ces originaux pourront être exigés par l’administration.
                                <br></br>
                                Le Client s’engage à remettre au Prestataire tout document qui pourrait être demandé par l’administration afin de permettre l’achèvement de sa mission.
                                <br></br>
                                Si le Client ne fournit pas cette documentation, le Prestataire se trouve libéré de ses obligations tout en maintenant son droit à conserver le montant payé pour les prestations objet du contrat.
                                <br></br>
                                Article 5 - Nature des obligations
                                Pour l'accomplissement des prestations prévues à l'Article premier ci-dessus, le Prestataire s'engage à donner ses meilleurs soins,
                                conformément aux règles de l'art. La présente obligation, n'est, de convention expresse, que pure obligation de moyens.
                                <br></br>
                                Article 6 – Responsabilité du Prestataire
                                La responsabilité du Prestataire n'est pas engagée dans la mesure où le préjudice que subirait le Client n'est pas causé par une faute intentionnelle ou lourde des employés du Prestataire.
                                <br></br>
                                Article 7 – Calendrier. Délais
                                Comme indiqué à l’Article 5, le Prestataire n’est soumis à aucune obligation de résultats, en particulier, concernant les délais,
                                ceux-ci pouvant être affectés par des mouvements sociaux en Algérie ou ailleurs, par des conditions météorologiques défavorables ainsi que par toute Force Majeure,
                                comme précisée à l’Article 10, par toute difficulté ou tout retard dus à l’administration.
                                <br></br>
                                Tout changement de la Loi Algérienne, en particulier celui mettant fin à l’autorisation d’importation du véhicule désigné au premier paragraphe du préambule,
                                libèrera le Prestataire de toute obligation de délivrance des prestations, sans que le remboursement d’aucune des sommes perçues au titre du présent contrat ne soit du au Client.
                                <br></br>
                                Le délai prévisionnel d’approvisionnement du véhicule est estimé à environ 7 à 8 semaines à compter de la date de réception de la copie de l'ordre de transfert du
                                montant en Euros du prix d’achat du véhicule sur le compte du partenaire européen du Prestataire.
                                <br></br>
                                Article 8 - Obligation de confidentialité
                                Le Prestataire considèrera comme strictement confidentiel, et s'interdit de divulguer, toute information, document, donnée ou concept,
                                dont il pourra avoir connaissance à l'occasion du présent contrat. Pour l'application de la présente clause,
                                le Prestataire répond de ses salariés comme de lui-même. Le Prestataire, toutefois, ne saurait être tenu pour responsable d'aucune divulgation si les
                                éléments divulgués étaient dans le domaine public à la date de la divulgation, ou s'il en avait déjà connaissance antérieurement à la date de signature du présent contrat,
                                ou s'il les obtenait de tiers par des moyens légitimes.
                                <br></br>
                                Article 9 - Résiliation. Sanction
                                Tout manquement de l'une ou l'autre des parties aux obligations qu'elle a en charge, entraînera, si bon semble au créancier de l'obligation inexécutée,
                                la résiliation de plein droit au présent contrat, quinze jours après mise en demeure d'exécuter par lettre recommandée avec accusé de réception demeurée sans effet,
                                sans préjudice de tous dommages et intérêts.
                                <br></br>
                                Article 10 - Force majeure
                                On entend par force majeure des événements de guerre déclarés ou non déclarés, de grève de travail, de maladies épidémiques, de mise en quarantaine,
                                d'incendie, de conditions exceptionnelles de mer, de crues exceptionnelles, d'accidents ou d'autres événements indépendants de la volonté des deux parties.
                                Aucune des deux parties ne sera tenue responsable du retard constaté en raison des événements de force majeure.
                                En cas de force majeure, constatée par l'une des parties, celle-ci doit en informer l'autre partie, par écrit, dans les meilleurs délais.
                                L'autre partie disposera de dix jours pour la constater. Les délais prévus pour la livraison seront automatiquement décalés en fonction de la durée de la force majeure.
                                <br></br>
                                Article 11 - Loi applicable. Texte original
                                Le contrat est régi par la loi algérienne. Le texte en français du présent contrat fait foi comme texte original.
                                <br></br>
                                Article 12 - Compétence
                                Toutes contestations qui découlent du présent contrat ou qui s'y rapportent seront tranchées définitivement suivant le règlement de Conciliation et d'Arbitrage de la
                                Chambre de Commerce d’Alger sans aucun recours aux tribunaux ordinaires par un ou plusieurs arbitres nommés conformément à ce règlement et dont la sentence a un caractère obligatoire.
                                <br></br>
                                Le tribunal arbitral sera juge de sa propre compétence et de la validité de la convention d'arbitrage.
                                </Typography>
                        </Grid>
                        <Grid container spacing={1}
                            direction="row"
                        >
                            <Grid item xs={2}>
                                <TextField
                                    variant="outlined"
                                    fullWidth margin="normal"
                                    className={useStyles.TextField}
                                    type="date"
                                    placeholder="Date"
                                    name="date"
                                    onChange={this.handleChange} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}
                            direction="row"
                            justify="space-between"
                            alignItems="flex-end" >
                            <Grid item xs={4}>
                                <Typography color="textSecondary" display="inline" margin="normal" variant="body2" gutterBottom>
                                    Le Client
                            </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography color="textSecondary" display="inline" margin="normal" variant="body2" gutterBottom>
                                    Le Prestataire
                            </Typography>
                            </Grid>
                        </Grid>
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