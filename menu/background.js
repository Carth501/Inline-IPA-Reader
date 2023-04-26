
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.contextMenus.create(
  {
    id: "log-selection",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["selection"],
  },
  onCreated
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "log-selection":
      attemptReading(info.selectionText);
      break;
    // …
  }
});

function attemptReading(text) {
  const regex = /[pbtdʈɖcɟkɡqɢʔmɱnɳɲŋɴʙrʀⱱɾɽɸβfvθðszʃʒʂʐçʝxɣχʁħʕhɦɬɮʋɹɻjɰlɭʎʟʘǀǃǂǁɓɗʄɠʛʼiyɨʉɯuɪʏʊeøɘɵɤoəɛœɜɞʌɔæɐaɶɑɒʍwɥʜʢʡɕʑɺɧ͜͡ˈˌːˑ̆|‖.‿̥̬ʰ̹̜̟̠̩̯̈̽˞̤̰̼ʷʲˠˤ̴̝̞̘̙̪̺̻̃ⁿˡ̋̚˥̌˩́˦̂̄˧᷄̀˨᷅̏᷈]+/;
  if(regex.test(text)){
    makeRequest(text);
  }
  else {
    console.log('test failed ' + text);
  }
}

function makeRequest(text) {
  const Http = new XMLHttpRequest();
  const url='https://iawll6of90.execute-api.us-east-1.amazonaws.com';
  Http.open('POST', url);
  Http.send({"text":text,"voice":"Salli"});
}