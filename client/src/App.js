import React, { Component } from 'react';
import Home from "./components/Home/Home";
import Products from "./containers/Products/Products";
import { Switch, Route } from "react-router-dom"
import { connect } from "react-redux";
//* import * as actionTypes from "./store/actions/actionTypes"
import * as actions from "./store/actions/authActions";
import './App.css';
import theme from "./theme";
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
//let width = window.innerWidth;
class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <div style={{
          height: "100%"
        }}>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ThemeProvider>
    )
  };
}

const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(actions.loadUser()),
    logOut: () => dispatch(actions.logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*{/*
import Items from "./components/list";
import Register from "./components/Register";
import Login from "./components/Login";
<Items />
        {this.props.isAuth ? <button style={{
          backgroundColor: "red",
          border: "3px solid black",
          color: "white",
          borderRadius: "5px"
        }} onClick={this.props.logOut}>LOGOUT</button> : <React.Fragment>
            <Register />
            <Login />
          </React.Fragment>} */