import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class HomeMenuView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={require("../Sekersiz/android/app/src/main/images/bir.png")}></Image>
                    {/*<Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>*/}

                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
                    <Text style={styles.info}>2</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
                    <Text style={styles.info}>3</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
                    <Text style={styles.info}>4</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
                    <Text style={styles.info}>5</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/shutdown.png'}}/>
                    <Text style={styles.info}>6</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={{uri: 'https://img.icons8.com/color/70/000000/traffic-jam.png'}}/>
                    <Text style={styles.info}>7</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon}
                           source={{uri: 'https://img.icons8.com/dusk/70/000000/visual-game-boy.png'}}/>
                    <Text style={styles.info}>8</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/flat_round/70/000000/cow.png'}}/>
                    <Text style={styles.info}>9</Text>
                </View>

                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>10</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>10</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>10</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>10</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>10</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>11</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>12</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>13</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>14</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>15</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>16</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>17</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>18</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>19</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>20</Text>
                </View>
                <View style={styles.menuBox}>
                    <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/coworking.png'}}/>
                    <Text style={styles.info}>21</Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 35,
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
        width: 60,
        height: 60,
        backgroundColor: "white",
    },
    info: {
        fontSize: 22,
        color: "#999",
    }
});


