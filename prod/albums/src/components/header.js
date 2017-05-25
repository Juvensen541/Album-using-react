

/// import libraies for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = () => {
   const { textStyle, viewStyle } = styles;
    
    return (
    <View style={viewStyle}>  
        <Text style={textStyle}>Albums!</Text>
    </View>
    );
};  

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }, // how tall or wide to make shadow
        shadowOpacity: 0.9, // how dark shadow is (ranges fomr 0-1)
        elevation: 2,
        position: 'relative'

},
textStyle: {
    fontSize: 20
    }
};

// make the compont availbale to other parts of the app

export default Header; 
