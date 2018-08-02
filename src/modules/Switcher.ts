export class Switcher {
  switchers: HTMLElement[]
  switcherDataAttr: string
  switchableDataAttr: string
  switchableClassDataAttr: string

  constructor (switcherDataAttr: string, switchableDataAttr: string, switchableClassDataAttr: string) {

    this.switcherDataAttr = switcherDataAttr
    this.switchableDataAttr = switchableDataAttr
    this.switchableClassDataAttr = switchableClassDataAttr
    this.switchers = Array.from(document.querySelectorAll(`[data-${this.switcherDataAttr}]`))

    this.switchers.forEach(switcher => {
      this.addClickListeners(switcher)
    })

  }

  private handleSwitchableClass (switchable: HTMLElement) {
    const switchableClass: string | undefined = switchable.dataset[this.camelize(this.switchableClassDataAttr)]
    if (switchableClass && switchable.classList.contains(switchableClass)) {
      switchable.classList.remove(switchableClass)
    }
    else {
      switchableClass && switchable.classList.add(switchableClass)
    }
  }

  private clickHandler = (e: MouseEvent) => {
    this.handleSwitcherClick(e)
  }

  /**
   * SHOULD BE CALLED ASYNC / AWAIT AFTER CONSTRUCT
   *
   * For example
   * const switcher = Switcher.makeDefault()
   * setTimeout(()=>{
   *  switcher.destroy()
   * }, 0)
   */
  public destroy () {
    this.switchers.forEach(switcher => {
      switcher.removeEventListener('click', this.clickHandler)
    })
  }

  private handleSwitcherClick (e: MouseEvent) {
    const target = <HTMLElement> e.target
    const switchableKey = target.dataset[this.switcherDataAttr]
    const switchable = <HTMLElement> document.querySelector(`[data-${this.switchableDataAttr}="${switchableKey}"]`)
    this.handleSwitchableClass(switchable)
  }

  private addClickListeners (switcher: HTMLElement) {
    switcher.addEventListener('click', this.clickHandler)
  }

  camelize (str: string) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase()
    }).replace(/(\s|-)+/g, '')
  }

  public static makeDefault () {
    return new Switcher('switcher', 'switchable', 'switchable-class')
  }
}
