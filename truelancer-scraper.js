const express = require('express');
const axios = require('axios')
const fs = require('fs');
const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');

;(async () => {

  const browser = await puppeteer.launch({ headless: true });;
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(40000);
  await page.goto('https://www.airtasker.com/u/auth/?initialScreen=login&redirectPath=%2Fau%2F').catch(function(reason) {
    console.log("error",reason)
  });

  await page.waitForSelector('input[placeholder="Email"]').catch(function(reason) {
    console.log("error",reason)
  });

  await page.type('input[placeholder="Email"]','julianbullmagic@gmail.com').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('input[placeholder="Password"]','Oiuykjh7').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[type="submit"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

  await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=web%20app&badges=&sort_by=recommended')
  .catch(function(reason) {
    console.log("error",reason)
  });

  await page.waitForSelector('a.new-task-list-item').catch(function(reason) {
    console.log("error",reason)
  });

    // scroll selector into view
    await page.evaluate(selector => {
        const element = document.querySelector(selector);
        if ( element ) {
            element.scrollTop = element.offsetHeight*10;
            console.error(`Scrolled to selector ${selector}`);
        } else {
            console.error(`cannot find selector ${selector}`);
        }
    }, 'div[class="list vertical-scroll"]').catch(function(reason) {
      console.log("error",reason)
    });
    await page.waitFor(5000)

  hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
  .catch(function(reason) {
  console.log("error",reason)
  });
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
  hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
  hrefs=hrefs.slice(0,10)
  console.log(hrefs)

  await page.waitFor(5000)
  console.log(hrefs)
  for (let ref of hrefs){
  await page.goto(ref).catch(function(reason) {
    console.log("error",reason)
  });
  console.log(ref)
  await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText)
  console.log(buttontext)
  if(buttontext=="Make an offer"){
    await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
      console.log("error",reason)
    });
    await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
      console.log("error",reason)
    });
    // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
    //   console.log("error",reason)
    // });
    // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
    //   console.log("error",reason)
    // });
    await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
      console.log("error",reason)
    });
    await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
      console.log("error",reason)
    });
    await page.type('textarea[class="comm-text comment-input"]',`Hi, I've been a professional web developer for about 5 years. I make intuitive, fast, applications for all devices. I try to give my customers about as much control as possible without them needing to write code. The process is heavily consultative, my clients have three opportunties to request changes to the final draft. We can integrate content management systems to allow people to easily update content, images, text, videos etc and other superficial aspects of the app.`).catch(function(reason) {
        console.log("error",reason)
      });
    await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
      console.log("error",reason)
    });
    await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
      console.log("error",reason)
    });
    await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
      console.log("error",reason)
    });
  }
  await page.waitFor(5000)
}

await page.waitFor(5000)
await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=web%20application&badges=&sort_by=recommended')
.catch(function(reason) {
  console.log("error",reason)
});
await page.waitForSelector('a.new-task-list-item').catch(function(reason) {
  console.log("error",reason)
});

  // scroll selector into view
  await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if ( element ) {
          element.scrollTop = element.offsetHeight*10;
          console.error(`Scrolled to selector ${selector}`);
      } else {
          console.error(`cannot find selector ${selector}`);
      }
  }, 'div[class="list vertical-scroll"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
.catch(function(reason) {
console.log("error",reason)
});
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
hrefs=hrefs.slice(0,10)

await page.waitFor(5000)
console.log(hrefs)
for (let ref of hrefs){
await page.goto(ref).catch(function(reason) {
  console.log("error",reason)
});
console.log(ref)
await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
  console.log("error",reason)
});
const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText).catch(function(reason) {
  console.log("error",reason)
});
console.log(buttontext)
if(buttontext=="Make an offer"){
  await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
  //   console.log("error",reason)
  // });
  // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
  //   console.log("error",reason)
  // });
  await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('textarea[class="comm-text comment-input"]',
  `Hi, I've been a professional web developer for about 5 years. I make intuitive, fast, applications for all devices. I try to give my customers about as much control as possible without them needing to write code. The process is heavily consultative, my clients have three opportunties to request changes to the final draft. We can integrate content management systems to allow people to easily update content, images, text, videos etc and other superficial aspects of the app.`).catch(function(reason) {
      console.log("error",reason)
    });
  await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
}
await page.waitFor(5000)
}

await page.waitFor(5000)
await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=web%20development&badges=&sort_by=recommended')
.catch(function(reason) {
  console.log("error",reason)
});
await page.waitForSelector('a.new-task-list-item')
.catch(function(reason) {
  console.log("error",reason)
});
  // scroll selector into view
  await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if ( element ) {
          element.scrollTop = element.offsetHeight*10;
          console.error(`Scrolled to selector ${selector}`);
      } else {
          console.error(`cannot find selector ${selector}`);
      }
  }, 'div[class="list vertical-scroll"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
.catch(function(reason) {
console.log("error",reason)
});
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
hrefs=hrefs.slice(0,10)

await page.waitFor(5000)
console.log(hrefs)
for (let ref of hrefs){
await page.goto(ref).catch(function(reason) {
  console.log("error",reason)
});
console.log(ref)
await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
  console.log("error",reason)
});
const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText).catch(function(reason) {
  console.log("error",reason)
});
console.log(buttontext)
if(buttontext=="Make an offer"){
  await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
  //   console.log("error",reason)
  // });
  // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
  //   console.log("error",reason)
  // });
  await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('textarea[class="comm-text comment-input"]',
`Hi, I've been a professional web developer for about 5 years. I make intuitive, fast, applications for all devices. I try to give my customers about as much control as possible without them needing to write code. The process is heavily consultative, my clients have three opportunties to request changes to the final draft. We can integrate content management systems to allow people to easily update content, images, text, videos etc and other superficial aspects of the app.`).catch(function(reason) {
      console.log("error",reason)
    });
  await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
}
await page.waitFor(5000)
}

await page.waitFor(5000)
await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=shoppify&badges=&sort_by=recommended')
.catch(function(reason) {
  console.log("error",reason)
});
await page.waitForSelector('a.new-task-list-item')
.catch(function(reason) {
  console.log("error",reason)
});
  // scroll selector into view
  await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if ( element ) {
          element.scrollTop = element.offsetHeight*10;
          console.error(`Scrolled to selector ${selector}`);
      } else {
          console.error(`cannot find selector ${selector}`);
      }
  }, 'div[class="list vertical-scroll"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
.catch(function(reason) {
console.log("error",reason)
});
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
hrefs=hrefs.slice(0,10)

await page.waitFor(5000)
console.log(hrefs)
for (let ref of hrefs){
await page.goto(ref).catch(function(reason) {
  console.log("error",reason)
});
console.log(ref)
await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
  console.log("error",reason)
});
const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText).catch(function(reason) {
  console.log("error",reason)
});
console.log(buttontext)
if(buttontext=="Make an offer"){
  await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
  //   console.log("error",reason)
  // });
  // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
  //   console.log("error",reason)
  // });
  await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('textarea[class="comm-text comment-input"]',
`Hi, I've been a professional web developer for about 5 years. I make intuitive, fast, applications for all devices. I try to give my customers about as much control as possible without them needing to write code. The process is heavily consultative, my clients have three opportunties to request changes to the final draft. We can integrate content management systems to allow people to easily update content, images, text, videos etc and other superficial aspects of the app.`).catch(function(reason) {
      console.log("error",reason)
    });
  await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
}
await page.waitFor(5000)
}

await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=website&badges=&sort_by=recommended')
.catch(function(reason) {
  console.log("error",reason)
});
await page.waitForSelector('a.new-task-list-item').catch(function(reason) {
  console.log("error",reason)
});

  // scroll selector into view
  await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if ( element ) {
          element.scrollTop = element.offsetHeight*10;
          console.error(`Scrolled to selector ${selector}`);
      } else {
          console.error(`cannot find selector ${selector}`);
      }
  }, 'div[class="list vertical-scroll"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
.catch(function(reason) {
console.log("error",reason)
});
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
hrefs=hrefs.slice(0,10)

await page.waitFor(5000)
console.log(hrefs)
for (let ref of hrefs){
await page.goto(ref)
console.log(ref)
await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
  console.log("error",reason)
});
const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText).catch(function(reason) {
  console.log("error",reason)
});
console.log(buttontext)
if(buttontext=="Make an offer"){
  await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
  //   console.log("error",reason)
  // });
  // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
  //   console.log("error",reason)
  // });
  await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('textarea[class="comm-text comment-input"]',
`Hi, I've been a professional web developer for about 5 years. I make intuitive, fast, applications for all devices. I try to give my customers about as much control as possible without them needing to write code. The process is heavily consultative, my clients have three opportunties to request changes to the final draft. We can integrate content management systems to allow people to easily update content, images, text, videos etc and other superficial aspects of the app.`).catch(function(reason) {
      console.log("error",reason)
    });
  await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
}
await page.waitFor(5000)
}

await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=wordpress&badges=&sort_by=recommended')
.catch(function(reason) {
  console.log("error",reason)
});
await page.waitForSelector('a.new-task-list-item')
.catch(function(reason) {
  console.log("error",reason)
});
  // scroll selector into view
  await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if ( element ) {
          element.scrollTop = element.offsetHeight*10;
          console.error(`Scrolled to selector ${selector}`);
      } else {
          console.error(`cannot find selector ${selector}`);
      }
  }, 'div[class="list vertical-scroll"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
.catch(function(reason) {
console.log("error",reason)
});
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
hrefs=hrefs.slice(0,10)

await page.waitFor(5000)
console.log(hrefs)
for (let ref of hrefs){
await page.goto(ref).catch(function(reason) {
  console.log("error",reason)
});
console.log(ref)
await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
  console.log("error",reason)
});
const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText).catch(function(reason) {
  console.log("error",reason)
});
console.log(buttontext)
if(buttontext=="Make an offer"){
  await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
  //   console.log("error",reason)
  // });
  // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
  //   console.log("error",reason)
  // });
  await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('textarea[class="comm-text comment-input"]',
`Hi, I've been a professional web developer for about 5 years. I make intuitive, fast, applications for all devices. I try to give my customers about as much control as possible without them needing to write code. The process is heavily consultative, my clients have three opportunties to request changes to the final draft. We can integrate content management systems to allow people to easily update content, images, text, videos etc and other superficial aspects of the app.`).catch(function(reason) {
      console.log("error",reason)
    });
  await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
}
await page.waitFor(5000)
}

await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=webscraper&badges=&sort_by=recommended')
.catch(function(reason) {
  console.log("error",reason)
});
await page.waitForSelector('a.new-task-list-item')
.catch(function(reason) {
  console.log("error",reason)
});
  // scroll selector into view
  await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if ( element ) {
          element.scrollTop = element.offsetHeight*10;
          console.error(`Scrolled to selector ${selector}`);
      } else {
          console.error(`cannot find selector ${selector}`);
      }
  }, 'div[class="list vertical-scroll"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
.catch(function(reason) {
console.log("error",reason)
});
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
hrefs=hrefs.slice(0,10)

console.log(hrefs)

await page.waitFor(5000)
console.log(hrefs)
for (let ref of hrefs){
await page.goto(ref).catch(function(reason) {
  console.log("error",reason)
});
console.log(ref)
await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
  console.log("error",reason)
});
const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText).catch(function(reason) {
  console.log("error",reason)
});
console.log(buttontext)
if(buttontext=="Make an offer"){
  await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
  //   console.log("error",reason)
  // });
  // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
  //   console.log("error",reason)
  // });
  await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('textarea[class="comm-text comment-input"]',
  `Hi, I've been a professional web developer for about 5 years. I can scrape any data you need from the internet. I often use Puppeteer to gather information online.`).catch(function(reason) {
      console.log("error",reason)
    });
  await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
}
await page.waitFor(5000)
}

await page.goto('https://www.airtasker.com/tasks/?task_states=posted%2Cassigned%2Ccompleted%2Coverdue%2Cclosed&lat=-33.896562&lon=151.152527&location_name=Petersham%20NSW%2C%20Australia&radius=60000&categories=&task_types=both&max_price=9999&min_price=5&search_term=web%20scraping&badges=&sort_by=recommended')
.catch(function(reason) {
  console.log("error",reason)
});
await page.waitForSelector('a.new-task-list-item')
.catch(function(reason) {
  console.log("error",reason)
});
  // scroll selector into view
  await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if ( element ) {
          element.scrollTop = element.offsetHeight*10;
          console.error(`Scrolled to selector ${selector}`);
      } else {
          console.error(`cannot find selector ${selector}`);
      }
  }, 'div[class="list vertical-scroll"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitFor(5000)

hrefs=await page.$$eval('a.new-task-list-item', as => as.map(a => a.href))
.catch(function(reason) {
console.log("error",reason)
});
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ionic'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('android'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ios'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('phone'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('c++'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('spreadsheet'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('python'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ruby'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('ssl'))
hrefs=hrefs.filter(item=>!item.toLowerCase().includes('clean'))
hrefs=hrefs.slice(0,10)

console.log(hrefs)

await page.waitFor(5000)
console.log(hrefs)
for (let ref of hrefs){
await page.goto(ref).catch(function(reason) {
  console.log("error",reason)
});
console.log(ref)
await page.waitForSelector('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
  console.log("error",reason)
});
const buttontext = await page.$eval('button[data-ui-test="payment-panel-button-cta"]', el => el.innerText).catch(function(reason) {
  console.log("error",reason)
});
console.log(buttontext)
if(buttontext=="Make an offer"){
  await page.click('button[data-ui-test="payment-panel-button-cta"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('input[data-ui-test="currency-prefix-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  // await page.click('input[data-ui-test="currency-prefix-input"]',{ clickCount: 3 }).catch(function(reason) {
  //   console.log("error",reason)
  // });
  // await page.type('input[data-ui-test="currency-prefix-input"]',"250").catch(function(reason) {
  //   console.log("error",reason)
  // });
  await page.click('div[class="modal_footer__ModalFooter-sc-13bly3k-0 enFiYc"] button').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('textarea[class="comm-text comment-input"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.type('textarea[class="comm-text comment-input"]',
  `Hi, I've been a professional web developer for about 5 years. I can scrape any data you need from the internet. I often use Puppeteer to gather information online.`).catch(function(reason) {
      console.log("error",reason)
    });
  await page.click('button[data-ui-test="continue-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.waitForSelector('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
  await page.click('button[id="ui-test-submit-button"]').catch(function(reason) {
    console.log("error",reason)
  });
}
await page.waitFor(5000)
}
})()
