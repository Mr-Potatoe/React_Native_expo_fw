import {View, StyleSheet} from 'react-native';
import {Link, Stack} from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found haha!' }} />
            <View style={styles.container}>
            <Link href="/" style={styles.button}> Go to home screen
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25292e',
    },
    button: {
        marginTop: 15,
        paddingVertical: 15,
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
})