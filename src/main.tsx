import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ApolloProvider } from '@apollo/client'
import client from './config/index.tsx'
import { AppRouter } from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <AppRouter />
        </ApolloProvider>
    </React.StrictMode>,
)
