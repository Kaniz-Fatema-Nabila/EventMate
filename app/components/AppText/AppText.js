import React from 'react';
import {Text} from 'react-native';
import styles from './Styles';

function AppText({children, style}){
    return(
        <Text style= {[styles.text, style]}>{children} </Text>
    );
}

export default AppText;