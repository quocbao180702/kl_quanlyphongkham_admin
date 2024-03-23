import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import client from './config/index.tsx'
import { AppRouter } from './router/index.tsx'
import AuthContextProvider from './provider/AuthContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
        <AuthContextProvider >
            <React.StrictMode>
                <AppRouter />
            </React.StrictMode>
        </AuthContextProvider>
    </ApolloProvider>
)
