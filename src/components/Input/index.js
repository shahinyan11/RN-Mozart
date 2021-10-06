import React, {Component} from "react";
import {View, Text, TextInput} from "react-native";
import {styles} from './styles';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            showError: false,
            errorMessage: ''
        }
    }

    handleChange =(value)=>{
        const {pattern, _onValidation, _handleChange} = this.props;

        const condition = new RegExp(pattern?.rule, 'g');

        const isValid = !pattern || condition.test(value);

        const errorMessage = isValid ? '' : pattern.errorMessage;

        this.setState({errorMessage});

        _handleChange && _handleChange(value);
        _onValidation && _onValidation(isValid)
    };

    onSubmit =()=>{
        const {_onSubmitEditing} = this.props;
       _onSubmitEditing && _onSubmitEditing();
    };


    render() {
        const {...props} = this.props;
        const {errorMessage, showError} = this.state;
        return (
            <View>
                <TextInput
                    {...props}
                    style={styles.input}
                    onSubmitEditing={this.onSubmit}
                    onChangeText={this.handleChange}
                    onBlur={()=>{ this.setState({showError: true}) }}
                    onFocus={()=>{ this.setState({showError: false}) }}
                />

                <Text style={styles.errorMessage}>{showError ? errorMessage : ''}</Text>
            </View>

        );
    }
}

export default Input;
