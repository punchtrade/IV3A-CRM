import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, Link } from "react-router-dom";
import { Button, InputLabel, FilledInput } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikErrors,
  FormikProps
} from 'formik';

// interface Values {
//   email: string;
//   password: string;
// }

// class FormLogin extends Component {
  

//   handleButtonClick = () => {
//         axios.get("http://localhost:9000/login").then(response => {
//           console.log(response.data.users);
//           // console.log(response);
//         })
//   }
// render() {
//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         password: '',
//       }}
//       validate={values => {
//         const errors: Partial<Values> = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}

//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           setSubmitting(false);
//           alert(JSON.stringify(values, null, 2));
//         }, 500);
//       }}
//     >

//       {({ submitForm, isSubmitting }) => (
//         <Form>
//           <Field
//             component={TextField}
//             name="email"
//             type="email"
//             label="Email"
//           />
//           <br />
//           <Field
//             component={TextField}
//             type="password"
//             label="Password"
//             name="password"
//           />
//           {isSubmitting && <LinearProgress />}
//           <br />
//           <Button
//             variant="contained"
//             color="primary"
//             disabled={isSubmitting}
//             onClick={this.handleButtonClick.submitForm}
//           >
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
//       }
// }
// export default withRouter(FormLogin);


const styles = makeStyles((theme) => ({
  iconos: {
    cursor: 'pointer',
  },
  inputMaterial: {
    width: '100%'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token: "" ,
      message: "",
      open: false,
      redirect: localStorage.getItem("userTokenTime") ? true : false,
    };
  }

  setEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  

  signIn = () => {
    if (this.state.email === !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test) {
      this.setState({
        open: true,
        message: "Vous vous êtes connecté avec succès!"
      });
    } else {
      this.setState({
        open: true,
        message: "Identifiant ou mot de passe incorrect!"
      });
    }  if  (this.state.email === localStorage.getItem("userTokenTime")) {
      this.setState({
        open: true,
        messege: "El usuario no existe!!"
      })
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    this.props.history.push("/dashboard");
    await axios
      .get("http://localhost:9000/login", this.state, {
      })
      .then((response) => {
        return response;
      })
      // .then(response => {
      //   if(response.length>0){
      //     var respuesta=response[0];
      //     localStorage.getItem('email', respuesta.email, {path: "/dashboard"});
      //     alert('Bienvenido ${respuesta.firstName}');
      //     window.location.href="/dashboard";
      //   }else{
      //     alert('El usuario o la contraseña no son correctos');
      //    }
      // })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { id, email, password } = this.state;
    return (
      <Formik>
      <div>
        <ValidatorForm
          className={styles.root} validate autoComplete="on"
          onSubmit={this.onSubmitHandler.bind(this)}
          action="http://localhost:9000/login"
          value="submit"
          method="post"

        >
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Courrier électronique
              </InputLabel>
          <FilledInput
            variant="filled"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            name="email"
            type="email"
            placeholder="Courrier électronique"
            value={this.state.email}
            onChange={this.setEmail}
            validators={["required"]}
            errorMessages={["Ce champ est requis"]}
            required
          />
          <InputLabel
            htmlFor="filled-adornment-amount"
          >
            Mot de passe
              </InputLabel>
          <TextValidator
            variant="filled"
            fullWidth
            margin="normal"
            className={styles.inputMaterial}
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={this.state.password}
            onChange={this.setPassword}
            validators={["required"]}
            errorMessages={["Ce champ est requis"]}
            required
          />
          <Button
            className="btn btn-primary-green"
            type="submit"
            value="Submit"
            onClick={() => {
              this.signIn();
            }}
          >
            Connecter
          </Button>
          <br /><br />
         {/* {this.onSubmitHandler && <LinearProgress />}  */}
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">S'inscrire</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                D'accord
              </Button>
            </DialogActions>
          </Dialog>
        </ValidatorForm>
      </div>
      </Formik>
    );
  }
}

export default withRouter(FormLogin);
