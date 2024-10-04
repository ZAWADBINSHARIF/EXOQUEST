import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


interface Props {
    text: React.ReactNode,
    arrowDireaction: 'left' | 'right';
}

const DialogueBubbleView = (props: Props) => {
    return (
        <View style={styles.speechBubble}>
            {props.text}

            {props.arrowDireaction === 'left' &&
                <View style={styles.leftArrow}></View>
            }
            {props.arrowDireaction === 'right' &&
                <View style={styles.rightArrow}></View>
            }

        </View>
    );
};

export default DialogueBubbleView;

const styles = StyleSheet.create({
    speechBubble: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        minWidth: 60,
        marginBottom: 10,
        // borderWidth: 2,
        borderColor: 'black'
    },
    speechText: {
        color: 'black',
        fontFamily: 'SpaceMono',
        // fontWeight: 'bold'
    },
    leftArrow: {
        position: 'absolute',
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 23,
        borderRightWidth: 23,
        borderBottomWidth: 46,
        borderLeftColor: "white",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
        bottom: -35,
        left: 0
    },
    rightArrow: {
        position: 'absolute',
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 23,
        borderRightWidth: 23,
        borderBottomWidth: 46,
        borderLeftColor: "transparent",
        borderRightColor: "white",
        borderBottomColor: "transparent",
        bottom: -35,
        right: 0
    }
});