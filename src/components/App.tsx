import Main from '../pages/Main';
import Setting from '../types/Setting';


type AppProps = {
  settings: Setting;
};

export const App = ({settings}: AppProps) => (<Main settings = {settings}></Main>);
