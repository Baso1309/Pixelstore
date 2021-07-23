import React, { Component, useContext } from "react";
import { Route, Switch } from "react-router-dom";

import classes from "./App.module.css";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawerContext from "./store/sidedrawer-context/sidedrawer-context";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import HomePage from "./pages/HomePage/HomePage";
import CategoryShow from "./pages/CategoryShow/CategoryShow";
import ItemShow from "./pages/ItemShow/ItemShow";
import SignInPage from "./pages/SignInPage/SignInPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  const sideDrawerCtx = useContext(SideDrawerContext);

  return (
      <React.Fragment>
          
          <SideDrawer
              open={sideDrawerCtx.showSideDrawer}
              closed={sideDrawerCtx.onSideDrawerClosed} />
          <main className={classes.Content}>
            <Switch>
                <Route path="/categoryshow/:categoryid">
                    <Toolbar/>
                    <CategoryShow/>
                </Route>
                <Route path="/itemshow/:productid">
                    <Toolbar/>
                    <ItemShow/>
                </Route>
                <Route path="/login">
                    <Toolbar/>
                    <LogInPage/>
                </Route>
                <Route path="/signin">
                    <Toolbar/>
                    <SignInPage/>
                </Route>
                <Route path="/cart">
                    <Toolbar/>
                    <CartPage/>
                </Route>
                <Route path="/checkout">
                    <Toolbar/>
                    <CheckoutPage/>
                </Route>
                <Route path="/">
                    <Toolbar/>
                    <HomePage/>
                </Route>
            </Switch>
          </main>
      </React.Fragment>
  )
};

export default App;
