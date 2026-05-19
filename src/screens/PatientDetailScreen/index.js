import { Pressable, ScrollView, View } from 'react-native'; // Added Text, FlatList, TouchableOpacity
import PatientProfileCard from '../../components/cards/PatientProfileCard';
import ContactItemCard from '../../components/cards/ContactItemCard';
import { CustomText } from '../../components/global/CustomComponents';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import Header from '../../components/Header/Header';
import Icons from '../../components/Icons/Icons';
import Link from '../../components/links/Link';
import Colors from '../../constants/Colors';
import {
  FONT_SIZE_XXS,
  STANDARD_VECTOR_ICON_SIZE,
} from '../../constants/Constants';
import ButtonDashOutlined from '../../components/buttons/ButtonDashOutlined';
import FeatherIcons from 'react-native-vector-icons/Feather';
import styles from './styles';
import { moderateScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';
import PatientProfileItemCard from '../../components/cards/PatientProfileItemCard';
import { Images } from '../../constants/images';

const contactList = [
  {
    id: 1,
    name: 'MARIETTA HORNE',
    phone: '(908) 709-1398',
    email: 'horne.family33@gmail.com',
    relation: 'Wife',
    role: 'Responsible Party',
  },
  {
    id: 2,
    name: 'WILL JR HORNE',
    phone: '(908) 709-1398',
    email: 'WHORNE89@GMAIL.COM',
    relation: 'Son',
    role: 'xyz',
  },
  {
    id: 3,
    name: 'WILLIAM HORNE',
    phone: '(908) 709-1398',
    email: 'WILLIAM.HORNE@GMAIL.COM',
    relation: 'Self',
    role: 'xyz',
  },
];

const patientProfileData = [
  {
    id: 1,
    title: 'Medical Record #',
    value: '21061',
    image: Images.medicalRecord,
  },
  {
    id: 2,
    title: 'Medicare Number',
    value: 'N/A',
    image: Images.medicare,
  },
  {
    id: 3,
    title: 'Social Beneficiary ID',
    value: 'N/A',
    image: Images.socialBeneficiaryId,
  },
  {
    id: 4,
    title: 'Occupation',
    value: 'N/A',
    image: Images.occupation,
  },
  {
    id: 5,
    title: 'Religion',
    value: 'N/A',
    image: Images.religion,
  },
  {
    id: 6,
    title: 'Race',
    value: 'White',
    image: Images.race,
  },
  {
    id: 7,
    title: 'Phone',
    value: '(908) 709-1398',
    image: Images.phone,
  },
  {
    id: 8,
    title: 'Address',
    value: '42 PRINCETON RD, Cranford, NJ - 07016, United States',
    image: Images.address,
  },
];

const PatientDetailScreen = ({ navigation }) => {
  return (
    <CustomSafeAreaView
      barStyle="dark-content"
      statusBarBackgroundColor={Colors.secondary}
    >
      <View style={[styles.mainWrapper, { backgroundColor: Colors.secondary }]}>
        <Header
          back
          title={'Patient Details'}
          iconColor={Colors.textHighContrast}
          headerBg={Colors.secondary}
          onRightLogout={() => {
            navigation.navigate('HomeScreen');
          }}
          rightLogout={
            <Icons
              iconType={'Feather'}
              name={'more-vertical'}
              size={STANDARD_VECTOR_ICON_SIZE}
              color={Colors.textHighContrast}
            />
          }
        />
        <ScrollView
          bounces={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.mainScrollView}
        >
          <View style={styles.profileCardWrapper}>
            <PatientProfileCard
              profileImage={null}
              firstName={'WILLIAM'}
              lastName={'HORNE'}
              status={'Discharged'}
              gender={'Male'}
              dob={'09/14/1938'}
              admissionDate={'03/12/2026 09:56 PM'}
              citizenship={'N/A'}
              maritalStatus={'Married'}
              language={'English'}
            />
          </View>

          <View style={styles.sectionTitleAndLinkWrapper}>
            <CustomText
              style={[styles.sectionTitle, { color: Colors.textHighContrast }]}
            >
              Contacts
            </CustomText>
            <Link
              label="View All"
              labelColor={Colors.boysenberry}
              // onPress={() => navigation.navigate('Grid View Products')}
            />
          </View>
          <View style={styles.contactCardWrapper}>
            {contactList.map(item => {
              return (
                <ContactItemCard
                  key={item.id}
                  itemName={item.name}
                  itemNameColor={Colors.textHighContrast}
                  itemNumber={item.phone}
                  itemNumberColor={Colors.textHighContrast}
                  itemEmail={item.email}
                  itemEmailColor={Colors.textHighContrast}
                  itemRelation={item.relation}
                  itemRelationColor={Colors.boysenberry}
                  relationBackgroundColor={Colors.lightPurple}
                  itemRole={item.role}
                  itemRoleColor={Colors.textHighContrast}
                />
              );
            })}
            <View style={styles.addButtonComponentWrapper}>
              <ButtonDashOutlined
                icon={
                  <FeatherIcons
                    name="plus-circle"
                    size={moderateScale(18)}
                    color={Colors.boysenberry}
                  />
                }
                buttonHeight={moderateScale(40)}
                backgroundColor={Colors.lightPurple}
                label="Add Contact"
                borderColor={Colors.boysenberry}
                labelColor={Colors.boysenberry}
                fontSize={RFValue(8.5)}
              />
            </View>
          </View>

          <View style={styles.sectionTitleWrapper}>
            <CustomText
              style={[styles.sectionTitle, { color: Colors.textHighContrast }]}
            >
              Patient Profile
            </CustomText>
          </View>

          <View style={styles.patientProfileWrapper}>
            {patientProfileData.map((item, index) => {
              return (
                <PatientProfileItemCard
                  key={item.id}
                  title={item.title}
                  value={item.value}
                  image={item.image}
                  titleColor={Colors.textHighContrast}
                  valueColor={Colors.textHighContrast}
                  isLastItem={index === patientProfileData.length - 1}
                />
              );
            })}
          </View>

          <View style={styles.viewAllDetailsButtonWrapper}>
            <ButtonDashOutlined
              icon={
                <FeatherIcons
                  name="arrow-right-circle"
                  size={moderateScale(20)}
                  color={Colors.boysenberry}
                />
              }
              buttonHeight={moderateScale(48)}
              backgroundColor={Colors.lightPurple}
              label="View All Details"
              borderColor={Colors.boysenberry}
              labelColor={Colors.boysenberry}
              fontSize={RFValue(10)}
              onPress={() => {
                navigation.navigate('TopTabNavigator');
              }}
            />
          </View>
        </ScrollView>
      </View>
    </CustomSafeAreaView>
  );
};

export default PatientDetailScreen;
