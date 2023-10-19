import Main from '../pages/Main';
import SettingProps from '../props/SettingProps';


type AppProps = {
  settings: SettingProps;
};

export const App = ({settings}: AppProps) => (<Main settings = {settings}></Main>);
