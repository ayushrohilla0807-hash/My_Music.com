import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

const reactelement  = React.createElement(
    'a',{
        href:'https://google.com',target:'_blank'},
        'click me to visit '
    
)

createRoot(document.getElementById('root')).render(
  
    reactelement

 
)
