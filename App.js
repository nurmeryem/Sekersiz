import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
} from 'react-native';

export default class HomeMenuView extends Component {

    render() {
        return (
            <View style={styles.container}>


                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/1.png")}></Image>
                    {/*<Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>*/}

                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/2.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/3.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/4.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/5.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/6.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/7.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/8.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/9.png")}></Image>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/10.png")}></Image>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/11.png")}></Image>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/12.png")}></Image>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/13.png")}></Image>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 1000,
        backgroundColor: "#ffeff6",
        paddingTop: 70,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    menuBox: {
        backgroundColor: "#999",
        width: 70,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12
    },
    icon: {
        width: 75,
        height: 75,
        backgroundColor: "#ffeff6",
    },
    info: {
        fontSize: 22,
        color: "#999",
    }
});


