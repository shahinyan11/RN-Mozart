import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {createStyles} from './styles'

class Button extends Component {

    onPress =()=>{
        this.props.onPress()
    };

    render() {
        let {width, height, color, text} = this.props;
        const styles = createStyles(width, height, color);
        return (
            <TouchableOpacity style={styles.container} onPress={this.onPress}>
                <View style={styles.content}/>
                <View style={styles.textBox}>
                    <Text style={styles.text} > {text} </Text>
                </View>

            </TouchableOpacity>


        );
    }
}

export default Button
