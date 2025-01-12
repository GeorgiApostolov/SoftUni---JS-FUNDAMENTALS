function solve(inputStr) {
    let strArr = inputStr.split(`\\`);
    let lastEl = strArr.pop();
    let lastElSplit = lastEl.split(`.`);
    console.log(`File name: ${lastElSplit[0]}`);
    console.log(`File extension: ${lastElSplit[1]}`);
}
solve('C:\\Internal\\training-internal\\Template.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');