'use strict'

const { browser, element, until, Key } = require('protractor')
const bmPage = require('../pages/bMoorePage')

describe('Testing', () => {
  beforeEach(async () => {
    await bmPage.visit()
  })

  it('switch tabs and get url', async () => {
    const originalWindow = await browser.getWindowHandle()
    let currentUrl = await browser.getCurrentUrl()
    console.log('Home URL : ', currentUrl)
    let elem = await bmPage.hoverOverNavItem()
    await browser.sleep(5000)
    await bmPage.openLinkInNewTab(elem)
    await bmPage.customSwitchTo(originalWindow)
    currentUrl = await browser.getCurrentUrl()
    console.log('New Tab URL : ', currentUrl)
    await browser.sleep(5000)
    await browser.wait(
      until.elementsLocated(by.css('.curated-colors.bg-white')),
      50000
    )
    elem = await element(by.css('.curated-colors.bg-white'))
    await browser.executeScript(
      "arguments[0].scrollIntoView({ \
      behavior: 'smooth', \
      block: 'start', \
      inline: 'nearest', \
    })",
      elem
    )
    await browser.sleep(5000)
    for (let i = 0; i < 18; i++) {
      elem = await element(
        by.css(
          `div.curated-colors.bg-white dollop-grid div:nth-child(${
            i + 1
          }) div.dollop-item`
        )
      )
      await browser.actions().mouseMove(elem).perform()
      await browser.sleep(200)
    }
    // elem = await element(
    //   by.css(
    //     `div.curated-colors.bg-white dollop-grid div:nth-child(17)  div.dollop-item `
    //   )
    // )
    // await browser.actions().mouseMove(elem).perform()
    // await browser.sleep(2000)
    // elem = await element(
    //   by.css(
    //     `div.curated-colors.bg-white dollop-grid div:nth-child(18)   div.dollop-item `
    //   )
    // )
    // await browser.actions().mouseMove(elem).perform()
    // await browser.sleep(2000)
    let currentLangCode = currentUrl.split('/')[3]
    console.log('Current Language Code : ', currentLangCode)
    let currentLang = await element(
      by.css('#languages-opener span.text')
    ).getText()
    console.log('Current Language : ', currentLang)

    // let btn = await element(by.css('#languages-opener span'))
    // await browser.executeScript('arguments[0].scrollIntoView(true)', btn)
    // await browser.sleep(5000)
    // await btn.click()
    // let lang = await element(by.css('#languages-menu'))
    // await browser.wait(until.elementIsVisible(lang), 10000)
    // await browser.executeScript(
    //   'arguments[0].setAttribute("target","self")',
    //   lang
    // )
    // await element(by.css('#languages-menu li:nth-child(2)')).click()
    // await browser.sleep(5000)
    // currentLangCode = currentUrl.split('/')[3]
    // console.log('Current Language Code : ', currentLangCode)
    // currentLang = await element(by.css('#languages-opener span.text')).getText()
    // console.log('Current Language : ', currentLang)

    //await browser.sleep(10000)
  })
  // it('hover over Color nav item', async () => {
  //   await browser.sleep(5000)
  //   let element = await bmPage.hoverOverNavItem()
  //   //console.log(await element.getText())
  //   await bmPage.customClick(element)
  //   await browser.sleep(5000)
  //   const row = 2
  //   const col = 1
  //   element = await bmPage.selectCell(row, col)
  //   //console.log(await element.getText())
  //   await bmPage.customClick(element)
  //   await browser.sleep(10000)
  // })
})
