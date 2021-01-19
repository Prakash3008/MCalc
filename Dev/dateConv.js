import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../static/styles';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class dateConv extends Component{

    constructor(props){
        super(props);
        this.state = {fdate: "",tdate: "", year: null, month: null, day: null, hour: null,
                        min: null, sec: null}
    }
    

    findDiff = () =>{
        if(this.state.fdate !== "" && this.state.tdate !== ""){
            let dt1 = moment(this.state.fdate, 'DD-MM-YYYY');
            let dt2 = moment(this.state.tdate, 'DD-MM-YYYY');
            let secDiff = Math.abs(dt2.diff(dt1, 'seconds'));
            let minDiff = Math.abs(dt2.diff(dt1, 'minutes'));
            let hourDiff = Math.abs(dt2.diff(dt1, 'hours'));
            let dayDiff = Math.abs(dt2.diff(dt1, 'days'));
            let monDiff = Math.abs(dt2.diff(dt1, 'months'));
            let yearDiff = Math.abs(dt2.diff(dt1, 'years'));
            this.setState({ sec: secDiff });
            this.setState({ min: minDiff });
            this.setState({ hour: hourDiff });
            this.setState({ day: dayDiff });
            this.setState({ month: monDiff });
            this.setState({ year: yearDiff });
        }
    }

    render() {
        return(
        <View style={styles.title}>
            <Text style={styles.title}>Difference between Dates</Text>
            <View style={styles.contentsContainer}>
            <DatePicker 
                style={{width: 200}}
                date={this.state.fdate}
                mode="date"
                placeholder="Select From Date"
                format="DD-MM-YYYY"
                minDate="01-01-1970"
                maxDate="01-01-2050"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                    },
                    dateInput: {
                    marginLeft: 36
                    }
                }}
                onDateChange={(date) => {this.setState({fdate: date});
                                        this.findDiff()}}
                />
            </View>
            <View style={styles.contentsContainer}>
            <DatePicker 
                style={{width: 200}}
                date={this.state.tdate}
                mode="date"
                placeholder="Select To Date"
                format="DD-MM-YYYY"
                minDate="01-01-1970"
                maxDate="01-01-2050"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                    },
                    dateInput: {
                    marginLeft: 36
                    }
                }}
                onDateChange={(date) => {this.setState({tdate: date});
                                        this.findDiff()}}
                />
            </View>
                <Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                <Text style={styles.textStyle}>Years : {this.state.year} </Text>
                <Text style={styles.textStyle}>Months : {this.state.month} </Text>
                <Text style={styles.textStyle}>Days : {this.state.day} </Text>
                <Text style={styles.textStyle}>Hours : {this.state.hour} </Text>
                <Text style={styles.textStyle}>Minutes : {this.state.min} </Text>
                <Text style={styles.textStyle}>Seconds : {this.state.sec} </Text>
        </View>
        )
    }
}

export default dateConv;