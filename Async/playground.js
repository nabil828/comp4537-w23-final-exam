function doStep1(init) {
  return new Promise((resolve) => {
    const result = init + 10;
    resolve(result);
  });
}

function doStep2(init) {
  return new Promise((resolve) => {
    const result = init + 2;
    resolve(result);
  });
}

function doStep3(init) {
  return new Promise((resolve) => {
    const result = init + 3;
    resolve(result);
  });
}

async function doOperation() {
  try {
    const result1 = await doStep1(0);
    const result2 = await doStep2(result1);
    const result3 = await doStep3(result2);
    console.log(`result: ${result3}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

doOperation();
