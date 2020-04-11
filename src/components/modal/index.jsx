import React, {Component} from 'react';
import { createPortal } from 'react-dom';
import Modal from './modal';

export default class ModalWrapper extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
        document.body.append(this.element);
    }
    componentWillUnmount() {
        this.element.remove();
    }
    render() {
        return (
            createPortal(
                <Modal />,
                this.element
            )
        );
    }
}

