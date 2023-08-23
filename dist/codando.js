"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('the application crashed', 500);
//# sourceMappingURL=codando.js.map