import { thomsonCrossSectionDependencies } from 'mathjs';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import styles from '../static/styles';

class calcSet extends Component {
    constructor(props){
        super(props);
        this.state = {   union:[],intersect:[],suba: [],subb: [], seta: [], setb: [], userInput: [], userInput2: []   }
    }

    addVal1 = () => {
        if (this.state.userInput !== '') {
            this.state.seta.push(this.state.userInput);
            this.setState(this.state.seta.map(r => <Text>{r},</Text>));
            this.setState({userInput: ""})
        }
    }

    remVal1 = () => {
        this.setState({ seta: []})
        this.setState({userInput: ""})
    }

    addVal2 = () => {
        if (this.state.userInput2 !== '') {
            this.state.setb.push(this.state.userInput2);
            this.setState(this.state.setb.map(r => <Text>{r},</Text>));
            this.setState({userInput2: ""})
        }
    }

    remVal2 = () => {
        this.setState({ setb: []})
        this.setState({userInput2: ""})
    }

    calcUnion = () => {
        var a = this.state.seta;
        var b = this.state.setb;
        var res = a.concat(b)
            res = res.filter((item, index) => {
                return (res.indexOf(item) == index)
            })
            this.setState({ union: res })
    }
    calcIntersect = () => {
        var a = this.state.seta;
        var b = this.state.setb;
        var res = a.filter(a => b.includes(a));
            if (res != "") this.setState({ intersect: res })
    }

    calcSubtract = () => {
        var a = this.state.seta;
        var b = this.state.setb;
        var res = a.filter(a => !b.includes(a));
            if (res != "") this.setState({ suba: res })
        var res1 = b.filter(b => !a.includes(b));
            if (res1 != "") this.setState({ subb: res1 })
    }

    calcSet = () => {
        this.calcUnion();
        this.calcIntersect();
        this.calcSubtract();
        }

    validateText1 = (text) => {
        this.setState({userInput: text.replace(/,/g,'')})
        
    }
    validateText2 = (text) => {
        this.setState({userInput2: text.replace(/,/g,'')})
        
    }
    

    render() {
        return (
            <>
                <View style={styles.title}>
                    <Text style={styles.title}>Set Calculations</Text>
                    <View style={styles.contentsContainer}>
                        <TextInput 
                        keyboardType="numeric" 
                        placeholder='Add SET A values' 
                        value={this.state.userInput}
                        style={styles.textStyle2} 
                        onChangeText={this.validateText1} />
                    <View style={styles.space} />
                    <Button
                        onPress={this.addVal1}
                        title='Add'
                        color="#2196F3"
                    />
                    <View style={styles.space} />
                    <Button
                        onPress={this.changer}
                        title='Remove'
                        color="#2196F3"
                        onPress = {this.remVal1}
                    />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <Text style={styles.textStyle}> ({this.state.seta.map(r => <Text>{r},</Text>)})</Text>
                    <View style={styles.contentsContainer}>
                        <TextInput 
                        keyboardType="numeric" 
                        style={styles.textStyle2} 
                        placeholder='Add SET B values' 
                        value={this.state.userInput2} 
                        onChangeText={this.validateText2}  />
                        <Text></Text>
                        <View style={styles.space} />
                    <Button
                        title="Add"
                        color="#2196F3"
                        onPress={this.addVal2}
                    />
                    <View style={styles.space} />
                    <Button
                        title="Remove"
                        color="#2196F3"
                        onPress = {this.remVal2}
                    />
                    </View>
                    <Text></Text>
                    <Text style={styles.textStyle}> ({this.state.setb.map(r => <Text>{r},</Text>)}) </Text>
                    <Text></Text>

                    <Button
                        onPress={this.calcSet}
                        title="calculate"
                        color="#2196F3"
                    />
                    <Text ></Text>
                    <Text ></Text>
                    <View style={styles.textStyle}>
                        <Text style={styles.textStyle}>A U B : ({this.state.union.map(r => <Text>{r},</Text>)}) </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textStyle}>A ∩ B : ({this.state.intersect.map(r => <Text>{r},</Text>)}) </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textStyle}>A - B : ({this.state.suba.map(r => <Text>{r},</Text>)}) </Text>
                    </View>
                    <View style={styles.textStyle}>
                        <Text style={styles.textStyle}>B - A : ({this.state.subb.map(r => <Text>{r},</Text>)}) </Text>
                    </View>
                </View>
            </>
        );
    }
}

export default calcSet;