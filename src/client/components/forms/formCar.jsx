import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class FormCar extends Component {
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
            errors: '',
            i_agree: false
        }
    }
}

export default FormCar;