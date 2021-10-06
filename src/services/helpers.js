import { Dimensions, Platform, PixelRatio, NativeModules, StatusBar, Alert } from "react-native";
import {getUniqueId, getAndroidId} from "react-native-device-info";
import i18n from "../services/i18next";

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 414;

export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export function generateGuessColor() {
    const colorsArray = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
    const numbersArray = [1, 2, 3, 4, 5, 6];
    return {
        colors: shuffle(colorsArray),
        numbers: shuffle(numbersArray),
        indexQuestions: [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)],
        correctAnswer: numbersArray[numbersArray.length - 1]
    }
}

export function getCurrentMemberType(members, device_id) {
    const member = members.find((value) => value.device_id === device_id);
    return member.type
}

export function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * lat1 / 180;
        let radlat2 = Math.PI * lat2 / 180;
        let theta = lon1 - lon2;
        let radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        // dist to kilometers
        dist = dist * 1.609344;
        // dist to meters
        dist = dist * 1000;
        return dist;
    }
}

export function newTakenElementMessage(name) {
    return {
        text: i18n.t('alerts.newTakenElement', {name: i18n.t(`words.${name}`)}),
        type: "info",
        duration: 4000
    }
}

export function _getDeviceId(){
    // return isAndroid ? getAndroidId() : getUniqueId()
    return getUniqueId()
}

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export function getInitLang (){
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;
    const splitLanguage = deviceLanguage.split("_")
    return splitLanguage[0] === "de" ? 'ge' : 'en'
}

export function isPortrait () {
    const dim = Dimensions.get('window');
    const res = dim.height >= dim.width;
    StatusBar.setHidden(!res);
    return res
};

export function myShuffle (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr[0] === 0 && arr[1] === 1 && arr[2] === 2 ? myShuffle(arr) : arr;
};

export function secondsToTime(time) {
    let hrs = ~~(time / 3600);
    let mins = ~~((time % 3600) / 60);
    let secs = ~~time % 60;

    let ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
}

export function errorAlert(title, message){
    Alert.alert(
      title,
      message,
    );
}
