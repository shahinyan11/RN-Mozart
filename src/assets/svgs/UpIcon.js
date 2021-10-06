import React, {Component} from 'react';
import Svg, {Path, G} from 'react-native-svg';
class UpIcon extends Component {
    render() {
        const {fill} = this.props
        return (
            <Svg width="25px" height="14px" viewBox="0 0 25 14">
                <G id="mozart" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <G id="mozARt-karte-collapsed" transform="translate(-195.000000, -839.000000)" fill={fill} fill-rule="nonzero">
                        <G id="Group-12" transform="translate(0.000000, 827.000000)">
                            <G id="np_back_860378_000000" transform="translate(207.500000, 19.000000) scale(1, -1) rotate(-90.000000) translate(-207.500000, -19.000000) translate(201.000000, 7.000000)">
                                <Path d="M2.957,11.75 L12.59275,2.11325 C13.041975,1.665 13.04295,0.9443 12.5986093,0.50095 C12.1523093,0.053675 11.4325843,0.05955 10.9863093,0.5068095 L0.55180925,10.9403095 L0.54595,10.9461688 C0.323295,11.1688237 0.21295,11.4588688 0.213918595,11.7488938 C0.2149015,12.0428438 0.3252525,12.3328688 0.54595,12.5535938 L0.55180925,12.559453 L10.9863093,22.992953 C11.4345593,23.442178 12.1552593,23.443153 12.5986093,22.9988125 C13.0458843,22.5525125 13.0400093,21.8327875 12.59275,21.3865125 L2.957,11.75 Z" id="Path"></Path>
                            </G>
                        </G>
                    </G>
                </G>
            </Svg>
        );
    }
}

export default UpIcon;