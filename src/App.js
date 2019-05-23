import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid,Row,Col} from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import LocationList from './Components/LocationList';
const cities=[
'Torreon,MX',
'Washington,us',
'Bogota,col',
'Madrid,es',
'Lima,pe',

];
const theme=createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
// es un objeto de tipo class component
class  App extends Component {
  handleSelectedLocation=city =>{
    console.log("handleSelectionLocation "+city);
  };
  render(){
    return (
      <Grid>
        <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant="title" color='inherit'>
                  Weather App
                </Typography>
                </Toolbar>
            </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation} />
          </Col>
          <Col xs={12} ms={6} lg={6}>
          <Paper>
          <div className="details">
            </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
