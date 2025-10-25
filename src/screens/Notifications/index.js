import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { Notification, notificationDelete } from '../../auth/auth';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Icons from '../../components/Icons/Icons';
import Colors from '../../constants/Colors';
import styles from './styles';

const Notifications = ({ navigation }) => {
  const user = useSelector(state => state?.users?.users);
  const [notification, setNotification] = useState([]);
  console.log('userN', user);

  const GetNotification = async () => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    if (user.login_role === 'Md Steward') {
      formdata.append('md_steward_id', user.user_id);
    }
    try {
      const response = await Notification(formdata);

      if (response.status === 1) {
        const notifications = response.response;
        console.log('notifications11ttt', notifications);
        setNotification(notifications);
        // Update state
      } else {
        console.log('GetNotification failed:', response.message);
      }
    } catch (error) {
      console.log('GetNotification error:', error);
    }
  };
  const NotificationDelete = async id => {
    let formdata = new FormData();
    formdata.append('login_session_key', user.login_session_key);
    if (user.login_role === 'Md Steward') {
      formdata.append('md_steward_id', user.user_id);
    }
    formdata.append('user_role', user?.login_role);
    formdata.append('notification_id', id);
    try {
      const response = await notificationDelete(formdata);

      if (response.status === 1) {
        const notifications = response.response;
        console.log('notifications11', notifications);
        // Update state
      } else {
        console.log('GetNotification failed:', response.message);
      }
    } catch (error) {
      console.log('GetNotification error:', error);
    }
  };
  useEffect(() => {
    GetNotification();
  }, []);
  return (
    <CustomSafeAreaView
      statusBarBackgroundColor="transparent"
      barStyle="dark-content"
    >
      <View style={styles.mainWrapper}>
        <View style={styles.headerWrapper}>
          <Header
            back
            title={'Notifications'}
            iconColor={Colors.white}
            onRightLogout={() => {
              navigation.navigate('HomeScreen');
            }}
            rightLogout={
              <Image
                style={styles.iconImageLogout}
                source={require('../../assets/images/Home_white.png')}
              />
            }
          />
        </View>
        <FlatList
          data={notification}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.contentContainerStyle}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {}}
              style={[
                styles.notificationCard,
                { backgroundColor: item.read_status == 'YES' && Colors.white },
              ]}
            >
              <View style={styles.row}>
                <CustomText style={styles.statusText}>
                  {item?.message}
                </CustomText>
                <Pressable
                  onPress={() => {
                    navigation.navigate('PatientHistoryScreen', {
                      care_unit_id: item?.care_unit_id,
                      patient_id: item?.patient_id,
                    });
                  }}
                >
                  <CustomText style={styles.textReview}>Review</CustomText>
                </Pressable>
                <Pressable
                  onPress={() => {
                    NotificationDelete(item?.id);
                  }}
                  style={styles.closeButton}
                >
                  <Icons
                    name={'close'}
                    iconType={'Ionicons'}
                    size={scale(16)}
                    color={Colors.boysenberry}
                  />
                </Pressable>
              </View>
              <View style={styles.row}>
                <CustomText style={styles.idText}>{item?.sent_time}</CustomText>
              </View>
            </Pressable>
          )}
        />
      </View>
    </CustomSafeAreaView>
  );
};

export default Notifications;
