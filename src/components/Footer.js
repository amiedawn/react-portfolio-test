import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SocialIcon } from 'react-native-elements';

class Footer extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center'}}></Text>
            <View style={{ flex: 1, flexDirection: 'row'}}>
             <View style={{ width: '100%' }}>
              <SocialIcon
                title="Email"
                button
                type="envelope"
                onPress={() => {
                  alert('Envelope');
                }}
              />
            </View>

            <View style={{ flexDirection: 'column'}}>
              <SocialIcon 
                type='facebook'
                onPress={() => {
                  alert('facebook');
                }}
              />
              <Text style={{ textAlign: 'center' }}></Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
		          <SocialIcon
                type="github"
                onPress={() => {
                alert('github');
                }}
              />
              <Text style={{ textAlign: 'center' }}>GitHub</Text>
            </View>  

            <View style={{ flexDirection: 'column' }}>
              <SocialIcon
                type="linkedin"
                onPress={() => {
                alert('linkedin');
                }}
              />
              <Text style={{ textAlign: 'center' }}>Linkedin</Text>
            </View>
          </View>  
        </View>
      </ScrollView>
    )
  }
}

export default Footer;
