import React from "react";
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul>
        <NavigationItem link="/" active>Burger Buidler</NavigationItem>
        <NavigationItem link="/" active>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;