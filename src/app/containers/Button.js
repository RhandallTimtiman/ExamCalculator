import React, { useContext } from 'react'
import { CalcContext } from '../provider/CalculatorContext';

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const getStyle = (name) => {
    const className = {
      '0': 'zero-button',
      'x': '',
      '+': '',
      '-': '',
      '/': '',
      '=': '',
    }
    return className[name];
  }

  const periodEvent = () => {
    setCalc(
      {
        ...calc,
        num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
      }
    );
  }

  const resetEvent = () => {
    setCalc(
      {
        sign: '',
        num: 0,
        res: 0,
      }
    );
  }

  const handleClick = () => {
    const numberString = value.toString();
    let numberValue;
    if (numberString === 0 && calc.num === 0) {
      setCalc(
        {
          ...calc,
          num: 0,
        }
      );
    } else if (calc.num === 0 && calc.res !== 0 && calc.sign === '') {
      setCalc(
        {
          ...calc,
          num: value,
          res: 0,
        }
      );
    } else {
      numberValue = Number(calc.num + numberString);
      setCalc(
        {
          ...calc,
          num: numberValue,
        }
      );
    }

  }

  const operationEvent = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    })
  }

  const resultEvent = () => {
    if (calc.res && calc.num) {
      const math = (res, num, sign) => {
        const result = {
          '+': (res, num) => res + num,
          '-': (res, num) => res - num,
          'x': (res, num) => res * num,
          '/': (res, num) => res / num,
        }
        return result[sign](res, num);
      }
      setCalc({
        sign: '',
        res: math(calc.res, calc.num, calc.sign),
        num: 0,
      })
    }
  }

  const percentageEvent = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: '',
    })
  }

  const absoluteValueEvent = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    })
  }

  const handleBtnClick = () => {
    const results = {
      '.': periodEvent,
      'C': resetEvent,
      '/': operationEvent,
      'x': operationEvent,
      '+': operationEvent,
      '-': operationEvent,
      '=': resultEvent,
      '%': percentageEvent,
      '+-': absoluteValueEvent,
    }
    if (results[value]) {
      return results[value]();
    } else {
      return handleClick();
    }
  }

  const buttonStyles = {
    backgroundColor: `white`,
    height: `3.5rem`,
    padding: `10px`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    cursor: `pointer`,
    fontSize: `2rem`,
  }

  return (
    <button onClick={handleBtnClick} style={buttonStyles} className={`${getStyle(value)}`}> {value}</button >
  )
}

export default Button