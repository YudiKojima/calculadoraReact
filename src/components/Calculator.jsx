import { Box } from '@mui/material';
import styles from './Calculator.module.css'
import Container from '@mui/material/Container';
import { useState } from 'react';

function Calculator(){
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        if(num === 0){
            setNum(e.target.value)
        }
        else{
            setNum(num + e.target.value);
        }
    }

    function clearNum(){
        setNum(0);
    }

    function porcentage(){
        setNum(num / 100);
    }

    function handleSinal(){
        if(num>0){
            setNum(-num);
        }
        else{
            setNum(Math.abs(num));
        }
    }

    function handleOperator(e){
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function handleCalculate(){
        if(operator === '/'){
            setNum(parseFloat(oldnum) / parseFloat(num));
        }
        else if(operator === 'X'){
            setNum(parseFloat(oldnum) * parseFloat(num));
        }
        else if(operator === '-'){
            setNum(parseFloat(oldnum) - parseFloat(num));
        }
        else if(operator === '+'){
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

    return (    
        <div>
        <Box m={5}/>
        <Container maxWidth='xs'>
        <div className={styles.wrapper}>
        <Box m={12}/>
        <h1 className={styles.result}>{num}</h1>
        <button onClick={clearNum}>AC</button> 
        <button onClick={handleSinal}>+/-</button>
        <button onClick={porcentage}>%</button> 
        <button className={styles.orange} onClick={handleOperator} value={'/'}>/</button>
        <button className={styles.gray} onClick={inputNum} value={7}>7</button>
        <button className={styles.gray} onClick={inputNum} value={8}>8</button>
        <button className={styles.gray} onClick={inputNum} value={9}>9</button>
        <button className={styles.orange} onClick={handleOperator} value={'X'}>x</button>
        <button className={styles.gray} onClick={inputNum} value={4}>4</button>
        <button className={styles.gray} onClick={inputNum} value={5}>5</button>
        <button className={styles.gray} onClick={inputNum} value={6}>6</button>
        <button className={styles.orange} onClick={handleOperator} value={'-'}>-</button>
        <button className={styles.gray} onClick={inputNum} value={1}>1</button>
        <button className={styles.gray} onClick={inputNum} value={2}>2</button>
        <button className={styles.gray} onClick={inputNum} value={3}>3</button>
        <button className={styles.orange} onClick={handleOperator} value={'+'}>+</button>
        <button className={styles.graySpace} onClick={inputNum} value={0}>0</button>
        <button className={styles.gray} onClick={inputNum} value={'.'}>.</button>
        <button className={styles.orange} onClick={handleCalculate}> =</button>
        </div>
        </Container>
        </div>
    )
}

export default Calculator