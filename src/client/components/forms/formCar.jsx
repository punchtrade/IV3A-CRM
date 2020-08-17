import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class FormCar extends Component {
  constructor() {
    super();
    this.state = {
      carCatalogue: "",
      carOrder: "",
      brand: "",
      model: "",
      fuel: "",
      serialNumber: "",
      type: "",
      typeSeries: "",
      body: "",
      energy: "",
      power: "",
      places: "",
      grossWeight: "",
      mma: "",
      payload: "",
      tara: "",
      previousNumber: "",
      firtsRegistration: "",
      dateManufacture: "",
      errors: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/car", this.state, {
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const {
      carCatalogue,
      carOrder,
      brand,
      model,
      fuel,
      serialNumber,
      description,
      type,
      typeSeries,
      body,
      energy,
      power,
      places,
      grossWeight,
      mma,
      payload,
      tara,
      previousNumber,
      firstRegistration,
      dateManufacture,
    } = this.state;
    return (
      <div>
        <h5 className="">Fiche Véhicule</h5>
        <div className="container">
          <div className="container-form">
            <form
              className="car-left"
              onSubmit={this.onSubmitHandler.bind(this)}
              action='http://localhost:9000/car'
              value="submit"
              method="post"
            >
              <div align="left">
                <label type="text" name="carCatalogue">
                  Voiture choisie dans le catalogue IV3A:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="carCatalogue"
                  placeholder="Voiture choisie dans le catalogue IV3A"
                  value={carCatalogue}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="carOrder">
                  Voiture object de la commande:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="carOrder"
                  placeholder="Voiture object de la commande"
                  value={carOrder}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="serialNumber">
                  Nº de serie (de fiche technique):
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="serialNumber"
                  placeholder="Nº de serie (de fiche technique)"
                  value={serialNumber}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" className="text-left" name="description">
                  Genre:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="description"
                  placeholder="Genre"
                  value={description}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="brand">
                  Marque:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="brand"
                  placeholder="Marque"
                  value={brand}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="fuel">
                  De l'essence:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="fuel"
                  placeholder="De l'essence"
                  value={fuel}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="type">
                  Type:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="type"
                  placeholder="Type"
                  value={type}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="typeSeries">
                  Nº dans la serie du type:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="typeSeries"
                  placeholder="Nº dans la serie du type"
                  value={typeSeries}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="model">
                  Modèle:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="model"
                  placeholder="Modèle"
                  value={model}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="body">
                  Carrosserie:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="body"
                  placeholder="Carrosserie"
                  value={body}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="energy">
                  Energie:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="energy"
                  placeholder="Energie"
                  value={energy}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="power">
                  Puissance:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="power"
                  placeholder="Puissance"
                  value={power}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="places">
                  Places assises:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="places"
                  placeholder="Places assises"
                  value={places}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="grossWeight">
                  Poids total en charge:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="grossWeight"
                  placeholder="Poids total en charge"
                  value={grossWeight}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="fmma">
                  MMA:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="mma"
                  placeholder="MMA"
                  value={mma}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="payload">
                  Charge utile:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="payload"
                  placeholder="Charge utile"
                  value={payload}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="tara">
                  Tara:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="tara"
                  placeholder="Tara"
                  value={tara}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="previousNumber">
                  Precedent numero:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="previousNumber"
                  placeholder="Precedent numero"
                  value={previousNumber}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="firstRegistration">
                  Premiere mise en circulation:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="firstRegistration"
                  placeholder="Premiere mise en circulation"
                  value={firstRegistration}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="dateManufacture">
                  Date de fabrication:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="dateManufacture"
                  placeholder="Date de fabrication"
                  value={dateManufacture}
                  onChange={this.changeHandler}
                />
              </div>
              <button
                className="btn btn-primary-green"
                type="submit"
                value="submit"
                onClick={this.onSubmitHandler.bind(this)}
              >
                Envoyer
          </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(FormCar);
