import Main from '../pages/импорты, леат';
import Setting from '../types/Setting';


type AppProps = {
  settings: Setting;
};

export const App = ({settings}: AppProps) => (<Main settings = {settings}></Main>);
