let outputScreen = document.getElementById("output");

const display = (num) => {
  outputScreen.value += num;
};

function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
}

const Clear = () => {
  outputScreen.value = "";
};

const Del = () => {
  outputScreen.value = outputScreen.value.slice(0, -2);
};
