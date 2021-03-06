import { Provider } from "react-redux";
import { store } from "../state";
import RepositioriesList from "./RepositoriesList";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello</h1>
        <RepositioriesList />
      </div>
    </Provider>
  );
};

export default App;
