const { PROFILE_CLIENT } = require('../utils/constantes');
const commonService = require('./common-service');

async function findRestaurants(params){
    return commonService.find(params, 'utilisateur');
}

module.exports = {findRestaurants};