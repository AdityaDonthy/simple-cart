import React, { Component } from 'react'
import { ProgressPlugin } from 'webpack'
import {FiShoppingCart} from 'react-icons/fi'
import CartCSS from './Cart.module.css'

interface Props{
}

interface State{
    isOpen: boolean;
}

export default class Cart extends Component<ProgressPlugin, State>{

    state = {
        isOpen: false
    }

    //e.target => The element on which the event occurs
    //e.currentTarget => The element where the event hanler is attached to
    // So below 'currentTarget' is always the Button element 
    // but the 'target' can be either the Shopping Cart <svg> or the <span>
    toggleCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target)
        console.log(e.currentTarget)
        if(e.currentTarget as HTMLSpanElement) {
            console.log((e.currentTarget as HTMLSpanElement).innerHTML)
        }
        this.setState((prevState) => ({isOpen: !prevState.isOpen}))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button className={CartCSS.button} type="button" onClick={this.toggleCart}>
                    <FiShoppingCart /> 
                    <span>2 pizza(s)</span>
                </button>
                <div className={CartCSS.cartDropDown} style= {{display :this.state.isOpen ? 'block': 'none'}}>
                    <ul>
                        <li>Marinara</li>
                        <li>Napoletana</li>
                    </ul>
                </div>
            </div>
        )
    }
}
