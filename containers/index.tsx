import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, ViewPager } from '@ui-kitten/components';
import BottomTabs from '../components/BottomTabs';
import TaskComponent from '../components/TaskComponent';

const Dashboard = (): React.ReactElement => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <View style={styles.container}>
            <ViewPager
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
                style={styles.tab}
            >
                <Layout
                    style={styles.tab}
                    level='2'
                >
                    <TaskComponent />
                </Layout>
                <Layout
                    style={styles.tab}
                    level='2'
                >
                    <Text category='h5'>
                        To Do
                    </Text>
                </Layout>
                <Layout
                    style={styles.tab}
                    level='2'
                >
                    <Text category='h5'>
                        completed
                    </Text>
                </Layout>
            </ViewPager>
            <BottomTabs selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tab: {
        flex: 1,
    },
});

export default Dashboard