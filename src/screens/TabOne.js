import _ from 'lodash';
import {Alert, StyleSheet,ScrollView, ActivityIndicator} from 'react-native';
import React,{useState} from 'react'
import {Colors, Typography, View, ActionBar, PageControl, Carousel,ProgressBar,Text,Button,ConnectionStatusBar} from 'react-native-ui-lib';
import cameraSelected from '../../assets/icons/cameraSelected.png';
import video from '../../assets/icons/video.png';
import tags from '../../assets/icons/tags.png';
import collections from '../../assets/icons/collections.png';
import richText from '../../assets/icons/richText.png';
import {AnimatedImage} from 'react-native-ui-lib';


export default function TabOne() {
    const [currentPage, setCurrentPage] = useState(0)
    const [isConnected, setIsConnected] = useState(true)
    const SampleImages = [
      'https://static.pexels.com/photos/50721/pencils-crayons-colourful-rainbow-50721.jpeg',
      'https://static.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg',
    ];
    const ButtonSpace = 20;
  return (
    <View flex bg-$backgroundNeutralLight>
        <PageControl
          containerStyle={[styles.pageControl, styles.absoluteContainer]}
          numOfPages={6}
          currentPage={currentPage}
          color={Colors.$backgroundInverted}
          size={15}
        />
        <Carousel
          containerStyle={{flex: 1}}
          onChangePage={currentPage => setCurrentPage({currentPage})}
          initialPage={currentPage}
        >
          <View style={styles.page}>
            <ActionBar
              actions={[
                {label: 'Delete', onPress: () => alert('delete'), $textDangerLight: true},
                {label: 'Replace Photo', onPress: () => alert('replace photo'),},
                {label: 'Edit', onPress: () => alert('edit')}
              ]}
            />
            <ScrollView >
        {_.map(SampleImages, (image, index) => (
          <AnimatedImage
            containerStyle={{backgroundColor: Colors.blue50, marginBottom: 10}}
            style={{resizeMode: 'cover', height: 250}}
            source={{uri: image}}
            loader={<ActivityIndicator />}
            key={index}
            animationDuration={index === 0 ? 300 : 800}
          />
        ))}
      <Text style={{textAlign:'center',fontSize:20,fontWeight:'800',marginTop:50}}>This is Action Bar slide menu Right &#10140;</Text>

      </ScrollView>

          </View>

          <View style={styles.page}>
            <ActionBar
              backgroundColor={Colors.$backgroundPrimaryHeavy}
              actions={[
                {label: 'Hide', onPress: () => alert('hide'), $textDefaultLight: true},
                {label: 'Buttons', onPress: () => alert('Buttons'), $textDefaultLight: true},
                {label: 'Duplicate', onPress: () => alert('duplicate'), $textDefaultLight: true}
              ]}
            />
            <View style={{marginTop:20}}>
              {/* <Text style={{textAlign:'center'}}>ProgressBar</Text>
            <ProgressBar progress={55} progressColor={Colors.red30}/> */}
            <Text style={{textAlign:'center',fontSize:15}}>Buttons</Text>
            
            <Button
              backgroundColor="#FB3C62"
              label="Get 3 Months Free"
              borderRadius={7}
              style={{height: 45, marginBottom: ButtonSpace}}
            />

            <Button label={'Disabled'} disabled style={{marginBottom: ButtonSpace}}/>


            <Button
              backgroundColor="#439F4F"
              label="MOVE TO BAG"
              size={Button.sizes.small}
              borderRadius={0}
              text90
              labelStyle={{fontWeight: '500', letterSpacing: -0.5}}
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              backgroundColor="#3C9BF0"
              label="Follow"
              size={Button.sizes.small}
              borderRadius={3}
              text90
              labelStyle={{fontWeight: '500'}}
              style={{marginBottom: ButtonSpace}}
            />

            <Text style={{textAlign:'center'}}>Do you have it in small?</Text>
            <Button label={'Default'} style={{marginBottom: ButtonSpace}}/>
            <Button label={'Medium'} size={Button.sizes.medium} style={{marginBottom: ButtonSpace}}/>
            <Button label={'Small'} size={Button.sizes.small} style={{marginBottom: ButtonSpace}}/>
            <Button label={'xSmall'} size={Button.sizes.xSmall} style={{marginBottom: ButtonSpace}}/>
            <Button label={'This is a button with long text'} style={{marginBottom: ButtonSpace}}/>

            <Button
              outline
              outlineColor={Colors.$backgroundInverted}
              label="SHOP HOLIDAY"
              borderRadius={0}
              size={Button.sizes.medium}
              text60
              $textDefault
              labelStyle={{fontWeight: '700', letterSpacing: 4}}
              style={{borderWidth: 3, marginBottom: ButtonSpace}}
            />
            </View>
            
          </View>

          <View style={styles.page}>
            <ActionBar actions={[{label: 'ConnectionStatusBarScreen', $textDangerLight: true}]}/>
            <View style={{marginTop:40}}>

            <View style={{
              marginTop:200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  }}>
        <ConnectionStatusBar
          onConnectionChange={isConnected => setIsConnected(isConnected)}
        />
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 10,
            ...Typography.text60,
            color: Colors.grey40
          }}
        >
          Turn your wifi on/off to see the component in action
        </Text>
        <Text style={{...Typography.text40}}>
          {isConnected ? 'Connected! :)' : 'No connection :('}
        </Text>
      </View>

            </View>
          </View>

          <View style={styles.page}>
            <ActionBar centered actions={[{label: 'Send as Contact'}, {label: 'Archive Chat'}]}/>
            <View style={{marginTop:40}}>
              <Text style={{textAlign:'center'}}>ProgressBar</Text>
            <ProgressBar progress={55} progressColor={Colors.red30}/>
            </View>
          </View>

          <View style={styles.page}>
            <ActionBar
              centered
              actions={[
                {label: 'Bold', labelStyle: {color: Colors.$textDefault, ...Typography.text60, fontWeight: '400'}},
                {label: 'Italic', text60: true, labelStyle: {fontStyle: 'italic', color: Colors.$textDefault}},
                {label: 'Link', text60: true, labelStyle: {textDecorationLine: 'underline', color: Colors.$textDefault}}
              ]}
            />
          </View>

          <View style={styles.page}>
            <ActionBar
              centered
              actions={_.map([cameraSelected, video, tags, collections, richText], iconSource => ({
                iconSource,
                iconStyle: {width: 25}
              }))}
            />
          </View>
        </Carousel>
      </View>
  )
}

const styles = StyleSheet.create({
    page: {
      flex: 1
    },
    pageControl: {
      zIndex: 1
    },
    absoluteContainer: {
      position: 'absolute',
      bottom: 150,
      left: 0,
      right: 0
    },
    
  });