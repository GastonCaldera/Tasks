import React from 'react';
import { Text, Card } from '@ui-kitten/components';
import { StyleSheet, ScrollView } from 'react-native';
import TaskComponentHeader from '../TaskComponentHeader';
import TaskComponentFooter from '../TaskComponentFooter';

const TaskComponent = (): React.ReactElement => {
    return (
        <ScrollView>
            <Card
                style={styles.card}
                header={<TaskComponentHeader title={"Description"} status={"Completado"} />}
                footer={<TaskComponentFooter />}
            >
                <Text>
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
                    of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
                    continent
                </Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
    },
    text: {
        margin: 2,
        marginVertical: 4
    },
    footerControl: {
        marginHorizontal: 2,
    },
    footerContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

export default TaskComponent