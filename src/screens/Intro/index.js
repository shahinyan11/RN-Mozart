import React, {Component} from 'react'
import {Text, View, Image, ScrollView, ImageBackground} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles'
import NavigateButton from "../../components/NavigateButton";
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import i18n from "../../services/i18next";
import WhiteSquareBackground from "../../components/WhiteSquareBackground";
import Header from "../../components/Header";
import RefreshView from "../../components/RefreshView";

class Intro extends Component {

    constructor(props) {
        super(props);
    }

    handlePress = (screen) => {
        this.props.navigation.navigate(screen)
    };

    textStyling = (text) => {
        const textArr = text.split('|');
        return textArr.map((value, index) => {
            if (index === 1 || index === 3) {
                return (
                    <Text key={index} style={styles.roeTextBold}>
                        {value}
                    </Text>
                )
            } else {
                return value
            }
        })
    };

    render() {
        return (
            <RefreshView>
                <ImageBackground source={require('../../assets/images/mozartBlueBig.png')}
                                 style={styles.backgroundImage}>
                    <View style={styles.header}>
                        <Header
                            showBackIcon={true}
                            text={i18n.t('screens.Intro.mainTitle')}
                            navigation={this.props.navigation}
                        />
                    </View>

                    <View style={styles.col_1}>
                        <View>
                            <Text style={styles.text}>
                                {i18n.t('screens.Intro.text_1')}
                            </Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>
                                {i18n.t('screens.Intro.name')}
                            </Text>
                        </View>
                        <WhiteSquareBackground customStyle={styles.squareContain}>
                            <View style={styles.imgMozartContainer}>
                                <Image style={styles.imgMozart}
                                       source={require('../../assets/images/mozart1.png')}/>
                            </View>
                        </WhiteSquareBackground>
                    </View>
                    <LinearGradient
                        style={styles.col_2}
                        colors={["rgba(36, 25, 32, 0.75)", '#241920']}
                        useAngle={true}
                        angle={315}
                    >
                        <Text style={{...styles.text, ...styles.textBold}}>
                            {i18n.t('screens.Intro.text_2')}
                        </Text>
                    </LinearGradient>
                    <View style={styles.col_3}>
                        <View style={styles.signBox}>
                            <Image style={styles.imageSing} source={require('../../assets/images/group.png')}/>
                            <Image
                                style={styles.imageFreimaurer}
                                source={require('../../assets/images/freimaurer.png')}
                            />
                        </View>


                        <Text style={styles.text}>
                            {i18n.t('screens.Intro.text_3')}
                        </Text>
                    </View>
                    <View style={styles.col_4}>
                        <View style={styles.row}>
                            <Image style={styles.iconLeft} source={require('../../assets/images/np-time.png')}/>
                            <Text style={{...styles.text, textAlign: 'left', color: '#241920'}}>
                                {this.textStyling(i18n.t('screens.Intro.text_4'))}
                            </Text>
                        </View>
                        <View style={styles.centerBox}>
                            <Image style={styles.iconCenter}
                                   source={require('../../assets/images/group-5.png')}/>
                        </View>

                        <View style={styles.row}>
                            <Image style={styles.iconRight}
                                   source={require('../../assets/images/np-power.png')}/>
                            <Text style={{...styles.text, textAlign: 'right', color: '#241920'}}>
                                {this.textStyling(i18n.t('screens.Intro.text_5'))}
                            </Text>
                        </View>

                    </View>
                    <LinearGradient style={styles.col_5}
                                    colors={["rgba(36, 25, 32, 0.75)", '#241920']}
                                    useAngle={true}
                                    angle={300}
                    >
                        <Text style={styles.bottomText}>
                            {i18n.t('screens.Intro.text_6')}
                        </Text>

                        <NavigateButton
                            title="FINDE DEN STARTPUNKT"
                            onPress={() => {
                                this.handlePress('StartingPoint')
                            }}
                            color={'#39abd7'}
                        />
                    </LinearGradient>
                </ImageBackground>
            </RefreshView>
        );
    }
}

const mapStateToProps = (state) => ({
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intro)
