const responses = require('../models/responses');
const linksService = require('../services/links.service');
const apiPrefix = '/api/links';

module.exports = {
    readAll: readAll,
    // readById: readById,
    // create: create,
    // update: update,
    // delete: _delete
}

function readAll(req, res) {
    // console.log("Inside readall();")
    linksService.readAll().then(links => {
        // const parsedLinks = JSON.pa
        console.log("response from server: " + JSON.stringify(links))
        const responseModel = new responses.ItemsResponse()
        responseModel.items = links

        res.json(responseModel)
    })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        });
}

// function readById(req, res) {
//     hackersService.readById(req.params.id)
//         .then(hacker => {
//             const responseModel = new responses.ItemResponse()
//             responseModel.item = hacker
//             res.json(responseModel)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).send(new responses.ErrorResponse(err))
//         })
// }

// function create(req, res) {
//     hackersService.create(req.model)
//         .then(id => {
//             const responseModel = new responses.ItemResponse()
//             responseModel.item = id
//             res.status(201)
//                 .location(`${apiPrefix}/${id}`)
//                 .json(responseModel)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).send(new responses.ErrorResponse(err))
//         })
// }

// function update(req, res) {
//     req.model.updateDate = new Date();
//     hackersService
//         .update(req.params.id, req.model)
//         .then(hacker => {
//             const responseModel = new responses.SuccessResponse()
//             res.status(200).json(responseModel)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).send(new responses.ErrorResponse(err))
//         })
// }

// function _delete(req, res) {
//     hackersService
//     .delete(req.params.id)
//         .then(() => {
//             const responseModel = new responses.SuccessResponse()
//             res.status(200).json(responseModel)
//         })
//         .catch(err => {
//             console.log(err)
//             return res.status(500).send(new responses.ErrorResponse(err))
//         })
// }

