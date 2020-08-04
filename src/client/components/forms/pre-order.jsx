import React, { Component } from 'react';
import '../../styles/pre-order.scss';



class PreOrder extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            card:'',
            treatment: '',
            firstName: '',
            lastName: '',
            telephone: '',
            email: '',
            address: '',
            city: '',
            state: '',
            postalCode: '',
            nameOfBank: '',
            numberOfBank: '',
            accountName: '',
            iban: '',
            swiftCode: '',
            registrationCar: '',
            brand: '',
            model: '',
            fuel: '',
            errors: ''
        }
    }
    render() {
        const { id, card, treatment, firstName, lastName, 
            telephone, email, address, city, state, postalCode, 
            nameOfBank, numberOfBank, accountName, iban, 
            swiftCode, registrationCar, brand, model, fuel} = this.state
        return (
            <div><h5>Pré-Commande de Véhicule</h5>
                <div className="container">
                    <div id="left" type="text">
                        <br></br>
                        Vous souhaitez profiter des nouvelles dispositions de l'Article 110 de la Loi de Finances pour 2020 qui vous autorise à acheter, 
                        une fois tous les 3 ans, à l'Étranger, depuis votre compte en Devises, à Titre Personnel, un Véhicule Particulier de moins de 3 ans.
                        <br></br>
                        1. Vous avez identifié le véhicule que vous souhaiteriez acheter sur notre site web www.iv3a.com.
                        <br></br>
                        2. Vous devez maintenant renseigner intégralement le formulaire ci-dessous en y indiquant la totalité des données personnelles requises pour une pré-commande.
                        <br></br>
                        3. Merci d'y reporter également les références, soit l'immatriculation, la valeur catalogue (1), la marque, le modèle et le combustible du véhicule que vous avez choisi.
                        <br></br>
                        (1) Valeur catalogue IV3A = prix d'achat non négociable net (de tous frais de transferts bancaires à votre charge) du véhicule, paiment 100% à la commande, à notre partenaire européen, 
                        par virement bancaire depuis votre compte en Euros.
                        <br></br>
                        Vous devez prévoir les coûts additionnels de transport, douanes (15%), TVA (19%), immatriculation et coût de nos services d'accompagnement en Algérie.
                        <br></br>
                        Si le véhicule choisi est toujours disponible, IV3A vous confirmera alors votre commande.
                        <br></br>
                        Au cas où le véhicule choisi aurait déjà été vendu (la demande est importante et nous actualisons notre catalogue chaques 24 heures), 
                        IV3A lancera alors la recherche d'un véhicule similaire à celui que vous souhaitez acquérir, et vous fera une offre dans les 24 heures.
                    </div>

                    <div id="right" type="text">
                        <br></br>
                        Vous souhaitez profiter des nouvelles dispositions de l'Article 110 de la Loi de Finances pour 2020 qui vous autorise à acheter, 
                        une fois tous les 3 ans, à l'Étranger, depuis votre compte en Devises, à Titre Personnel, un Véhicule Particulier de moins de 3 ans.
                        <br></br>
                        1. Vous avez identifié le véhicule que vous souhaiteriez acheter sur notre site web www.iv3a.com.
                        <br></br>
                        2. Vous devez maintenant renseigner intégralement le formulaire ci-dessous en y indiquant la totalité des données personnelles requises pour une pré-commande.
                        <br></br>
                        3. Merci d'y reporter également les références, soit l'immatriculation, la valeur catalogue (1), la marque, le modèle et le combustible du véhicule que vous avez choisi.
                        <br></br>
                        (1) Valeur catalogue IV3A = prix d'achat non négociable net (de tous frais de transferts bancaires à votre charge) du véhicule, paiment 100% à la commande, à notre partenaire européen, 
                        par virement bancaire depuis votre compte en Euros.
                        <br></br>
                        Vous devez prévoir les coûts additionnels de transport, douanes (15%), TVA (19%), immatriculation et coût de nos services d'accompagnement en Algérie.
                        <br></br>
                        Si le véhicule choisi est toujours disponible, IV3A vous confirmera alors votre commande.
                        <br></br>
                        Au cas où le véhicule choisi aurait déjà été vendu (la demande est importante et nous actualisons notre catalogue chaques 24 heures), 
                        IV3A lancera alors la recherche d'un véhicule similaire à celui que vous souhaitez acquérir, et vous fera une offre dans les 24 heures.
                    </div>
                </div>
        <div className="container-form">
            <form className="client-car-left" id="client-car-left">
                <div className="left-column">
                    <input
                    className="mb-3 mt-3"
                    type="text"
                    name="id"
                    placeholder="Nº"
                    value={id}
                    onChange={this.changeHandler}
                />   
                </div>
                <div className="left-column">
                    <input
                    className="mb-3 mt-3"
                    type="text"
                    name="card"
                    placeholder="Document National d’Idenité - DNI No: IDDZA"
                    value={card}
                    onChange={this.changeHandler}
                />
                </div> 
                    <div className="left-column">
                    <input
                        className="mb-3 mt-3"
                        type="text"
                        name="treatment"
                        placeholder="Traitment"
                        value={treatment}
                        onChange={this.changeHandler}
                    />   
                    </div> 
                    <div className="left-column">
                        <input
                        className="mb-3 mt-3"
                        type="text"
                        name="firstName"
                        placeholder="Nom"
                        value={firstName}
                        onChange={this.changeHandler}
                    />   
                    </div> 
                        <div className="left-column">
                        <input
                        className="mb-3 mt-3"
                        type="text"
                        name="lastName"
                        placeholder="Prénom"
                        value={lastName}
                        onChange={this.changeHandler}
                    />   
                    </div> 
                    <div className="left-column"> 
                        <input
                            className="mb-3 mt-3"
                            type="text"
                            name="telephone"
                            placeholder="Téléphone"
                            value={telephone}
                            onChange={this.changeHandler}
                        />   
                        </div> 
                        <div className="left-column">
                        <input
                            className="mb-3 mt-3"
                            type="text"
                            name="email"
                            placeholder="Courrier électronique"
                            value={email}
                            onChange={this.changeHandler}
                        />   
                        </div> 
                        <div className="details-car" id="details-car">
                            <h6>Référence du véhicule choisi sur www.iv3a.com
                                <br></br>
                                <br></br>
                            </h6>
                        <div className="mb-3 mt-3">
                            <input
                            className="left-column"
                                type="text"
                                name="registrationCar"
                                placeholder="Matricule"
                                value={registrationCar}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input
                            className="left-column"
                                type="text"
                                name="brand"
                                placeholder="Marque"
                                value={brand}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input
                            className="left-column"
                                type="text"
                                name="model"
                                placeholder="Modèle"
                                value={model}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input
                            className="left-column"
                                type="text"
                                name="fuel"
                                placeholder="Combustible"
                                value={fuel}
                                onChange={this.changeHandler}
                            />
                        </div>
                        </div>
                        
                </form>
                        <form className="client-car-right" id="client-car-right">
                            <div className="right-column">
                                <input
                                    className="mb-3 mt-3"
                                    type="text"
                                    name="address"
                                    placeholder="Allée/Rue/Avenue"
                                    value={address}
                                    onChange={this.changeHandler}
                                />   
                                </div> 
                            <div className="right-column">
                                <input
                                    className="mb-3 mt-3"
                                    type="text"
                                    name="city"
                                    placeholder="Ville"
                                    value={city}
                                    onChange={this.changeHandler}
                                />   
                            </div> 
                            <div className="right-column">
                                <input
                                    className="mb-3 mt-3"
                                    type="text"
                                    name="state"
                                    placeholder="Wilaya"
                                    value={state}
                                    onChange={this.changeHandler}
                                />   
                            </div> 
                            <div className="right-column">
                                <input
                                    className="mb-3 mt-3"
                                    type="text"
                                    name="postalCode"
                                    placeholder="Code Postal"
                                    value={postalCode}
                                    onChange={this.changeHandler}
                                />   
                            </div> 
                            <div className="details-bank" id="details-bank">
                                <h6>Vos Coordonnées Bancaires 
                                    <br></br>
                                    <br></br>
                                </h6>
                        <div className="left-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="nameOfBank"
                              placeholder="Nom de la Banque"
                              value={nameOfBank}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="left-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="numberOfBank"
                              placeholder="Nº de compte"
                              value={numberOfBank}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="left-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="accountName"
                              placeholder="Intitulé du compte:"
                              value={accountName}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="left-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="iban"
                              placeholder="IBAN:"
                              value={iban}
                              onChange={this.changeHandler}
                          />   
                        </div> 
                        <div className="left-column">
                            <input
                              className="mb-3 mt-3"
                              type="text"
                              name="swiftCode"
                              placeholder="Swift BIC Code:"
                              value={swiftCode}
                              onChange={this.changeHandler}
                          />   
                        </div>
                        </div>
                </form>
                {/* <button className="btn btn-primary-green" type="submit" value="submit" onClick="">Envoyer</button> */}
            </div>       
        </div>
        )
    }

}


export default PreOrder;