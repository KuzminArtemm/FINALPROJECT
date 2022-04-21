import { v4 as uuidv4 } from 'uuid';
import './styles/body.css'
import './styles/page.scss'
import { sum } from './utils';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const a = 100;
const b = 20


console.log(uuidv4())
console.log(sum(a, b))


const container = document.getElementById('root');
console.log({container})
const root = createRoot(container);
root.render(<App />);
