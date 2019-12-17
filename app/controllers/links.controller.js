const responses = require('../models/responses');
const linksService = require('../services/links.service');
const apiPrefix = '/api/links';

module.exports = {
    readAll: readAll,
    readAsIs: readAsIs
    // readById: readById,
    // create: create,
    // update: update,
    // delete: _delete
}

function readAll(req, res) {
    // console.log("Inside readall();")
    linksService.readAll().then(links => {
        // const parsedLinks = JSON.pa
        // console.log("Response from server as is: " + links)
        // console.log("response from server: " + JSON.stringify(links))
        const responseModel = new responses.ItemsResponse()
        responseModel.items = links

        res.json(responseModel)
    })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        });
}

function readAsIs(req, res) {
    linksService.readAsIs().then(json => {
        const responseModel = new responses.ItemsResponse()
        responseModel.items = json
        res.json(responseModel)
    }).catch(err => {
        console.log(err)
        res.status(500).send(new responses.ErrorResponse(err))
    })
}

