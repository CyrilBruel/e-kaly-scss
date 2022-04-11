function error(message){
    return {meta: {status: "error", message: message}};
}

function success(data, message){
    return {meta: {status: "success", message: message}, data: data};
}

module.exports = {error, success};