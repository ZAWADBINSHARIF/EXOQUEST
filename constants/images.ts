import { ImageSourcePropType } from "react-native";

interface imgType {
    [key: string]: ImageSourcePropType;
}

const imgs: imgType = {
    start_boy: require('@/assets/imgs/start_boy.png'),
    dialogue_box: require('@/assets/imgs/welcome-dialogue-box-bg.png'),
    exterior_galaxy: require('@/assets/imgs/exterior_galaxy.jpg'),
    planet_01: require("@/assets/imgs/planet_01.png"),
    boy: require("@/assets/imgs/boy.png"),
    girl: require("@/assets/imgs/girl.png"),
    boy_frame: require("@/assets/imgs/boy_frame.png"),
    girl_frame: require("@/assets/imgs/girl_frame.png"),
    master: require("@/assets/imgs/master.png"),
    master2: require("@/assets/imgs/master2.png"),
    fuel: require("@/assets/imgs/fuel.png"),
    galacticKey: require("@/assets/imgs/galacticKey.png"),
    rewardPoint: require("@/assets/imgs/rewardPoint.png"),
    menu_bg: require("@/assets/imgs/menu_bg.png"),
    level_01_bg_01: require("@/assets/imgs/level_01_bg_01.jpg"),
    level_01_bg_02: require("@/assets/imgs/level_01_bg_02.jpg"),
    GamePlay: require("@/assets/imgs/GamePlay.png"),
    GalacticFinder: require("@/assets/imgs/GalacticFinder.png"),
    GalacticGateWay: require("@/assets/imgs/GalacticGateWay.png"),
    GalacticGenesis: require("@/assets/imgs/GalacticGenesis.png"),
    Statistics: require("@/assets/imgs/Statistics.png"),
};

export default imgs;