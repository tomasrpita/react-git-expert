import React from 'react'
import ReactDom from 'react-dom/client'

import { GifExpertApp } from './GifExpertApp'

import './styles.css'

// render(<GifExpertApp />, document.getElementById('app'))

ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
)