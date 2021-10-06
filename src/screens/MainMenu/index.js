import React, {Component} from 'react'
import {Text, View, ImageBackground, ScrollView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import data from "../../services/data";
import {colors} from "../../services/styles";
import SquareNavigateButton from "../../components/SquareNavigateButton";
import Member from "../../components/Member";
import {styles} from './styles';
import {makeAction} from "../../makeAction";
import {connect} from "react-redux";
import i18n from "../../services/i18next"
import "moment-duration-format";
import WhiteSquareBackground from "../../components/WhiteSquareBackground";
import Header from "../../components/Header";
import RefreshView from "../../components/RefreshView";
import {normalize} from "../../services/helpers";

const {ratioWidth, ratioHeight} = data.deviceSizes;

class MainMenu extends Component {

    constructor(props){
        super(props);

        this._unsubscribe = ()=>{};
    }

    componentDidMount(){
        const {navigation} = this.props;
        this._unsubscribe = navigation.addListener('blur', () => {
            navigation.setParams({firstTime: false});
        })
    }

    componentWillUnmount() {
        this._unsubscribe()
    }

    _navigate = (screen, type) => {
        this.props.navigation.navigate(screen, {type});
    };

    render() {
        const {squareNavigateButtons} = data;
        const firstTime = this.props.route.params?.firstTime;
        const markedScreenId = firstTime ? 2 : 1;
        let control = 0;
        const {game} = this.props;

        return (
            <RefreshView>
                <View style={{flex: 1}}>
                    <ImageBackground source={require('../../assets/images/mozartBlue.png')}
                                     style={styles.backgroundImage}>
                        <View style={styles.topCol}>

                            <Header
                                textStyle={{fontSize: normalize(38), maxWidth: ratioWidth * 330,}}
                                customStyle={{marginBottom: 15}}
                                showBackIcon={true}
                                text={i18n.t('screens.MainMenu.title')}
                                navigation={this.props.navigation}
                            />

                            <WhiteSquareBackground customStyle={{
                                bottom: ratioWidth * -139,
                                height: ratioWidth * 347
                            }}>
                                {
                                    game ?
                                        <>
                                            <Text style={styles.contentTitle}>
                                                {i18n.t('screens.MainMenu.text_1')}
                                            </Text>
                                            <View style={styles.members}>
                                                <View
                                                    style={{...styles.memberBox, ...(game.game_members.length > 4 ? {flexWrap: 'wrap'} : {})}}
                                                >
                                                    {
                                                        game.game_members.map((value) => (
                                                            <Member key={value.id} name={value.name}/>
                                                        ))
                                                    }
                                                </View>
                                            </View>
                                        </>
                                        : null
                                }
                            </WhiteSquareBackground>
                        </View>
                        <LinearGradient style={styles.bottomCol}
                                        colors={["rgba(36, 25, 32, 0.75)", '#241920']}
                                        useAngle={true}
                                        angle={315}
                        >
                            <View style={styles.titleBox}>
                                <View style={styles.titleView}>
                                    <Text style={styles.bottomTitle}>
                                        {i18n.t('screens.MainMenu.text_2')}
                                    </Text>
                                </View>
                                {
                                    firstTime ?
                                        <View style={{alignItems: 'center'}}>
                                            <View style={styles.tailTriangle}/>
                                            <View style={styles.triangle}/>
                                        </View>
                                        :null
                                }

                            </View>


                            <View style={styles.bottomContent}>
                                {
                                    squareNavigateButtons.map((value) => {
                                        control += 1;
                                        return (
                                            <SquareNavigateButton
                                                key={value.id}
                                                data={value}
                                                marked={value.id === markedScreenId}
                                                color={control > 3 ? colors.blue : colors.orange}
                                                onPress={() => {
                                                    this._navigate(value.routName, value.type)
                                                }}
                                                textStyle={{
                                                    color: "white"
                                                }}
                                            />
                                        )

                                    })
                                }
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </RefreshView>

        );
    }
}

const mapStateToProps = (state) => ({
    game: state.gameReducer.game,
    oriented: state.screenReducer.oriented,
    language: state.mainReducer.language,
});

const mapDispatchToProps = {
    makeAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu);
