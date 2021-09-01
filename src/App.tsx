import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";

import { BaseStep } from './PizzaOrder/BaseStep';
import { CheeseStep } from './PizzaOrder/CheeseStep';
import { CrustStep } from './PizzaOrder/CrustStep';
import { SauceStep } from './PizzaOrder/SauceStep';
import { Result } from "./PizzaOrder/Result";

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/">
                    <Redirect to="/pizza-order/base-step" />
                </Route>
                <Route path="/pizza-order/base-step" component={BaseStep} />
                <Route path="/pizza-order/crust-step" component={CrustStep} />
                <Route path="/pizza-order/cheese-step" component={CheeseStep} />
                <Route path="/pizza-order/sauce-step" component={SauceStep} />
                <Route path="/pizza-order/result" component={Result} />
            </Router>
        </Provider>
    )
}