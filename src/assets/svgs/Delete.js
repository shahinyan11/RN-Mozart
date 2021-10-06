import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const Delete = ({width, height, fill}) => {
    return (
        <Svg  height={height || 40}  width={width || 45} fill={fill || '#615f5d'} viewBox="0 0 428.235 428.235" xmlns="http://www.w3.org/2000/svg">
            <Path d="m388.088 53.529h-241.575c-12.089 0-23.419 5.358-31.091 14.728l-112.403 137.392c-4.025 4.927-4.025 12.01 0 16.937l112.417 137.404c7.658 9.357 18.989 14.715 31.077 14.715h241.575c22.138 0 40.147-18.009 40.147-40.147v-240.881c0-22.139-18.008-40.148-40.147-40.148zm-61.37 208.577-37.847 37.847-47.988-47.988-47.988 47.988-37.847-37.847 47.988-47.988-47.988-47.988 37.847-37.847 47.988 47.988 47.988-47.988 37.847 37.847-47.988 47.988c-.001 0 47.988 47.988 47.988 47.988z"/>
        </Svg>
    );
};

export {Delete}