import React, { useState, useRef } from 'react'
import CForm from './cardcomponents/form/CForm'
import Card from './cardcomponents/card/Card'

const defaultCardNo = '#### #### #### ####'
const defaultCardHolderName = 'FULL NAME'
const defaultCardMonth = ''
const defaultCardYear = ''
const defaultCardCvv = ''

const MainScreen = () => {
  const initialState = {
    cardNumber: defaultCardNo,
    cardHolder: defaultCardHolderName,
    cardMonth: defaultCardMonth,
    cardYear: defaultCardYear,
    cardCvv: defaultCardCvv,
    isCardFlipped: false,
    currentFocusedElm: null
  }
  const [state, setState] = useState(initialState)

  const updateStateValue = ({ name, value }) => {
    setState({
      ...state,
      [name]: value || initialState[name]
    })
  }

  const {
    cardNumber,
    cardHolder,
    cardMonth,
    cardYear,
    cardCvv,
    isCardFlipped
  } = state
  const { currentFocusedElm } = state

  // References for the Form Inputs
  const formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef()
  }

  const onCardElementClick = (key) => {
    focusFormFieldByKey(key)
  }

  const focusFormFieldByKey = (key) => {
    formFieldsRefObj[key].current.focus()
  }

  // This are the references for the Card DIV elements
  const cardElementsRef = {
    cardNumber: null,
    cardHolder: null,
    cardDate: null
  }

  const onCardFormInputFocus = (_event, inputName) => {
    setState({
      ...state,
      currentFocusedElm: cardElementsRef[inputName]
    })
  }

  const onCardInputBlur = (event) => {
    setState({
      ...state,
      currentFocusedElm: null
    })
  }

  return (
    <div className="wrapper">
      <CForm
        onUpdateStateValue={updateStateValue}
        cardNumberRef={formFieldsRefObj.cardNumber}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardDateRef={formFieldsRefObj.cardDate}
        onCardInputFocus={onCardFormInputFocus}
        onCardInputBlur={onCardInputBlur}
      >
        <Card
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          cardMonth={cardMonth}
          cardYear={cardYear}
          cardCvv={cardCvv}
          isCardFlipped={isCardFlipped}
          currentFocusedElm={currentFocusedElm}
          onCardElementClick={onCardElementClick}
          cardNumberRef={(node) => (cardElementsRef.cardNumber = node)}
          cardHolderRef={(node) => (cardElementsRef.cardHolder = node)}
          cardDateRef={(node) => (cardElementsRef.cardDate = node)}
        ></Card>
      </CForm>
    </div>
  )
}

export default MainScreen
