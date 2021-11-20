import { ItemListContainer } from "./components/ListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/DetailContainer.js/ItemDetailContainer";
import { Home } from "./components/Home/Home";
import { CartProvider } from "./context/CartContext";
import { UIProvider } from "./context/UIContext";

import "bootstrap/dist/css/bootstrap.min.css";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { Checkout} from "./components/Checkout/Checkout";
import { Contacto } from "./components/Contacto/Contacto.js";

function App() {

  return (
    <>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>
            <div className="App">
              <NavBar />
            </div>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/productos">
                <ItemListContainer />
              </Route>
              <Route exact path="/productos/:categoriaId">
                <ItemListContainer />
              </Route>
              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>
              <Route exact path="/contacto">
                <Contacto/>
              </Route>
              <Route exact path="/cart">
                <CartScreen />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
