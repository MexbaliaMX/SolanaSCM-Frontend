import React, { useState } from 'react';
import English from './../../locales/en.json';
import Spanish from './../../locales/es.json';
import { IntlProvider } from 'react-intl';

export const Context = React.createContext();

const locales = {
    'en': English,
    'es': Spanish
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState('es');

    const [messages, setMessages] = useState(locales['es']);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        setMessages(locales[newLocale]);
    }

    return (
        <Context.Provider value={{ locale, selectLanguage }}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}

export default Wrapper;


