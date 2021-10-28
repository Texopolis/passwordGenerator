const lowerCase= 'abcdefghijklmnopqrstuvwxyz'
const upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const alphaSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numSet   = '1234567890'
const specialSet='!@#$%^&*()?/*-+'
const output= document.getElementById('container-output')
const clearBtn = document.getElementById('clearBtn')
const genRandom = document.getElementById('genRandom')
const copy= document.getElementById('copy')
let numLowerCase= document.getElementById('inputLowerCase')
let numUpperCase= document.getElementById('inputUpperCase')
let numNumbers= document.getElementById('inputNumbers')
let numSpecial= document.getElementById('inputSpecial')
let lowerAlpha=''
let upperAlpha=''
let integer=''
let special=''
let newPass=''



let getRandomLowerAlpha=(letters)=>{
  lowerAlpha=''
  for (let i=0; i<letters; i++) {
    let index=Math.floor(Math.random()*lowerCase.length)
    let x =lowerCase.at(index)
    lowerAlpha += x
  }
  display()
}

let getRandomUpperAlpha=(letters)=>{
  upperAlpha=''
  for (let i=0; i<letters; i++) {
    let index=Math.floor(Math.random()*upperCase.length)
    let x =upperCase.at(index)
    upperAlpha += x
  }
  display()
}

let getRandomNum=(numbers)=>{
  integer=''
  for (let i=0; i<numbers; i++) {
    let index=Math.floor(Math.random()*numSet.length)
    let x =numSet.at(index)
    integer += x
  }
  display()
}

let getRandomSpecial=(specials)=>{
  special=''
  for (let i=0; i<specials; i++) {
    let index=Math.floor(Math.random()*specialSet.length)
    let x =specialSet.at(index)
    special += x
  }
  display()
}

let shuffle = (str) => {
  var a = str.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("")
}

let display=()=>{
  document.getElementById('copy').style.display='inline-block'
  newPass=''
  newPass=shuffle(lowerAlpha+upperAlpha+integer+special)
  output.innerHTML=`<div>${newPass}</div>`
}

let allClear = ()=>{
  lowerAlpha=''
  upperAlpha=''
  integer=''
  special=''
  newPass=''
  numLowerCase.value=''
  numUpperCase.value=''
  numNumbers.value=''
  numSpecial.value=''
  document.getElementById('tooltip').style.display='none'
  display()
}

let generateRandom = ()=>{
  // btnOnClick(genRandom)
  allClear()
  getRandomLowerAlpha(6)
  getRandomUpperAlpha(2)
  getRandomNum(2)
  getRandomSpecial(2)
  numLowerCase.value=6
  numUpperCase.value=2
  numNumbers.value=2
  numSpecial.value=2
  display()

}

// let btnOnClick=(buttonClicked)=>{
//   buttonClicked.style.transform="scale(50%)"
// }

copy.addEventListener('click', async event => {
  if (!navigator.clipboard) {
    return
  }
  const text = output.innerText
  try {
    await navigator.clipboard.writeText(text)
    document.getElementById('copy').style.display='none'
    document.getElementById('tooltip').style.display='inline-block'
  } catch (err) {
    console.error('Failed to copy!', err)
  }
})

clearBtn.addEventListener('click', allClear)
genRandom.addEventListener('click',  generateRandom)


