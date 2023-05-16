const {Cricle , Square, Triangle} = require('./shapes')

describe('Triangle',()=>{
    test('setColor should equale to fill color',() => {
    const shape = new Triangle()
    shape.setColor("blue")
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    })
})
describe('Square',()=>{
    test('setColor should equale to fill color',() => {
    const shape = new Square()
    shape.setColor("red")
    expect(shape.render()).toEqual(' <rect x="73" y="40" width="160" height="160" fill="red" />')
    })
})
describe('Cricle',()=>{
    test('setColor should equale to fill color',() => {
    const shape = new Cricle()
    shape.setColor("black")
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" />')
    })
})