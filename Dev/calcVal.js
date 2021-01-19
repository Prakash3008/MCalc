import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../static/styles';
import {std, variance} from 'mathjs'

class calcVal extends Component{
    constructor(props){
        super(props);
        this.state = { userInput:'', lcm:null, gcd: null,  sd: null, variance: null, list: [] }
    }

    twoGCD = (x,y) => {
        x = Math.abs(x);
        y = Math.abs(y);
        while(y){
            let v = y;
            y = x % y;
            x = v;
        }
        return x;
    }

    calcGCD = () => {
        let inputArr = this.state.list.map(i=>Number(i));
        let len,a,b;
        len = inputArr.length;
        if(!len){
            return null;
        }
        a=inputArr[0];
        for(let i=1; i < len; i++){
            b=inputArr[i];
            a= this.twoGCD(a,b);
        }
        this.setState({ gcd: parseInt(a) });
    }

    calcLCM = () => {
        let inputArr = this.state.list.map(i=>Number(i));
        let r = 0, t = 0, len = inputArr.length;
        for(let i=0; i< len; i++){
            r = inputArr[i] %inputArr[i+1];
            if(r === 0){
                inputArr[i+1] = (inputArr[i] * inputArr[i+1]) / inputArr[i+1];
            }
            else{
                t = inputArr[i+1] % r;
                if(t === 0){
                    inputArr[i+1] = (inputArr[i] * inputArr[i+1]) / r;
                }
                else{
                    inputArr[i+1] = (inputArr[i] * inputArr[i+1]) / t;
                }
            }
        }
        this.setState({ lcm: parseInt(inputArr[len-1])})
    }

    calcVAR = () => {
        let inputArr = this.state.list.map(i=>Number(i));
        let final = variance(inputArr);
        let sd = std(inputArr);
        this.setState({ sd: parseFloat(sd).toFixed(3)  })
        this.setState({ variance: parseFloat(final).toFixed(3) })

    }

    calcALL = () => {
        this.calcGCD();
        this.calcLCM();
        this.calcVAR();
    }

    addVal = () => {
        if (this.state.userInput !== '') {
            this.state.list.push(this.state.userInput);
            console.log(this.state.list)
            this.setState(this.state.list.map(r => <Text>{r},</Text>));
            this.setState({userInput: ""})
        }
    }

    remVal = () => {
        this.setState({ list: []})
        this.setState({userInput: ""})
    }


    validateText = (text) => {
        this.setState({userInput: text.replace(/,/g,'')})
    }


    render() {
        return(
            <View style={styles.title}>
            <Text style={styles.title}>Math Calculations</Text>
            <Text>{"\n"}</Text>
            <View style={styles.contentsContainer}>
            <TextInput
                placeholder="Enter here"
                style={styles.textStyle2}
                value= {this.state.userInput}
                onChangeText={this.validateText}
                maxLength={5}
                keyboardType='numeric'
                />
                <View style={styles.space} />
                    <Button
                    onPress={this.addVal}
                    title="ADD"
                    color="#2196F3"
                    />
                    <View style={styles.space} />
                    <Button
                    onPress={this.remVal}
                    title="REMOVE"
                    color="#2196F3"
                    />
                </View>      
                <Text>{"\n"}</Text>
                <Text style={styles.textStyle}>[{this.state.list.map(r => <Text>{r},</Text>)}]</Text>
                
            <View style={styles.contentsContainer}>
                <Button
                    onPress={this.calcALL}
                    title="Calculate"
                    color="#2196F3"
                    />
            </View>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.textStyle}>LCM : {this.state.lcm} </Text>
            <Text style={styles.textStyle}>GCD : {this.state.gcd} </Text>
            <Text style={styles.textStyle}>Standard Deviation : {this.state.sd} </Text>
            <Text style={styles.textStyle}>Variance : {this.state.variance} </Text>
            </View>
            )}

}

export default calcVal;