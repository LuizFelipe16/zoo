import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import Landing from '../Pages/Landing';
import FormAnimal from '../Pages/FormAnimal';
import ListAnimals from '../Pages/ListAnimals';
import Wiki from '../Pages/Wiki';
import Animal from '../Pages/Animal';
import Alert from '../Pages/Alert';
import NotFound from '../Pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/zoo/wiki" component={Wiki} />

        <Route path="/zoo/formAnimal/:id" component={FormAnimal} />
        <Route path="/zoo/list" component={ListAnimals} />

        <Route path="/zoo/animal/:id" component={Animal} />

        <Route path="/zoo/alert" component={Alert} />
        <Route path="/zoo/not" component={NotFound} />

        <Redirect from="*" to="/zoo/not" />
      </Switch>
    </BrowserRouter>
  )
}