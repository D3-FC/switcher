import { Switcher } from './Switcher'

function createDiv () {
  return document.createElement('div')
}

function createButton () {
  return document.createElement('div')
}

function prepareDom(){
  const container = createDiv()
  container.id = 'div1'
  container.innerHTML = ' <div class="test" id="switchable" data-switchable="switchable-1" data-switchable-class="switchable-class"></div><button id="switcher" data-switcher="switchable-1"></button>'
  document.body.appendChild(container)
}

describe('Switcher', () => {
  it('init', done => {

    const asyncExpression = async () => {

      prepareDom()

      const switcher = Switcher.makeDefault()
      const button = document.getElementById('switcher')

      button.click()
      
      const switchableElement = document.getElementById('switchable')
      expect(switchableElement.classList.contains('switchable-class')).toBe(true)
      done()
    }

    asyncExpression()
  })

})
