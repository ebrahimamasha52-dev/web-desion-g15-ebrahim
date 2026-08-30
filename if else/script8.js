function looping(startNum, endNum, breakNum, contNum) {
  if (arguments.length < 4) {
    alert("Please enter your number");
    return;
  }

  for (let i = startNum; i <= endNum; i++) {
    if (i === contNum) {
      continue;
    }
    
    if (i === breakNum) {
      break;
    }

    console.log(i);
  }
}

looping(1, 9, 7, 3);