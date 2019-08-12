/*eslint-disable*/

import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';


const renderDom = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};
