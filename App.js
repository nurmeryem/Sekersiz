import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity
} from 'react-native';
import {Root, Popup} from 'popup-ui'

export default class HomeMenuView extends Component {

    constructor() {
        super();
        this.state = {a:false};
    }

    render() {
        return (
            <Root>
                <View style={styles.container}>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '1. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/1.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '2. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }
                        >
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/2.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '3. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/3.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '4. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/4.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '5. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/5.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '6. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/6.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '7. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/7.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '8. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/8.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '9. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/9.png")}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '10. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/10.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '11. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/11.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '12. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/12.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '13. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/13.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '14. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '15. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '16. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '17. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '18. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '19. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'Tebrikler!',
                                    button: false,
                                    textBody: '20. günü başarı ile tamamladınız.',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuBox}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                Popup.show({
                                    type: 'Success',
                                    title: 'BAŞARDINIZ!',
                                    button: false,
                                    textBody: '21 gün boyunca şeker yemediniz. :)',
                                    buttontext: 'Ok',
                                    autoClose: true,
                                    callback: () => Popup.hide()
                                })
                            }>
                            <Image style={styles.icon}
                                   source={require("../Sekersiz/android/app/src/main/images/14.png")}></Image>
                        </TouchableOpacity>
                    </View>


                </View>
            </Root>
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


