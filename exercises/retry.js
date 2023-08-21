// Retry 

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            primitiveMultiply(a, b)
            break;
          } catch (e) {
            if (!e instanceof MultiplicatorUnitFailure) {
                console.log("Correct error")
            } else {
                throw e
            }
          }
    }
}

console.log(reliableMultiply(8, 8));
// → 64