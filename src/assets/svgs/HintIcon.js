import React, {Component} from 'react';
import Svg, {Path, G} from 'react-native-svg';

const HintIcon = ({width, height, fill}) => {
    return (
        <Svg width={width ? width : 43} height={height ? height : 44}  viewBox="0 0 53 52">
            <G fill="none" fill-rule="evenodd">
                <G fill={fill || "#FFF"} fill-rule="nonzero">
                    <G>
                        <G>
                            <Path d="M26 11c-7.999 0-14.5 6.424-14.5 14.317 0 3.564 1.339 6.967 3.77 9.614L18.39 42h15.217l3.124-7.07c2.432-2.644 3.769-6.048 3.769-9.613C40.496 17.423 33.994 11 26 11zm-3.202 16.732c-1.17 0-2.121-.94-2.121-2.095 0-1.157.951-2.1 2.121-2.1s2.121.94 2.121 2.1c0 1.153-.951 2.095-2.121 2.095zm11.662 5.44l-.174.18-2.565 5.811h-4.647v-9.879c.629.357 1.35.58 2.126.58 2.36 0 4.278-1.896 4.278-4.225 0-2.333-1.92-4.228-4.278-4.228-1.28 0-2.42.568-3.202 1.45-.787-.882-1.925-1.45-3.202-1.45-2.36 0-4.279 1.897-4.279 4.228 0 2.331 1.92 4.226 4.279 4.226.776 0 1.493-.221 2.121-.58v9.878h-4.646l-2.562-5.813-.169-.178c-2.043-2.141-3.162-4.93-3.162-7.85 0-6.33 5.212-11.48 11.622-11.48 6.408 0 11.622 5.152 11.622 11.48 0 2.92-1.123 5.709-3.162 7.85zm-7.381-7.535c0-1.157.953-2.1 2.125-2.1 1.172 0 2.121.94 2.121 2.1 0 1.155-.951 2.095-2.121 2.095s-2.125-.942-2.125-2.095zM18.5 47.589c0 2.434 1.83 4.411 4.092 4.411h6.816c2.26 0 4.092-1.974 4.092-4.411L33.498 44H18.5l.002 3.589H18.5zM27 8c.827 0 1.5-.673 1.5-1.502V1.5C28.5.673 27.827 0 27 0c-.832 0-1.5.673-1.5 1.5v4.998C25.5 7.329 26.168 8 27 8zM12.757 12.53c.314.314.723.47 1.134.47.413 0 .824-.156 1.138-.47.628-.629.628-1.642 0-2.27L11.24 6.47c-.628-.628-1.642-.628-2.27 0-.628.629-.628 1.645 0 2.273l3.786 3.786zM6.996 24.002L2 24C1.17 24 .5 24.672.5 25.501.5 26.328 1.168 27 2 27h4.996c.831 0 1.504-.67 1.504-1.499 0-.829-.675-1.499-1.504-1.499zM39.107 13c.41 0 .824-.156 1.138-.47l3.784-3.786c.628-.628.628-1.644 0-2.273-.628-.628-1.646-.628-2.271 0L37.97 10.26c-.628.629-.628 1.642 0 2.27.314.315.725.471 1.136.471zM51 24l-5 .002c-.827 0-1.5.67-1.5 1.5 0 .828.673 1.498 1.5 1.498h5c.827 0 1.5-.672 1.5-1.499 0-.829-.67-1.501-1.5-1.501z" transform="translate(-315 -755) translate(280 755) translate(35)"/>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    );
};

export {HintIcon};