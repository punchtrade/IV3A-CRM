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
      id,
      card,
      brandId,
      modelId,
      fuelId,
      carCatalogue,
      price1,
      carOrder,
      price2,
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
                <label type="text" name="id">
                  Client:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="id"
                  placeholder="Client"
                  value={id}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="card">
              Document National d'Identité:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="card"
                  placeholder="Document National d'Identité"
                  value={card}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="brandId">
                Marque:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="brandId"
                  placeholder="Marque"
                  value={brandId}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="modelId">
                Modèle:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="modelId"
                  placeholder="Modèle"
                  value={modelId}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="fuelId">
                Combustible:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="fuelId"
                  placeholder="Combustible"
                  value={fuelId}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="carCatalogue">
                  Voiture choisie dans le catalogue IV3A
                  (Immatriculation de la voiture):
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="carCatalogue"
                  placeholder="Immatriculation de la voiture"
                  value={carCatalogue}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="carCatalogue">
                  Prix (voiture choisie dans le catalogue IV3A):
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="price1"
                  placeholder="Voiture choisie dans le catalogue IV3A"
                  value={price1}
                  onChange={this.changeHandler}
                />
              </div>
              <div  className="line"></div>
              <div align="left">
                <label type="text" name="carOrder">
                  Voiture object de la commande (Immatriculation de la voiture):
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="carOrder"
                  placeholder="Immatriculation de la voiture"
                  value={carOrder}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="carOrder">
                  Prix (Voiture object de la commande):
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="price2"
                  placeholder="Voiture object de la commande"
                  value={price2}
                  onChange={this.changeHandler}
                />
              </div>
              <div  className="line">
              </div>
              <div align="left">
                <label type="text" name="serialNumber">
                  Nº de chassis:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="serialNumber"
                  placeholder=" Nº de chassis"
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
                  Combustible (diesel ou essence):
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="fuel"
                  placeholder="Combustible"
                  value={fuel}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="type">
                  ¿TYPE?:
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
                  ¿Nº DANS LA SERIE DU TYPE?:
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
                  ¿Energie?:
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
                  Précédent numéro:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="previousNumber"
                  placeholder="Précédent numéro"
                  value={previousNumber}
                  onChange={this.changeHandler}
                />
              </div>
              <div align="left">
                <label type="text" name="firstRegistration">
                  Première mise en circulation:
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="firstRegistration"
                  placeholder="Première mise en circulation"
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
          <button
            className="btn btn-primary-green left"
            type="submit"
            value="submit"
            onClick={() => {
              this.props.history.replace("/dashboard");
            }}
          >
            Panel
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(FormCar);
