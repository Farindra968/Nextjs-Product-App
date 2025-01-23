'use client';

import React from 'react'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from './store'
import { Provider as ReduxProvider } from "react-redux";


function Provider({children}) {
    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
                {children}
        </PersistGate>
      </ReduxProvider>
  )
}

export default Provider
