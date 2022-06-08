
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Button from'./src/components/Button'
import Display from './src/components/Display'

const initialState = {
  displayValue : '0',
  clearDisplay: false,
  operation: null,
  values: [ 0 , 0 ],
  current: 0
}

export default class App extends Component {

  state = {
    ...initialState
  }
  addDigits = n => {
    if(n === '.' && this.state.displayValue.includes('.'))
    {
      return 0
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }
  
  setOperation = operation => {

  }
    render(){
        return(
            <View style={styles.container}>
              <Display value={this.state.displayValue}/>
              <View style={styles.buttons}>
                <Button label='AC' triple onClick={this.clearMemory}/>
                <Button label='/' operation onclick={this.setOperation}/>
                <Button label='7' onClick={this.addDigits}/>
                <Button label='8' onClick={this.addDigits}/>
                <Button label='9' onClick={this.addDigits}/>
                <Button label='*' operation onclick={this.setOperation}/>
                <Button label='4' onClick={this.addDigits}/>
                <Button label='5' onClick={this.addDigits}/>
                <Button label='6' onClick={this.addDigits}/>
                <Button label='-' operation onclick={()=>this.setOperation}/>
                <Button label='1' onClick={this.addDigits}/>
                <Button label='2' onClick={this.addDigits}/>
                <Button label='3' onClick={this.addDigits}/>
                <Button label='+' operation onclick={this.setOperation}/>
                <Button label='0' onClick={this.addDigits}/>
                <Button label='.' onClick={this.addDigits}/>
                <Button label='=' double onclick={this.setOperation}/>
              </View>
            </View>

        )}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection:'row',
    flexWrap:'wrap'

  }
});


