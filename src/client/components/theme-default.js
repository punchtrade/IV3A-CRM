import {createMuiTheme} from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

const red600 = red['600'];
const green900 = green['900'];

const themeDefault = createMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: red600
  },
  drawer: {
    width: 230,
    color: green900
  },
  Button: {
    primaryColor: red600,
  },

});




export default themeDefault;