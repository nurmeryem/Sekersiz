import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,TouchableOpacity
} from 'react-native';

export default class HomeMenuView extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                        <Image style={styles.icon}
                               source={require("../Sekersiz/android/app/src/main/images/1.png")}></Image>
                    </TouchableOpacity>

                    {/*<Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>*/}

                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/2.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/3.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/4.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/5.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/6.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/7.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/8.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/9.png")}></Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/10.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/11.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/12.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/13.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                        <Image style={styles.icon}
                               source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                        <Image style={styles.icon}
                               source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                        <Image style={styles.icon}
                               source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity>
                        <Image style={styles.icon}
                               source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuBox}>
                    <TouchableOpacity style={styles.button}
                                      >
                        <Image style={styles.icon}
                               source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                    </TouchableOpacity>
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
    button: {
        alignItems: "center",
        backgroundColor: "#ffeff6",
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


