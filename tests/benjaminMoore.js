'use strict'

const { browser } = require('protractor')
const bmPage = require('../pages/bMoorePage')

describe('Testing', () => {
  beforeEach(async () => {
    await bmPage.visit()
  })

  it('hover over Color nav item', async () => {
    await browser.sleep(5000)
    let element = await bmPage.hoverOverNavItem()
    //console.log(await element.getText())
    await bmPage.customClick(element)
    await browser.sleep(5000)
    const row = 2
    const col = 1
    element = await bmPage.selectCell(row, col)
    //console.log(await element.getText())
    await bmPage.customClick(element)
    await browser.sleep(10000)
  })
})
