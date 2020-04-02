import React from 'react';
import ReactDOM from 'react-dom'

//!No required props, just wrap what goes in a portal with <Portal> 

let portalRoot = document.getElementById('portal-root');
if (!portalRoot) {
    portalRoot = document.createElement('div')
    portalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(portalRoot)
}

class Portal extends React.Component {
    constructor(props){
        super(props);
        this.element = document.createElement('div');
    }

    componentDidMount() {
        portalRoot.appendChild(this.element)
    }

    componentWillUnmount() {
        portalRoot.removeChild(this.element)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.element,
        );
    }
}

export default Portal;