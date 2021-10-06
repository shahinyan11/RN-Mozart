import {Platform} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions'

const isAndroid = Platform.OS === 'android';

export default {
    location_in_use: isAndroid ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    microphone: isAndroid ? PERMISSIONS.ANDROID.RECORD_AUDIO : PERMISSIONS.IOS.MICROPHONE,
    file: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
}
