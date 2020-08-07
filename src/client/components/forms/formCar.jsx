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
              // onSubmit={this.onSubmitHandler.bind(this)}
              // action='http://localhost:9000/formCar'
              value="submit"
              method="post"
            >
              <div>
                <label type="text" name="first Registration">
                  Voiture choisie dans le catalogue IV3A
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
              <div>
                <label type="text" name="first Registration">
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
              <div>
                <label type="text" className="text-left" name="first Registration">
                  Genre
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
              <div>
                <label type="text" name="first Registration">
                  Marque
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
              <div>
                <label type="text" name="first Registration">
                  Type
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
              <div>
                <label type="text" name="first Registration">
                  Nº dans la serie du type
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
              <div>
                <label type="text" name="first Registration">
                  Modèle
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
              <div>
                <label type="text" name="first Registration">
                  Carrosserie
                </label>
                <input
                  className="mb-3 mt-3"
                  type="text"
                  name="body"
                  placeholder="Carrosserie"
                  value={model}
                  onChange={this.changeHandler}
                />
              </div>
              <div>
                <label type="text" name="first Registration">
                  Energie
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
              <div>
                <label type="text" name="first Registration">
                  Puissance
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
              <div>
                <label type="text" name="first Registration">
                  Places assises
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
              <div>
                <label type="text" name="first Registration">
                  Poids total en charge
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
              <div>
                <label type="text" name="first Registration">
                  MMA
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
              <div>
                <label type="text" name="first Registration">
                  Charge utile
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
              <div>
                <label type="text" name="first Registration">
                  Tara
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
              <div>
                <label type="text" name="first Registration">
                  Precedent numero
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
              <div>
                <label type="text" name="first Registration">
                  Premiere mise en circulation
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
              <div>
                <label type="text" name="first Registration">
                  Date de fabrication
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(FormCar);
