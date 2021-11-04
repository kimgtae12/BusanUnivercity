import React, { FC, useEffect, useState } from "react";
import { Platform,ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import ToggleSwitch from 'toggle-switch-react-native';

import AlramList from "./AlramList";

import listData from '../notification.json';
import customData from '../../config.json';

const Inquiries = ({langData}) => {

    const inquTitleFir = langData == "ko" ? customData.kor.sub_page5_t1 : customData.eng.sub_page5_t1;
    const inquInfo1 = langData == "ko" ? customData.kor.sub_page5_t1_t1 : customData.eng.sub_page5_t1_t1;
    const inquInfo2 = langData == "ko" ? customData.kor.sub_page5_t1_t2 : customData.eng.sub_page5_t1_t2;

    const inquTitleSec = langData == "ko" ? customData.kor.sub_page4_t1 : customData.eng.sub_page4_t1;

    const inquButtonFir = langData == "ko" ? customData.kor.sub_page4_b1 : customData.eng.sub_page4_b1;
    const inquButtonSec = langData == "ko" ? customData.kor.sub_page4_b2 : customData.eng.sub_page4_b2;
    const inquButtonThr = langData == "ko" ? customData.kor.sub_page4_b3 : customData.eng.sub_page4_b3;

    const inquButInfoFir = langData == "ko" ? customData.kor.sub_page4_b1_t : customData.eng.sub_page4_b1_t;
    const inquButInfoSec = langData == "ko" ? customData.kor.sub_page4_b2_t : customData.eng.sub_page4_b2_t;
    const inquButInfoThr = langData == "ko" ? customData.kor.sub_page4_b2_t : customData.eng.sub_page4_b3_t;


  const [on, setOn] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.inquHead}>
        <Text style={styles.inquTitle}>{inquTitleFir}</Text>
        <Text style={styles.inquInfo}>{inquInfo1}</Text>
        <Text style={styles.inquInfo}>{inquInfo2}</Text>
      </View>
      <View style={styles.inquBody}>
        <Text style={styles.inquTitle}>{inquTitleSec}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.inquButton}>
            <Text style={styles.inquButtonText}>{inquButtonFir}</Text>
        </TouchableOpacity>
        <Text style={styles.btnInquInfo}>{inquButInfoFir}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.inquButton}>
            <Text style={styles.inquButtonText}>{inquButtonSec}</Text>
        </TouchableOpacity>
        <Text style={styles.btnInquInfo}>{inquButInfoSec}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.inquButton}>
            <Text style={styles.inquButtonText}>{inquButtonThr}</Text>
        </TouchableOpacity>
        <Text style={styles.btnInquInfo}>{inquButInfoThr}</Text>
      </View>
    </View>
  );
};
export default Inquiries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#e2e2e2"
  },
  inquHead:{
      paddingTop:20,
      paddingLeft:20,
      paddingRight:20
  },
  inquTitle:{
      fontSize:18,
      color:"black",
      fontWeight:"bold"
  },
  inquInfo:{
      paddingLeft:10,
      paddingRight:10,
      paddingTop:10,
      fontSize:12,
      color:"gray",
      fontWeight:"bold"
  },
  inquBody:{
      padding:20,
  },
  inquButton:{
    width:"100%",
    borderRadius:5,
    backgroundColor:"#4B89DC",
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
    marginBottom:10,
    padding:5
  },
  inquButtonText:{
    color:"white",
    fontSize:18,
    fontWeight:"600"
  },
  btnInquInfo:{
    paddingLeft:10,
    paddingRight:10,
    fontSize:12,
    color:"gray",
    fontWeight:"bold"
  }


});