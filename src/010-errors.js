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

// Error - мы можем создать custom Error

;(async() => {
  try {
    throw new ValidationError('val err')
  } catch(err) {
    console.log('instanceof Error', err instanceof Error)
    console.log('instanceof ValidationError', err instanceof ValidationError)
    console.log('instanceof NotValidationError', err instanceof NotValidationError)

    console.error(err)
  }
})()

/*
ValidationError: val err
    at /home/nik/projects/webinar/node-stream-errors/src/010-errors.js:19:11
    at Object.<anonymous> (/home/nik/projects/webinar/node-stream-errors/src/010-errors.js:27:3)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

*/
