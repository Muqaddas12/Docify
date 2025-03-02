import { Text, View, StyleSheet, Dimensions, Animated, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('screen');

const Navbar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const sidebarAnim = useState(new Animated.Value(-width / 2))[0];

    const toggleSidebar = () => {
        Animated.timing(sidebarAnim, {
            toValue: sidebarVisible ? -width : 0,
            duration: 500,
            useNativeDriver: false,
        }).start();
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={toggleSidebar}>
                    <Icon name={sidebarVisible ? "menuunfold" : "menufold"} size={28} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={styles.title}>Docify</Text>
            </View>

            <Animated.View style={[styles.sidebar,sidebarVisible?styles.sidebarWidth:'', { left: sidebarAnim }]}> 
                <TouchableOpacity style={styles.closeArea} onPress={toggleSidebar} />
                <View style={styles.sidebarContent}>
                    <TouchableOpacity>
                    <Text style={styles.sidebarItem}>Home</Text>
                    </TouchableOpacity>
                   <TouchableOpacity>
                   <Text style={styles.sidebarItem}>Documents</Text>
                   </TouchableOpacity>
                   <TouchableOpacity>
                   <Text style={styles.sidebarItem}>Profile</Text>
                   </TouchableOpacity>
               <TouchableOpacity>
               <Text style={styles.sidebarItem}>Settings</Text>
               </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: width,
        backgroundColor: "#8A7FD3",
    },
    header: {
        minHeight: 60,
        maxHeight:60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 26,
        fontWeight: "bold",
        marginLeft: 20,
    },
    sidebar: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: width / 2,
        backgroundColor: '#F5F5F5',
        zIndex: 1000,
        height:height,
        marginTop:60,
    },
    sidebarWidth:{
        width:width,
        backgroundColor:'transparent'
    },
    closeArea: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: width / 2,
        right: 0,
    },
    sidebarContent: {
        paddingTop:30,
        paddingHorizontal: 20,
        backgroundColor:'#D0C8F0',
        width:width/2,
        height:height,
    },
    sidebarItem: {
        fontSize: 18,
        color: '#5E46B4',
        marginBottom: 20,
    },
});

export default Navbar;
