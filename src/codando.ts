function generateError(message: string, code: number) {
    throw {message: message, errorCode: code}
}

generateError('the application crashed', 500)