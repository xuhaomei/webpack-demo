import _ from 'lodash';

function component () {
    let div = document.createElement('div');
    div.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return div;
}

document.body.appendChild(component());