import React from 'react';
import '../style/styles.scss';

const App = ({ Component, pageProps, router }) => {
    return <Component {...pageProps} key={router.key} />;
};

export default App;
