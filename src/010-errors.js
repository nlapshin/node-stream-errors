class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class NotValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotValidationError";
  }
}

class ExpectableError extends Error {
  constructor(message) {
    super(message);
    this.name = "ExpectableError";
  }
}

class NonExpectableError extends Error {
  constructor(message) {
    super(message);
    this.name = "NonExpectableError";
  }
}

// Наследование ошибок
// Error - общий класс ошибок
// Есть ошибки-ошибки, ожидаемые ошибки(исключение)

;(async() => {
  try {
    throw new NonExpectableError('val err')
  } catch(err) {
    if (err instanceof ExpectableError) {
      console.log('expectable error');
      // res.json().status(400);
    } else {
      console.log('unexpectable error');
      // res.json().status(500);
    }

    // console.log('instanceof Error', err instanceof Error) // true
    // console.log('instanceof ValidationError', err instanceof ValidationError) // true
    //  // false
    // console.log('instanceof NotValidationError', err instanceof NotValidationError)

    // console.error(err)
  }
})()
