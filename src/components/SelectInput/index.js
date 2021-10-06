import React, {Component} from 'react';
import {View,Text} from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import {createStyles} from './styles'
import DownIcon from "../../assets/svgs/DownIcon";

class SelectInput extends Component {

    render() {
        const {selectedKey, onChange, label, items, contentStyle, width, height, color, placeholder} = this.props;
        const {styles, pickerStyle} = createStyles(width || 390, height || 49, color || '#ffffff');
        return (
            <View style={{...styles.content, ...contentStyle}}>
                <View style={{...styles.square, left: 0, top: 0}}/>
                <View style={{...styles.square, right: 0, top: 0}}/>
                <View style={{...styles.square, left: 0, bottom: 0}}/>
                <View style={{...styles.square, right: 0, bottom: 0}}/>

                <Text style={styles.label}>
                    {label}
                </Text>
                <View style={{flex:1}}>
                    <RNPickerSelect
                        placeholder={placeholder}
                        onValueChange={onChange}
                        itemKey={selectedKey}
                        useNativeAndroidPickerStyle={false}
                        style={pickerStyle}
                        Icon={() => (<DownIcon fill={'#39abd7'}/>)}
                        items={items}
                    />
                </View>
            </View>
        );
    }
}

export default SelectInput
