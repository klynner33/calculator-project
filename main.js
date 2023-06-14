const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        calculator.parseInput(value);
    })

    const calculator = {
        displayText: '0',
        prevTotal: null,

        parseInput(value) {
            
            switch (value) {
                case '=':
                    break; 
                case 'AC':
                    break;
                case '.':
                    break;
                default:
            }
        },

        addText(value) {
            if (this.displayText === '0') {
                this.displayText = ''
            } else if (this.prevTotal !== null) {
                this.displayText = this.prevTotal
                this.prevTotal = null
            }
            if () {

            } 
            this.displayText += value
        
        }
    }


// 
// const numberButtons = document.querySelectorAll('[data-number]')
// const operatorButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const clearButton = document.querySelector('[data-all-clear]')
// const deleteButton = document.querySelector('[data-delete]')
// const currentOperand = document.querySelector('[data-current-operand]')
// const previousOperand = document.querySelector('[data-previous-operand]')


// numberButtons.forEach(button => {
//     button.addEventListener('click', display)
// })
// operatorButtons.forEach(button => {
//     button.addEventListener('click', () => currentOperand.innerText += button.innerText)
// })
// equalsButton.addEventListener('click', () => console.log(equalsButton.innerText))

// clearButton.addEventListener('click', () => currentOperand.innerText = '')
// deleteButton.addEventListener('click', () => currentOperand.innerText = '')


// function display() {
//     currentOperand.innerText += ('.number').innerText
//     // console.log('hi')
// }






// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }    
        
//         clear() {
//             this.currentOperand = ''
//             this.previousOperand = ''
//             this.operation = undefined
//         }
        
//         delete() {
//             this.currentOperand = this.currentOperand.toString().slice(0, -1)
//           }
    
//         appendNumber(number) {
//             if(number === '.' && this.currentOperand.includes('.')) return
//             this.currentOperand = this.currentOperand.toString() + number.toString()
//         }

//         chooseOperation(operation) {
//             if (this.currentOperand === '') return
//             if (this.previousOperand !== '') {
//                 this.compute()
//             }
//             this.operation = operation
//             this.previousOperand = this.currentOperand
//             this.currentOperand = ''
//         }

//         compute() {
//             let computation
//             const prev = Number(this.previousOperand)
//             const current = Number(this.currentOperand)
//             if (isNaN(prev) || isNaN(current)) return
//             switch (this.operation) {
//                 case '+': 
//                     computation = prev + current
//                     break
//                 case '-':
//                     computation = prev - current
//                     break
//                 case 'x':
//                     computation = prev * current
//                     break
//                 case '/': 
//                     computation = prev / current
//                     break
//                 default: 
//                     return
//             }
//             this.currentOperand = computation
//             this.operation = undefined
//             this.previousOperand = ''
//         }

//         updateDisplay() {
//             this.currentOperandTextElement.innerText = this.currentOperand
//             if (this.operation != null) {
//               this.previousOperandTextElement.innerText = 
//                 `${this.previousOperand} ${this.operation}`
//             }
            
//         }
// }

// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
// })

// allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
// })

// deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
//   })

