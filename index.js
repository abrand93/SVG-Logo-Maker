const inquirer = require('inquirer');
const fs = require('fs');
//  const Triangle = require('./lib/shapes')
 const {Cricle , Square, Triangle} = require('./lib/shapes');
const { text } = require('stream/consumers');

const textLenght = (text) =>{
    if(text < 3){
        return 'text must be less then 3 characters'
    }
}
 

const questions= [{
    type: 'input',
    message:'Please enter 3 characters',
    name:'text',
    
},
{
    type: 'input',
    message:'Please enter the color keyword or hexadecimal you like to use for your text',
    name:'colorText'
},
{
    type: 'list',
    message:'Chose a shape',
    name: 'shape',
    choices:['circle','triangle','square']
},
{
    type: 'input',
    message:'Please enter the color keyword or hexadecimal you like to use for your shape background',
    name:'color'
},
]



function RenderShap(shape, color){
    
    if(shape ==='circle'){
      const userShape = new Cricle (
      ) 
      userShape.setColor(color)
      return userShape.render()
     
    
    }else if(shape === 'triangle'){
        const userShape = new Triangle()
        userShape.setColor(color)
        return userShape.render()

    }else{
        const userShape = new Square
        userShape.setColor(color)
        return userShape.render()
    }

}

inquirer
    .prompt(questions)
    .then(data =>{
        fs.writeFile(`logo.svg`,
        `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${RenderShap(data.shape, data.color)}
    
            
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.colorText}">${data.text}</text>
        </svg>
        `, err => err ? console.error(err): console.log('Logo has been succesfully made')) 
        
    })

 