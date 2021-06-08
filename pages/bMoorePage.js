const { browser, element, Key } = require('protractor')
const BASE_URL = 'https://www.benjaminmoore.com/en-us'

class BMPage {
  constructor() {
    this.navItem = element(
      by.css(
        'div#global-navigation div.navbar-center.hidden-xs.hidden-sm a:nth-child(1)'
      )
    )
    this.navSubItem = undefined
  }

  async visit() {
    await browser.get(BASE_URL)
  }

  async setnavSubItem() {
    return (this.navSubItem = await element(
      by.css('div#megamenu-color-modal div.modal-body ul li:nth-child(2) a')
    ))
  }
  async hoverOverNavItem() {
    await browser.actions().mouseMove(this.navItem).click().perform()
    await browser.sleep(5000)
    return await this.setnavSubItem()
  }
  async customClick(element) {
    await element.click()
  }
  async selectCell(i, j) {
    return await element(
      by.css(
        `div.row.find-your-color div div.row.color-link-cards div div:nth-child(${i}) div:nth-child(${j}) a`
      )
    )
  }

  async openLinkInNewTab(element) {
    await browser.actions().mouseMove(element).perform()
    await browser
      .actions()
      .keyDown(Key.CONTROL)
      .keyDown(Key.SHIFT)
      .click(element)
      .perform()
  }

  async customSwitchTo(originalWindow) {
    const windows = await browser.getAllWindowHandles()
    windows.forEach(async (handle) => {
      if (handle != originalWindow) {
        await browser.switchTo().window(handle)
      }
    })
  }
}
module.exports = new BMPage()
