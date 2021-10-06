import {Dimensions} from "react-native";

const win = Dimensions.get('window');

const ratioWidth = win.width / 414;
const ratioHeight = win.height / 896;

const data = {
    deviceSizes: {
        width: 414,
        height: 896,
        ratioWidth: ratioWidth > 1 ? 1 : ratioWidth,
        ratioHeight: ratioHeight > 1 ? 1 : ratioHeight
    },
    gameScreens: [
        'Flappy',
        'WhackAMole',
        'CatchTheDrops',
        'FireFighter'
    ],
    popupData: {
        2: {
            image: require('../assets/images/paracelsus.jpg'),
            text: 'modals.stage_2',
            afterUpdate: true
        },
        4: {
            image: require('../assets/images/wohnhaus.jpg'),
            text: `modals.stage_4`,
            afterUpdate: true
        },
        7: {
            image: require('../assets/images/mirabellgarten.jpg'),
            text: `modals.stage_7`,
            afterUpdate: true
        },
        8: {
            image: require('../assets/images/popup_8.jpg'),
            text: `modals.stage_8`,
            afterUpdate: true
        },
        9: {
            image: require('../assets/images/birthplace.jpg'),
            text: `modals.stage_9`,
            afterUpdate: true
        },
        10: {
            image: require('../assets/images/image10.jpg'),
            text: `modals.stage_10`,
            afterUpdate: true
        },
        11: {
            image: require('../assets/images/zirkelwirt.jpg'),
            text: `modals.stage_11`,
            afterUpdate: true
        },
        12: {
            image: require('../assets/images/FluteSpin.gif'),
            text: `modals.stage_12`,
            afterUpdate: false
        },
        15: {
            image: require('../assets/images/kapuzinerberg.jpg'),
            text: `modals.stage_15`,
            afterUpdate: true
        },
        16: {
            image: require('../assets/images/monument.jpg'),
            text: `modals.stage_16`,
            afterUpdate: true
        },
    },

    elements: {
        water: {
            name: 'water',
            src: require('../assets/images/water.png'),
            srcModal: require('../assets/images/water_small.png')
        },
        fire: {
            name: 'fire',
            src: require('../assets/images/fire.png'),
            srcModal: require('../assets/images/fire_small.png')
        },
        air: {
            name: 'air',
            src: require('../assets/images/air.png'),
            srcModal: require('../assets/images/air_small.png')
        },
        earth: {
            name: 'earth',
            src: require('../assets/images/earth.png'),
            srcModal: require('../assets/images/earth_small.png')
        },
    },
    followingCoords: [
        {
            id: 1,
            // type: 'ar',
            // text: 'qr_code_1',
            // element: 'water',
            // right: false,
            // name: 'water',
            // appearing: true,
            // src: require('../assets/images/QRCodes/qr_code_1.png'),
            type: 'popup',
            appearing: true,
            text: 'modals.spiritOfMozart',
            image: require('../assets/images/spiritOfMozart.jpg'),
            coords: {latitude: 47.801438519163355, longitude: 13.044446452761735}

        },

        {
            id: 2,
            // type: 'ar',
            // text: 'qr_code_3',
            // src: require('../assets/images/QRCodes/qr_code_3.png'),
            // right: false,
            // appearing: true,
            // element: 'air',
            // name: 'air',
            type: 'popup',
            appearing: true,
            text: 'modals.dasKino',
            image: require('../assets/images/dasKino.jpg'),
            coords: {latitude: 47.801155, longitude: 13.045655}
            // coords: {latitude: 40.793297,   longitude: 43.844671}
        },

        {
            id: 3,
            type: 'riddle',
            // coords: {latitude: 47.801704, longitude: 13.042159}
            coords: {latitude: 47.804104023225065, longitude: 13.042573760101961}
        },

        {
            id: 4,
            type: 'riddle',
            // coords: {latitude: 47.801704, longitude: 13.042159}
            coords: {latitude: 47.79983, longitude: 13.04903}
        },

        {
            id: 5,
            // text: 'Makart Bridge',
            text: 'https://virtual-escape.at/mozart',
            src: require('../assets/images/QRCodes/makart.jpg'),
        },

        {
            id: 6,
            text: 'flute',
            // src: require('../assets/images/QRCodes/flute.png'),
        }
    ],
    coordinates: {
        stage_1: [
            {
                origin: null,
                location: {latitude: 47.804284, longitude: 13.048398},
                destinations: [
                    {latitude: 47.804284, longitude: 13.048398}
                ],
            }
        ],
        stage_2: [
            {
                origin: null,
                // location: {latitude: 40.786286,   longitude: 43.843194},
                location: {latitude: 47.801709, longitude: 13.045181},
                destinations: [
                    {latitude: 47.801709, longitude: 13.045181}
                ],
            }
        ],
        stage_3: [
            {
                origin: null,
                // location: {latitude: 47.801945, longitude: 13.043920},
                location: {latitude: 47.801438519163355, longitude: 13.044446452761735},
                destinations: [
                    {latitude: 47.801438519163355, longitude: 13.044446452761735}
                ],
            },
            {
                origin: null,
                location: {latitude: 47.802099, longitude: 13.045035},
                destinations: [
                    {latitude: 47.802099, longitude: 13.045035}
                ],
            },
            {
                origin: null,
                location: {latitude: 47.801129, longitude: 13.045653},
                // location: {latitude: 47.804104023225065, longitude: 13.042573760101961},
                destinations: [
                    {latitude: 47.801129, longitude: 13.045653}
                ],
            }
        ],
        stage_4: [
            {
                origin: null,
                location: {latitude: 47.802714, longitude: 13.043696},
                destinations: [
                    {latitude: 47.802714, longitude: 13.043696}
                ],
            },
        ],
        stage_5: [
            {
                origin: null,
                location: {latitude: 47.801986, longitude: 13.043915},
                destinations: [
                    {latitude: 47.801986, longitude: 13.043915}
                ],
            },
        ],
        stage_6: [
            {
                origin: null,
                location: {latitude: 47.804123, longitude: 13.042568},
                destination: [
                    {latitudes: 47.804123, longitude: 13.042568}
                ],
            },
        ],
        stage_7: [
            {
                origin: null,
                location: {latitude: 47.804123, longitude: 13.042568},
                destinations: [
                    {latitude: 47.804123, longitude: 13.042568}
                ],

            },
        ],
        stage_8: [
            {
                origin: null,
                // location: {latitude: 47.801703, longitude: 13.042159},
                location: {latitude: 0, longitude: 0},
                destinations: [],
            },
        ],
        stage_9: [
            {
                origin: null,
                location: {latitude: 47.800083, longitude: 13.043556},
                destinations: [
                    {latitude: 47.800083, longitude: 13.043556}
                ],
            },
        ],
        stage_10: [
            {
                origin: null,
                location: {latitude: 47.800083, longitude: 13.043556},
                destinations: [
                    {latitude: 47.800083, longitude: 13.043556}
                ],
            },
        ],
        stage_11: [
            {
                origin: null,
                location: {latitude: 47.798070, longitude: 13.049444},
                destinations: [
                    {latitude: 47.798070, longitude: 13.049444}
                ],
            },
        ],
        stage_12: [
            {
                origin: null,
                location: {latitude: 47.798070, longitude: 13.049444},
                destinations: [
                    {latitude: 47.798070, longitude: 13.049444}
                ],
            },
        ],
        stage_13: [
            {
                origin: null,
                location: {latitude: 47.79983, longitude: 13.04903},
                destinations: [
                    {latitude: 47.79983, longitude: 13.04903}
                ],
            },
        ],
        stage_14: [
            {
                origin: null,
                location: {latitude: 0, longitude: 0},
                destinations: [],
            },
        ],
        stage_15: [
            {
                origin: null,
                location: {latitude: 47.802017, longitude: 13.047587},
                destinations: [
                    {latitude: 47.801060, longitude: 13.048261},
                    {latitude: 47.802017, longitude: 13.047587},
                ],

            },
        ],
        stage_16: [
            {
                origin: null,
                location: {latitude: 0, longitude: 0},
                destination: [],
            },
        ],
        stage_17: [
            {
                origin: null,
                location: {latitude: 0, longitude: 0},
                destinations: [],
            },
        ],
        stage_18: [
            {
                origin: null,
                location: {latitude: 0, longitude: 0},
                destinations: {latitude: 0, longitude: 0},
            },
        ],
        stage_19: [
            {
                origin: null,
                location: {latitude: 0, longitude: 0},
                destinations: [],
            },
        ],
        stage_20: [
            {
                origin: null,
                location: {latitude: 0, longitude: 0},
                destinations: [],
            },
        ],
    },
    riddles: {
        1: {
            number: 1,
            text: "riddles.1.text",
            title: 'riddles.1.title',
            fontSize: 30,
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.1.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.1.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.1.hints.3'
                },
            ]
        },
        2: {

            number: 2,
            fontSize: 26,
            text: 'riddles.2.text',
            title: 'riddles.2.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.2.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.2.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.2.hints.3'
                },
            ]
        },
        3: {
            number: 3,
            fontSize: 19,
            text: 'riddles.3.text',
            title: 'riddles.3.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.3.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.3.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.3.hints.3'
                },
            ]
        },
        4: {
            number: 4,
            fontSize: 50,
            text: 'riddles.4.text',
            title: 'riddles.4.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.4.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.4.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.4.hints.3'
                },
            ]
        },
        5: {
            number: 5,
            fontSize: 20,
            answer: 'nachtmusik',
            text: 'riddles.5.text',
            title: 'riddles.5.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.5.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.5.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.5.hints.3'
                },
            ]
        },
        6: {
            number: 6,
            fontSize: 19.5,
            text: 'riddles.6.text',
            title: 'riddles.6.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.6.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.6.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.6.hints.3'
                },
            ]
        },
        7: {
            number: 6,
            fontSize: 25,
            text: 'riddles.7.text',
            title: 'riddles.7.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.7.hints.1',
                    text_2: 'riddles.7.hints_2.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.7.hints.2',
                    text_2: 'riddles.7.hints_2.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.7.hints.3',
                    text_2: 'riddles.7.hints_2.3'
                },
            ],

        },
        8: {
            number: 7,
            fontSize: 30,
            text: 'riddles.8.text',
            title: 'riddles.8.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.8.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.8.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.8.hints.3'
                },
            ]
        },
        9: {
            number: 8,
            fontSize: 29,
            text: 'riddles.9.text',
            title: 'riddles.9.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.9.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.9.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.9.hints.3'
                },
            ]
        },
        10: {
            number: 9,
            fontSize: 19,
            text: 'riddles.10.text',
            title: 'riddles.10.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.10.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.10.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.10.hints.3'
                },
            ]
        },
        11: {
            number: 10,
            fontSize: 50,
            text: 'riddles.11.text',
            title: 'riddles.11.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.11.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.11.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.11.hints.3'
                },
            ]
        },
        12: {
            number: 11,
            fontSize: 21,
            text: 'riddles.12.text',
            title: 'riddles.12.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.12.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.12.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.12.hints.3'
                },
            ]
        },
        13: {
            number: 12,
            fontSize: 22,
            text: 'riddles.13.text',
            title: 'riddles.13.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.13.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.13.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.13.hints.3'
                },
            ]
        },
        14: {
            number: 13,
            fontSize: 40,
            text: 'riddles.14.text',
            title: 'riddles.14.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.14.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.14.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.14.hints.3'
                },
            ]
        },
        15: {
            number: 14,
            fontSize: 28,
            text: 'riddles.15.text',
            title: 'riddles.15.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.15.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.15.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.15.hints.3'
                },
            ]
        },
        16: {
            number: 15,
            fontSize: 18,
            text: 'riddles.16.text',
            title: 'riddles.16.title',
            hints: [
                {
                    id: 1,
                    title: 'buttons.hint_1',
                    text: 'riddles.16.hints.1'
                },
                {
                    id: 2,
                    title: 'buttons.hint_2',
                    text: 'riddles.16.hints.2'
                },
                {
                    id: 3,
                    title: 'buttons.hint_3_solution',
                    text: 'riddles.16.hints.3'
                },
            ]
        },
        17: {
            1: {
                number: 16,
                fontSize: 32,
                answer: 'Freiherren von Schwarz',
                text: 'riddles.17.1.text',
                title: 'riddles.17.1.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.17.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.17.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.17.1.hints.3'
                    },
                ]
            },
            2: {
                number: 16,
                fontSize: 32,
                answer: '18071877',
                text: 'riddles.17.2.text',
                title: 'riddles.17.2.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.17.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.17.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.17.1.hints.3'
                    },
                ]
            }
        },
        18: {
            1: {
                number: 16,
                fontSize: 25,
                answer: 'Freiherren von Schwarz',
                solved: true,
                text: 'riddles.18.1.text',
                title: 'riddles.18.1.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.18.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.18.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.18.1.hints.3'
                    },
                ]
            },
            2: {
                number: 16,
                fontSize: 32,
                answer: '18071877',
                text: 'riddles.18.2.text',
                title: 'riddles.18.2.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.18.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.18.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.18.2.hints.3'
                    },
                ]
            }
        },
        19: {
            1: {
                number: 16,
                fontSize: 32,
                answer: 'Freiherren von Schwarz',
                text: 'riddles.19.1.text',
                title: 'riddles.19.1.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.19.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.19.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.19.1.hints.3'
                    },
                ]
            },
            2: {
                number: 16,
                fontSize: 23,
                answer: '18071877',
                solved: true,
                text: 'riddles.19.2.text',
                title: 'riddles.19.2.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.19.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.19.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.19.2.hints.3'
                    },
                ]
            }
        },
        20: {
            1: {
                number: 17,
                fontSize: 24,
                answer: 'Freiherren von Schwarz',
                text: 'riddles.20.1.text',
                title: 'riddles.20.1.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.20.1.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.20.1.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.20.1.hints.2'
                    },
                ]
            },
            2: {
                number: 17,
                fontSize: 24,
                answer: '18071877',
                text: 'riddles.20.2.text',
                title: 'riddles.20.2.title',
                hints: [
                    {
                        id: 1,
                        title: 'buttons.hint_1',
                        text: 'riddles.20.2.hints.1'
                    },
                    {
                        id: 2,
                        title: 'buttons.hint_2',
                        text: 'riddles.20.2.hints.2'
                    },
                    {
                        id: 3,
                        title: 'buttons.hint_3_solution',
                        text: 'riddles.20.2.hints.3'
                    },
                ]
            }
        },

    },
    squareNavigateButtons: [
        {
            id: 1,
            routName: 'MainMenu',
            text: 'buttons.mainMenu',
            icon: require('../assets/images/group-6.png'),
            color: '#e48146'
        },
        {
            id: 2,
            routName: 'CurrentRiddle',
            text: 'buttons.currentRiddle',
            icon: require('../assets/images/group-4.png'),
            color: '#e48146'
        },
        {
            id: 3,
            routName: 'Rucksack',
            text: 'buttons.rucksack',
            icon: require('../assets/images/group-8.png'),
            color: '#e48146'
        },
        {
            id: 4,
            routName: 'Map',
            text: 'buttons.map',
            icon: require('../assets/images/whiteMap.png'),
            color: '#e48146'
        },
        {
            id: 5,
            routName: 'Camera',
            type: 'ar',
            text: 'buttons.cameraAr',
            icon: require('../assets/images/group-11.png'),
            color: '#39abd7'
        },
        {
            id: 6,
            routName: 'Camera', //QRscaner
            type: 'qr',
            text: 'buttons.cameraQR',
            icon: require('../assets/images/group-10.png'),
            color: '#39abd7'
        },
        // {
        //     id: 7,
        //     routName: 'Hints',
        //     text: 'buttons.hints',
        //     icon: require('../assets/images/group-9.png'),
        //     color: '#39abd7'
        // }
    ],
    mapStyle: [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a0d9ef"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#021e28"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#021e28"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#007eae"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#007eae"
                }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
                {
                    "color": "#005576"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#d5e6ed"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1397c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#1397c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#1397c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#005576"
                }
            ]
        }
    ],

};

export default data;
