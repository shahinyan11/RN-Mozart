import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import NavigateButton from '../../components/NavigateButton';
import {makeAction} from '../../makeAction';
import WhiteSquareBackground from '../../components/WhiteSquareBackground';
import Header from '../../components/Header';
import i18n from '../../services/i18next';
import {styles} from './styles';
import data from '../../services/data';
import {colors} from '../../services/styles';
import RefreshView from "../../components/RefreshView";
import {normalize} from "../../services/helpers";

const {ratioHeight} = data.deviceSizes;

class Home extends Component {

    constructor(props) {
        super(props);
    }

    handlePress = (screen) => {
        this.props.navigation.navigate(screen);
    };

    render() {
        const {game} = this.props;
        return (
            <RefreshView>
                <View style={{flex: 1}}>
                    <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                     style={styles.backgroundImage}>
                        {/*{screenLoader ? <ScreenLoader/> : null}*/}

                        <View style={styles.topCol}>

                            <Header
                                textStyle={{fontSize: normalize(38)}}
                                showBackIcon={false}
                                text={i18n.t('screens.Home.mainTitle')}
                                navigation={this.props.navigation}
                            />

                            <Text style={styles.title}>
                                {i18n.t('screens.Home.title')}
                            </Text>
                            <WhiteSquareBackground>
                                <View style={styles.mozartBox}>
                                    <View style={styles.imgMozartContainer}>
                                        <Image style={styles.imgMozart}
                                               source={require('../../assets/images/mozart-dot.png')}/>
                                    </View>
                                    <View style={styles.titlesContainer}>
                                        <View style={styles.textBox}>
                                            <Text style={styles.text}>Begib dich auf</Text>
                                            <View style={styles.triangle}/>
                                        </View>
                                        <View style={styles.textBox}>
                                            <Text style={styles.text}>ein spannendes</Text>
                                            <View style={styles.triangle}/>
                                        </View>
                                        <View style={styles.textBox}>
                                            <Text style={styles.text}>Abenteuer quer</Text>
                                            <View style={styles.triangle}/>
                                        </View>
                                        <View style={[ styles.textBox, { marginLeft: -4}]}>
                                            <Text style={styles.text}>durch Salzburg</Text>
                                            <View style={styles.triangle}/>
                                        </View>
                                        <View style={[ styles.textBox, { marginLeft: -9}]}>
                                            <Text style={styles.text}>und finde mein</Text>
                                            <View style={styles.triangle}/>
                                        </View>
                                        <View style={[ styles.textBox, { marginLeft: -19}]}>
                                            <Text style={styles.text}>Vermächtnis!</Text>
                                            <View style={styles.triangle}/>
                                        </View>
                                    </View>
                                </View>
                            </WhiteSquareBackground>

                        </View>

                        <LinearGradient style={styles.bottomCol}
                                        colors={['rgba(36, 25, 32, 0.75)', '#241920']}
                                        useAngle={true}
                                        angle={315}
                        >
                            <NavigateButton
                                title={i18n.t('buttons.introduction_intro')}
                                onPress={() => {
                                    this.handlePress('Intro');
                                }}

                            />
                            <NavigateButton
                                title={i18n.t('buttons.starting_point')}
                                onPress={() => {
                                    this.handlePress('StartingPoint');
                                }}
                            />

                            <NavigateButton
                                title={i18n.t(`buttons.${game ? 'continue_game' : 'start_game'}`)}
                                onPress={() => {
                                    this.handlePress(game ? 'MainMenu' : 'StartGame');
                                }}
                                customStyles={{marginBottom: 0}}
                                color={colors.blue}
                            />
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </RefreshView>
        );
    }
}

const mapStateToProps = (state) => ({
    screenLoader: state.loaderReducer.screenLoader,
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
