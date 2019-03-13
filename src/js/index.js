// import _ from 'lodash';
import '../scss/style.scss';
import Data from '../../data/data.xml';
import printMe from './print.js';
import { cube } from './utils/math';

if( process.env.NODE_ENV !== 'production' ) 
    console.log('Looks like we are in development mode!');

const component = () => {
    let element = document.createElement('div');
    let button = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work.
    //element.innerHTML = _.join(['Hello', 'webpack']);
    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    element.classList.add('hello');

    button.innerHTML = 'Click me!';
    button.onclick = printMe;

    console.log(Data);

    element.appendChild(button);

    return element;
}

document.body.appendChild( component() );