import _ from 'lodash';
import React,{useState} from 'react';
import {Alert,StyleSheet} from 'react-native';
import {Chip, Colors, Spacings, Text, Typography, View, Dialog, WheelPickerDialog, Image} from 'react-native-ui-lib';


export default function TabTwo() {
  const avatarImage = {
    uri: 'https://randomuser.me/api/portraits/women/24.jpg'
  };
  const checkmark = require('../../assets/icons/check-small.png');
  const chevron = require('../../assets/icons/chevronDown.png');
  const bell = require('../../assets/icons/bell.png');

  const colors = [
    {value: Colors.red10, label: 'Red'},
    {value: Colors.blue10, label: 'Blue'},
    {value: Colors.purple10, label: 'Purple'},
    {value: Colors.green10, label: 'Green'},
    {value: Colors.yellow10, label: 'Yellow'}
  ];

  // state = {
  //   showDialog: false,
  //   selectedValue: this.colors[2].label
  // };
  const [showDialog, setShowDialog] = useState(false)
  const [selectedValue, setSelectedValue] = useState(colors[2].label)


  const toggleDialog = (showDialog) => {
    setShowDialog(showDialog);
  };

  const openDialog = () => {
    toggleDialog(true);
  };

  const closeDialog = () => {
    toggleDialog(false);
  };

  const onSelect = (itemValue) => {
    const values = _.filter(colors, {value: itemValue});
    if (values.length > 0) {
      setSelectedValue( values[0].label);
    }
    closeDialog();
  };

  const renderItem = (color) => {
    return (
      <Text text50 margin-20 color={color.value}>
        {color.label}
      </Text>
    );
  };

  const renderContent = () => {

    return (
      <WheelPickerDialog
        items={colors}
        selectedValue={selectedValue}
        onSelect={onSelect}
        onCancel={closeDialog}
        wheelPickerProps={{
          style: {width: 200}
        }}
      />
    );
  };

  const renderPickerDialog = () => {

    return (
      <Dialog visible={showDialog} useSafeArea bottom onDismiss={closeDialog}>
        {renderContent()}
      </Dialog>
    );
  };

  const renderExample = (text,chip) => {
    return (
      <View row spread marginB-12>
        <Text text70 $textDefault>{text}</Text>
        {chip}
      </View>
    );
  };
  return (
    <View style={{padding: 20}}>
        {showDialog && renderPickerDialog()}
        <Text marginB-20 text40 $textDefault>
          Chip
        </Text>
        <Text marginB-10 text70BO $textDefault>
          Default
        </Text>
        {renderExample('Label', <Chip label={'Chip'}/>)}
        {renderExample('Label + onPress', <Chip label={'Chip'} onPress={() => Alert.alert('onPress')}/>)}
        {renderExample('Label + onDismiss',
          <Chip
            label={'Chip'}
            iconProps={{tintColor: Colors.$iconDefault}}
            onDismiss={() => Alert.alert('onDismiss')}
            onPress={() => Alert.alert('onPress')}
            dismissIconStyle={{width: 10, height: 10}}
          />)}
        {renderExample('Icon',
          <Chip
            iconSource={checkmark}
            iconStyle={{width: 24, height: 24}}
            iconProps={{tintColor: Colors.$iconDefault}}
          />)}
        {renderExample('Left icon',
          <Chip
            label={'Chip'}
            iconSource={checkmark}
            iconStyle={{width: 24, height: 24}}
            iconProps={{tintColor: Colors.$iconDefault}}
          />)}
        {renderExample('Right icon + onPress + dynamic label',
          <Chip
            label={selectedValue}
            rightIconSource={chevron}
            iconStyle={{margin: 8}}
            onPress={openDialog}
          />)}
        {renderExample('Label + Avatar', <Chip label={'Chip'} avatarProps={{source: avatarImage, size: 20}}/>)}
        {renderExample('Label + Counter',
          <Chip
            label={'Chip'}
            labelStyle={{
              marginRight: undefined
            }}
            useCounter
            badgeProps={{
              label: '4',
              labelStyle: {
                ...Typography.text80R,
                color: Colors.$textNeutralHeavy
              }
            }}
          />)}
        {renderExample('Label + Badge',
          <Chip
            label={'Chip'}
            badgeProps={{
              label: '4',
              backgroundColor: 'red'
            }}
          />)}

        <Text marginT-20 marginB-10 text70BO $textDefault>
          Custom
        </Text>
        <View center row>
          <Chip
            label={'Chip'}
            labelStyle={{color: Colors.green20}}
            iconSource={checkmark}
            iconProps={{tintColor: Colors.green20}}
            containerStyle={{borderColor: Colors.green20}}
          />
          <Chip
            iconSource={checkmark}
            label={'Chip'}
            labelStyle={{color: Colors.white}}
            iconProps={{tintColor: Colors.white}}
            containerStyle={{borderColor: Colors.green20, backgroundColor: Colors.green20, marginLeft: Spacings.s3}}
          />
          <Chip
            resetSpacings
            borderRadius={22}
            label={'Chip'}
            labelStyle={{color: Colors.red20, marginHorizontal: Spacings.s3, ...Typography.text70BO}}
            iconStyle={{width: 16, height: 16}}
            avatarProps={{source: avatarImage, size: 28}}
            onDismiss={() => Alert.alert('onDismiss')}
            dismissIconStyle={{width: 10, height: 10, marginRight: Spacings.s3}}
            dismissColor={Colors.red20}
            containerStyle={{
              borderColor: Colors.red20,
              borderBottomRightRadius: 0,
              marginLeft: Spacings.s3
            }}
          />
          <Chip
            resetSpacings
            label={'Chip'}
            labelStyle={{marginRight: Spacings.s1}}
            badgeProps={{
              label: '44',
              backgroundColor: Colors.$backgroundDefault,
              borderWidth: 2,
              borderColor: Colors.$backgroundInverted,
              labelStyle: {color: Colors.$textDefault}
            }}
            containerStyle={{
              borderWidth: 0,
              marginLeft: Spacings.s3
            }}
          />
        </View>
        <View center row marginT-10>
          <Chip
            rightElement={<Image tintColor={Colors.yellow30} source={bell} width={24} height={24}/>}
            label={'Chip'}
          />
          <Chip
            marginL-s3
            rightElement={<Image tintColor={Colors.green20} source={bell} width={20} height={20}/>}
            leftElement={<Image tintColor={Colors.green20} source={bell} width={20} height={20}/>}
            label={'Chip'}
          />
          <Chip
            marginL-s3
            leftElement={
              <View center row marginL-s1>
                <Image tintColor={Colors.blue30} source={bell}/>
                <Image tintColor={Colors.blue30} source={bell} width={20} height={20}/>
                <Image tintColor={Colors.blue30} source={bell} width={24} height={24}/>
              </View>
            }
            label={'Chip'}
          />
          <Chip
            marginL-s3
            paddingR-s2
            rightIconSource={chevron}
            rightElement={<Image tintColor={Colors.red30} source={bell} width={20} height={20}/>}
            label={'Chip'}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});