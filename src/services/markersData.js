const markersData = {
    LinzerGasseStart: {
        id: 1,
        markers: {
            start_1: {
                source: require('../assets/images/markers/start/1.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_2: {
                source: require('../assets/images/markers/start/2.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_3: {
                source: require('../assets/images/markers/start/3.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_4: {
                source: require('../assets/images/markers/start/4.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
            start_5: {
                source: require('../assets/images/markers/start/5.jpg'),
                orientation: "Up",
                physicalWidth: 2, // real world width in meters
                type: 'Image'
            },
        },
        markerDetails: {

            start_1: {position: [0, 0, 0.25], rotation: [-110, -10, -25], height: 1.2, width: 1.2},
            start_2: {position: [-0.35, 0, 0.25], rotation: [-110, -15, -50], height: 1, width: 1},
            start_3: {position: [0.02, 0, 0.18], rotation: [-110, 0, 0], height: 0.9, width: 0.9},
            start_4: {position: [0.06, 0, 0.18], rotation: [-110, -10, -25], height: 0.9, width: 0.9},
            start_5: {position: [0.04, 0, 0.15], rotation: [-110, 0, 0], height: 0.9, width: 0.9}
        },
    },
    RecognizeParacelsus: {
        id: 2,
        markers: {
            paracelsus_1: {
                source: require('../assets/images/markers/platzl/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_2: {
                source: require('../assets/images/markers/platzl/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_3: {
                source: require('../assets/images/markers/platzl/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            paracelsus_4: {
                source: require('../assets/images/markers/platzl/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            }
        }
    },
    Cup: {
        id: 3,
        markers: {
            cup_1: {
                source: require('../assets/images/markers/cup/1.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_2: {
                source: require('../assets/images/markers/cup/2.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_3: {
                source: require('../assets/images/markers/cup/3.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_4: {
                source: require('../assets/images/markers/cup/4.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_5: {
                source: require('../assets/images/markers/cup/5.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_6: {
                source: require('../assets/images/markers/cup/6.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_7: {
                source: require('../assets/images/markers/cup/7.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_8: {
                source: require('../assets/images/markers/cup/8.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            },
            cup_9: {
                source: require('../assets/images/markers/cup/9.jpg'),
                orientation: "Up",
                physicalWidth: 0.5, // real world width in meters
                type: 'Image'
            }

        }
    },
    MozartHouse: {
        id: 4,
        markers: {
            house_1: {
                source: require('../assets/images/markers/wohnhaus/m1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_2: {
                source: require('../assets/images/markers/wohnhaus/m2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_3: {
                source: require('../assets/images/markers/wohnhaus/m3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_4: {
                source: require('../assets/images/markers/wohnhaus/m4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_5: {
                source: require('../assets/images/markers/wohnhaus/m5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_6: {
                source: require('../assets/images/markers/wohnhaus/m6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_7: {
                source: require('../assets/images/markers/wohnhaus/m7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_8: {
                source: require('../assets/images/markers/wohnhaus/m8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_9: {
                source: require('../assets/images/markers/wohnhaus/m9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_10: {
                source: require('../assets/images/markers/wohnhaus/m10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_11: {
                source: require('../assets/images/markers/wohnhaus/m11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_12: {
                source: require('../assets/images/markers/wohnhaus/m12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_13: {
                source: require('../assets/images/markers/wohnhaus/m13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_14: {
                source: require('../assets/images/markers/wohnhaus/m14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_15: {
                source: require('../assets/images/markers/wohnhaus/m15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_16: {
                source: require('../assets/images/markers/wohnhaus/m16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_17: {
                source: require('../assets/images/markers/wohnhaus/m17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            house_18: {
                source: require('../assets/images/markers/wohnhaus/m18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
        },
        markerDetails: {
            house_1: {position: [0.7, 0, -0.5], rotation: [-110, 0, 0], height: 2, width: 2},
            house_2: {position: [0.7, 0, -0.5], rotation: [-90, 0, 55], height: 2, width: 2},
            house_3: {position: [0.3, 0, -0.4], rotation: [-90, 0, -50], height: 2, width: 2},
            house_4: {position: [-1, 0, -0.3], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_5: {position: [0, 0, -0.2], rotation: [-90, 0, 0], height: 1.7, width: 1.7},
            house_6: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_7: {position: [-0.2, 0, -0.1], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_8: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_9: {position: [0.1, 0, -0.8], rotation: [-90, 0, 0], height: 1.7, width: 1.7},
            house_10: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_11: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_12: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_13: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_14: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_15: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_16: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_17: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7},
            house_18: {position: [0.5, 0, 0], rotation: [-110, 0, 0], height: 1.7, width: 1.7}
        },
    },
    MirabellGarden: {
        air: {
            id: 5,
            markers: {
                air_1: {
                    source: require('../assets/images/markers/statueAir/air_1.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_2: {
                    source: require('../assets/images/markers/statueAir/air_2.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_3: {
                    source: require('../assets/images/markers/statueAir/air_3.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_4: {
                    source: require('../assets/images/markers/statueAir/air_4.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_5: {
                    source: require('../assets/images/markers/statueAir/air_5.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_6: {
                    source: require('../assets/images/markers/statueAir/air_6.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_7: {
                    source: require('../assets/images/markers/statueAir/air_7.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_8: {
                    source: require('../assets/images/markers/statueAir/air_8.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_9: {
                    source: require('../assets/images/markers/statueAir/air_9.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_10: {
                    source: require('../assets/images/markers/statueAir/air_10.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_11: {
                    source: require('../assets/images/markers/statueAir/air_11.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_12: {
                    source: require('../assets/images/markers/statueAir/air_12.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_13: {
                    source: require('../assets/images/markers/statueAir/air_13.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_14: {
                    source: require('../assets/images/markers/statueAir/air_14.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_15: {
                    source: require('../assets/images/markers/statueAir/air_15.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                air_16: {
                    source: require('../assets/images/markers/statueAir/air_16.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
            }

        },
        earth: {
            id: 6,
            markers: {
                earth_1: {
                    source: require('../assets/images/markers/statueEarth/earth_1.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_2: {
                    source: require('../assets/images/markers/statueEarth/earth_2.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_3: {
                    source: require('../assets/images/markers/statueEarth/earth_3.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_4: {
                    source: require('../assets/images/markers/statueEarth/earth_4.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_5: {
                    source: require('../assets/images/markers/statueEarth/earth_5.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_6: {
                    source: require('../assets/images/markers/statueEarth/earth_6.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_7: {
                    source: require('../assets/images/markers/statueEarth/earth_7.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_8: {
                    source: require('../assets/images/markers/statueEarth/earth_8.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_9: {
                    source: require('../assets/images/markers/statueEarth/earth_9.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_10: {
                    source: require('../assets/images/markers/statueEarth/earth_10.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_11: {
                    source: require('../assets/images/markers/statueEarth/earth_11.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_12: {
                    source: require('../assets/images/markers/statueEarth/earth_12.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_13: {
                    source: require('../assets/images/markers/statueEarth/earth_13.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_14: {
                    source: require('../assets/images/markers/statueEarth/earth_14.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_15: {
                    source: require('../assets/images/markers/statueEarth/earth_15.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_16: {
                    source: require('../assets/images/markers/statueEarth/earth_16.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_17: {
                    source: require('../assets/images/markers/statueEarth/earth_17.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_18: {
                    source: require('../assets/images/markers/statueEarth/earth_18.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_19: {
                    source: require('../assets/images/markers/statueEarth/earth_19.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                earth_20: {
                    source: require('../assets/images/markers/statueEarth/earth_20.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
            }

        },
        fire: {
            id: 7,
            markers: {
                fire_1: {
                    source: require('../assets/images/markers/statueFire/fire_1.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_2: {
                    source: require('../assets/images/markers/statueFire/fire_2.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_3: {
                    source: require('../assets/images/markers/statueFire/fire_3.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_4: {
                    source: require('../assets/images/markers/statueFire/fire_4.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_5: {
                    source: require('../assets/images/markers/statueFire/fire_5.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_6: {
                    source: require('../assets/images/markers/statueFire/fire_6.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_7: {
                    source: require('../assets/images/markers/statueFire/fire_7.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_8: {
                    source: require('../assets/images/markers/statueFire/fire_8.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_9: {
                    source: require('../assets/images/markers/statueFire/fire_9.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_10: {
                    source: require('../assets/images/markers/statueFire/fire_10.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_11: {
                    source: require('../assets/images/markers/statueFire/fire_11.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_12: {
                    source: require('../assets/images/markers/statueFire/fire_12.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_13: {
                    source: require('../assets/images/markers/statueFire/fire_13.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_14: {
                    source: require('../assets/images/markers/statueFire/fire_14.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_15: {
                    source: require('../assets/images/markers/statueFire/fire_15.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_16: {
                    source: require('../assets/images/markers/statueFire/fire_16.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_17: {
                    source: require('../assets/images/markers/statueFire/fire_17.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_18: {
                    source: require('../assets/images/markers/statueFire/fire_18.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                fire_19: {
                    source: require('../assets/images/markers/statueFire/fire_19.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
            }

        },
        water: {
            id: 8,
            markers: {
                water_1: {
                    source: require('../assets/images/markers/statueWater/water_1.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_2: {
                    source: require('../assets/images/markers/statueWater/water_2.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_3: {
                    source: require('../assets/images/markers/statueWater/water_3.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_4: {
                    source: require('../assets/images/markers/statueWater/water_4.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_5: {
                    source: require('../assets/images/markers/statueWater/water_5.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_6: {
                    source: require('../assets/images/markers/statueWater/water_6.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_7: {
                    source: require('../assets/images/markers/statueWater/water_7.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_8: {
                    source: require('../assets/images/markers/statueWater/water_8.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_9: {
                    source: require('../assets/images/markers/statueWater/water_9.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_10: {
                    source: require('../assets/images/markers/statueWater/water_10.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_11: {
                    source: require('../assets/images/markers/statueWater/water_11.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_12: {
                    source: require('../assets/images/markers/statueWater/water_12.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_13: {
                    source: require('../assets/images/markers/statueWater/water_13.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_14: {
                    source: require('../assets/images/markers/statueWater/water_14.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_15: {
                    source: require('../assets/images/markers/statueWater/water_15.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_16: {
                    source: require('../assets/images/markers/statueWater/water_16.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_17: {
                    source: require('../assets/images/markers/statueWater/water_17.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_18: {
                    source: require('../assets/images/markers/statueWater/water_18.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
                water_19: {
                    source: require('../assets/images/markers/statueWater/water_19.jpg'),
                    orientation: "Up",
                    physicalWidth: 3, // real world width in meters
                    type: 'Image'
                },
            }
        },
    },
    MozartBirthplace: {
        id: 9,
        markers: {
            'marker_1': {
                source: require('../assets/images/markers/birthplace/1.jpeg'),
                orientation: 'Up',
                physicalWidth: 4, // real world width in meters
                type: 'Image',
            },
            'marker_2': {
                source: require('../assets/images/markers/birthplace/2.jpeg'),
                orientation: 'Up',
                physicalWidth: 3, // real world width in meters
                type: 'Image',
            },
            'marker_3': {
                source: require('../assets/images/markers/birthplace/3.jpeg'),
                orientation: 'Up',
                physicalWidth: 1, // real world width in meters
                type: 'Image',
            },
            'marker_4': {
                source: require('../assets/images/markers/birthplace/4.jpeg'),
                orientation: 'Up',
                physicalWidth: 5, // real world width in meters
                type: 'Image',
            },
        },
        markerDetails: {
            marker_1: {position: [-1.4, 0, 1.4], rotation: [-110, 0, 0], height: 0.65, width: 0.65},
            marker_2: {position: [-0.5, 0, -0.4], rotation: [-90, 0, 0], height: 0.8, width: 0.8},
            marker_3: {position: [0, 0, -0.51], rotation: [-90, 0, 0], height: 0.5, width: 0.5},
            marker_4: {position: [-1.45, 0, -1.4], rotation: [-90, -0.10, -65], height: 2, width: 2},
        }
    },
    ZumZirkelwirt: {
        id: 10,
        markers: {
            zum_1: {
                source: require('../assets/images/markers/zirkelwirt/1.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_2: {
                source: require('../assets/images/markers/zirkelwirt/2.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_3: {
                source: require('../assets/images/markers/zirkelwirt/3.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_4: {
                source: require('../assets/images/markers/zirkelwirt/4.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_5: {
                source: require('../assets/images/markers/zirkelwirt/5.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            zum_6: {
                source: require('../assets/images/markers/zirkelwirt/6.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno: {
                source: require('../assets/images/markers/zirkelwirt/papageno.jpeg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },

        },
        markerDetails: {
            zum_1: {position: [0.27, 0, -0.7], rotation: [-100, -5, -30], height: 0.5, width: 0.5},
            zum_2: {position: [0.32, 0, -0.42], rotation: [-100, -5, -30], height: 0.2, width: 0.2},
            zum_3: {position: [-1, 0, -1.4], rotation: [-90, 0, -50], height: 2, width: 2},
            zum_4: {position: [-1, 0, -0.75], rotation: [-90, 0, -50], height: 2, width: 2},
            zum_5: {position: [-0.11, 0, -0.23], rotation: [-100, 5, 30], height: 0.15, width: 0.15},
            zum_6: {position: [-0.25, 0, -0.85], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
        }
    },
    Papageno: {
        id: 11,
        markers: {
            papageno_1: {
                source: require('../assets/images/markers/papageno/1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_2: {
                source: require('../assets/images/markers/papageno/2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_3: {
                source: require('../assets/images/markers/papageno/3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_4: {
                source: require('../assets/images/markers/papageno/4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_5: {
                source: require('../assets/images/markers/papageno/5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_6: {
                source: require('../assets/images/markers/papageno/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_7: {
                source: require('../assets/images/markers/papageno/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_8: {
                source: require('../assets/images/markers/papageno/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_9: {
                source: require('../assets/images/markers/papageno/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_10: {
                source: require('../assets/images/markers/papageno/10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_11: {
                source: require('../assets/images/markers/papageno/11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_12: {
                source: require('../assets/images/markers/papageno/12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_13: {
                source: require('../assets/images/markers/papageno/13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_14: {
                source: require('../assets/images/markers/papageno/14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_15: {
                source: require('../assets/images/markers/papageno/15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_16: {
                source: require('../assets/images/markers/papageno/16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_17: {
                source: require('../assets/images/markers/papageno/17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_18: {
                source: require('../assets/images/markers/papageno/18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_19: {
                source: require('../assets/images/markers/papageno/19.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            papageno_20: {
                source: require('../assets/images/markers/papageno/20.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
        }
    },
    Kapuzinerkloster: {
        id: 12,
        markers: {
            kapuzinerkloster_1: {
                source: require('../assets/images/markers/kapuzinerkloster/1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_2: {
                source: require('../assets/images/markers/kapuzinerkloster/2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_3: {
                source: require('../assets/images/markers/kapuzinerkloster/3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_4: {
                source: require('../assets/images/markers/kapuzinerkloster/4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_5: {
                source: require('../assets/images/markers/kapuzinerkloster/5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_6: {
                source: require('../assets/images/markers/kapuzinerkloster/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_7: {
                source: require('../assets/images/markers/kapuzinerkloster/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_8: {
                source: require('../assets/images/markers/kapuzinerkloster/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_9: {
                source: require('../assets/images/markers/kapuzinerkloster/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_10: {
                source: require('../assets/images/markers/kapuzinerkloster/10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_11: {
                source: require('../assets/images/markers/kapuzinerkloster/11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_12: {
                source: require('../assets/images/markers/kapuzinerkloster/12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_13: {
                source: require('../assets/images/markers/kapuzinerkloster/13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_14: {
                source: require('../assets/images/markers/kapuzinerkloster/14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_15: {
                source: require('../assets/images/markers/kapuzinerkloster/15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_16: {
                source: require('../assets/images/markers/kapuzinerkloster/16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_17: {
                source: require('../assets/images/markers/kapuzinerkloster/17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_18: {
                source: require('../assets/images/markers/kapuzinerkloster/18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_19: {
                source: require('../assets/images/markers/kapuzinerkloster/19.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_20: {
                source: require('../assets/images/markers/kapuzinerkloster/20.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_21: {
                source: require('../assets/images/markers/kapuzinerkloster/21.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_22: {
                source: require('../assets/images/markers/kapuzinerkloster/22.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            kapuzinerkloster_23: {
                source: require('../assets/images/markers/kapuzinerkloster/23.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
        },
        markerDetails: {
            kapuzinerkloster_1: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_2: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_3: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_4: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_5: {position: [-0.3, 0, 0], rotation: [-90, -2, 40], height: 1.3, width: 1.3},
            kapuzinerkloster_6: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_7: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_8: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_9: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_10: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_11: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_12: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_13: {position: [0.5, 0, 0], rotation: [-90, 0, 0], height: 1, width: 1},
            kapuzinerkloster_14: {position: [0.5, 0, 0], rotation: [-90, 0, 0], height: 1, width: 1},
            kapuzinerkloster_15: {position: [0.5, 0, 0], rotation: [-90, 0, 0], height: 1, width: 1},
            kapuzinerkloster_16: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_17: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_18: {position: [0, 0, 0.3], rotation: [-90, 0, 50], height: 1.2, width: 1.2},
            kapuzinerkloster_19: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_20: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_21: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_22: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            kapuzinerkloster_23: {position: [0, 0, 0], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
        }
    },
    MozartMonument: {
        id: 13,
        markers: {
            marker_1: {
                source: require('../assets/images/markers/mozartMonument/1.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_2: {
                source: require('../assets/images/markers/mozartMonument/2.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_3: {
                source: require('../assets/images/markers/mozartMonument/3.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_4: {
                source: require('../assets/images/markers/mozartMonument/4.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_5: {
                source: require('../assets/images/markers/mozartMonument/5.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_6: {
                source: require('../assets/images/markers/mozartMonument/6.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_7: {
                source: require('../assets/images/markers/mozartMonument/7.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_8: {
                source: require('../assets/images/markers/mozartMonument/8.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_9: {
                source: require('../assets/images/markers/mozartMonument/9.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_10: {
                source: require('../assets/images/markers/mozartMonument/10.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_11: {
                source: require('../assets/images/markers/mozartMonument/11.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_12: {
                source: require('../assets/images/markers/mozartMonument/12.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_13: {
                source: require('../assets/images/markers/mozartMonument/13.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_14: {
                source: require('../assets/images/markers/mozartMonument/14.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_15: {
                source: require('../assets/images/markers/mozartMonument/15.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_16: {
                source: require('../assets/images/markers/mozartMonument/16.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_17: {
                source: require('../assets/images/markers/mozartMonument/17.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
            marker_18: {
                source: require('../assets/images/markers/mozartMonument/18.jpg'),
                orientation: "Up",
                physicalWidth: 3, // real world width in meters
                type: 'Image'
            },
        },
        markerDetails: {
            marker_1: {position: [0.05, 0, 0], rotation: [-90, 0, 0], height: 1, width: 1},
            marker_2: {position: [-0.2, 0, 0.6], rotation: [-90, 0, 0], height: 2, width: 2},
            marker_3: {position: [0, 0, -0.3], rotation: [-90, 0, 0], height: 2, width: 2},
            marker_4: {position: [-0.05, 0, 0.05], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            marker_5: {position: [0.2, 0, -0.1], rotation: [-90, 0, 0], height: 1.5, width: 1.5},
            marker_6: {position: [-0.05, 0, 0.05], rotation: [-90, 0, 0], height: 1.3, width: 1.3},
            marker_7: {position: [-0.05, 0, 0.85], rotation: [-90, 0, 0], height: 2, width: 2},
            marker_8: {position: [-0.05, 0, 0.85], rotation: [-90, 0, 0], height: 2.5, width: 2.5},
            marker_9: {position: [-0.05, 0, 0], rotation: [-90, 0, 0], height: 2, width: 2},
            marker_10: {position: [0.05, 0, -0.6], rotation: [-90, 0, 0], height: 1.5, width: 1.5},
            marker_11: {position: [-0.05, 0, 0.85], rotation: [-90, 0, 0], height: 2, width: 2},
            marker_12: {position: [-0.05, 0, 0.7], rotation: [-90, 0, 0], height: 2.5, width: 2.5},
            marker_13: {position: [-0.05, 0, 0.7], rotation: [-90, 0, 0], height: 2.5, width: 2.5},
            marker_14: {position: [-0.05, 0, 0.85], rotation: [-90, 0, 0], height: 2, width: 2},
            marker_15: {position: [0.2, 0, -0.1], rotation: [-90, 0, 0], height: 1.5, width: 1.5},
            marker_16: {position: [0.2, 0, -0.1], rotation: [-90, 0, 0], height: 1.5, width: 1.5},
            marker_17: {position: [0.2, 0, -0.1], rotation: [-90, 0, 0], height: 1.5, width: 1.5},
            marker_18: {position: [0.25, 0, -0.1], rotation: [-90, 0, 0], height: 1.5, width: 1.5},
        },
    },
};

export default markersData
