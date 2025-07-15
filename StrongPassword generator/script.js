const lowerCaseAlphabets="abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphates="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Numbers="1234567890";
const Symbols="!@#$%^&*()_+{}:?/.,><;'";
let symbolsCombination = "";
let generatedPassword = "";


function passwordGeneretor(lengthOfPassWord, lowerCase, upperCase, numbers, symbols) {
    let symbolsCombination = "";
    let generatedPassword = "";

    symbolsCombination += lowerCase ? lowerCaseAlphabets : "";
    symbolsCombination += upperCase ? upperCaseAlphates : "";
    symbolsCombination += numbers ? Numbers : "";
    symbolsCombination += symbols ? Symbols : "";

    if (lengthOfPassWord === 0) {
        return "password length must be at least 1";
    } else if (symbolsCombination.length <= 0) {
        return "at least 1 set of character must be selected";
    }
    else if(isNaN(lengthOfPassWord)){
        return "only number is allowed";
    }
     else {
        for (let i = 0; i < lengthOfPassWord; i++) {
            let index = Math.floor(Math.random() * symbolsCombination.length);
            generatedPassword += symbolsCombination[index];
        }
        return generatedPassword;
    }
}
const btn=document.getElementById("button");
const psLength=document.getElementById("input").value;
let lower=document.getElementById("lower");
let upper=document.getElementById("upper");
let num=document.getElementById("number");

btn.addEventListener("click", function () {
    const psLength = Number(document.getElementById("input").value);
    const lower = document.getElementById("lower").checked;
    const upper = document.getElementById("upper").checked;
    const num = document.getElementById("number").checked;
    const sym = document.getElementById("symbols").checked;

    const password = passwordGeneretor(psLength, lower, upper, num, sym);
    let display = document.getElementById("show");
    display.innerHTML = `Your PassWord : ${password}`;
});
