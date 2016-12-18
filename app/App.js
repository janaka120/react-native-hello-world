import React, { Component } from 'react';
import { 
	Text, 
	View,
    StyleSheet
} from 'react-native';

export default class App extends Component {
    render() {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Hello React-Native</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by React-Native</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DADFE1',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '500'
    },
    subtitle: {
        fontSize: 11,
        fontWeight: '300'
    }
});