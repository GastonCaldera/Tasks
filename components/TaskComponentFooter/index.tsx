import React from 'react';
import { Button } from '@ui-kitten/components';
import { StyleSheet, View, ViewProps } from 'react-native';

const TaskComponentFooter = (): React.ReactElement => (
    <View
        style={[styles.footerContainer]}
    >
        <Button
            style={styles.footerControl}
            size='small'
            status='basic'
        >
            CANCEL
        </Button>
        <Button
            style={styles.footerControl}
            size='small'
        >
            ACCEPT
        </Button>
    </View>
);

const styles = StyleSheet.create({
    footerControl: {
        marginHorizontal: 2,
    },
    footerContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

export default TaskComponentFooter