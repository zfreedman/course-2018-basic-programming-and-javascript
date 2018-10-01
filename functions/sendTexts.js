// we want to write a function that simulates sending a text message
// ...for right now, it's good enough if that funtion JUST prints
// the text
const sendText = (text, formatter) => {
  const formattedText = formatter(text);
  // send text
  console.log(formattedText);
};

const addSmiley = (text) => {
  return text + " =D";
};

const addPeriod = (text) => {
  return text + ".";
};

const newText = "hey";
sendText(newText, addPeriod);
