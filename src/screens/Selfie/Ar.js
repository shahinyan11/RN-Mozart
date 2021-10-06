import React, {useState, useEffect} from 'react';
import {
    Viro3DObject,
    ViroAmbientLight,
    ViroDirectionalLight,
    ViroARScene,
    ViroCamera,
} from '@viro-community/react-viro';


const Ar = () => {

    let obj = null;

    const [rotation, setRotation] = useState([0, 0, 0]);
    const [scale, setScale] = useState([0.01, 0.01, 0.01]);
    const [position, setPosition] = useState([0, -0.5, -1]);
    const [cameraBugFix, setCameraBugFix] = useState(false);


    useEffect(() => {
        setCameraBugFix(true)
    });

    const _onRotate = (rotateState, rotationFactor) => {
        const newRotation = [rotation[0], rotation[1] + rotationFactor, rotation[2]];
        obj.setNativeProps({rotation: newRotation});

        if (rotateState === 3) {
            setRotation(newRotation);
        }
    };

    const _onPinch = async (pinchState, scaleFactor) => {
        const newScale = [scale[0] * scaleFactor, scale[1] * scaleFactor, scale[2] * scaleFactor];
        obj.setNativeProps({scale: newScale});


        if (pinchState === 3) {
            setScale(newScale);
        }
    };


    return (
        <ViroARScene>
            <ViroDirectionalLight color="#ffffff" direction={[0, -1, -.2]}/>
            <ViroAmbientLight color="#ffffff" intensity={200}/>
            {
                cameraBugFix ?
                    <ViroCamera position={[0, 0, 0]} active={true}>
                        <Viro3DObject
                            type={'VRX'}
                            ref={(ref) => {
                                obj = ref;
                            }}
                            onDrag={() => {
                            }}
                            onRotate={_onRotate}
                            onPinch={_onPinch}
                            source={require('../../3D_objects/OldMozart_msh/OldMozart_msh.vrx')}
                            resources={[
                                require('../../3D_objects/OldMozart_msh/OldMozart_msh.fbm/Mozart_Albedo.png'),
                                require('../../3D_objects/OldMozart_msh/Mozart_Albedo.png'),
                            ]}
                            position={position}
                            scale={scale}
                            rotation={rotation}
                        />
                    </ViroCamera>
                    : null
            }
        </ViroARScene>
    );
}

export default Ar;
