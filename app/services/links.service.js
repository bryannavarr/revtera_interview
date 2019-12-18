// const Hacker = require('../models/hacker')
const fs = require("fs")
const stringify = require('json-stringify-safe')

module.exports = {
  readAll: readAll,
  readAsIs: readAsIs,
  create: create,
  // update: update,
  // delete: _delete
}

function readAll() {
  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + '/records.json', (err, data) => {
      err ? reject(err) : resolve(JSON.parse(data))
      // console.log("Json data, no parsing: " + data)
      // err ? reject(err) : resolve(data)
      // let links = JSON.parse(data);
      // console.log(links);
      // return links
    })
  })
}

function readAsIs() {
  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + '/records.json', (err, data) => {
      console.log("Json Data, no parsing : " + data)
      err ? reject(err) : resolve(data)


    })
  })
}

function create(model) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(__dirname + '/records.json', JSON.stringify(model, undefined, 4), function (err) {
      console.log("File save successful !!!:::::::::")
      err ? reject(err) : resolve("SUCCESS")
    });
  })
}

// var readFilePromise = function (file) {
//     return new Promise(function () {
//         fs.readFile(file, function (err, data) {
//             if (err) {
//                 notOk(err)
//             } else {
//                 ok(data)
//             }
//         })
//     })
// }

// function readById(id) {
//     return conn.db().collection('hackers').findOne({ _id: new ObjectId(id) })
//         .then(hacker => {
//             hacker._id = hacker._id.toString() // convert ObjectId back to string
//             return hacker
//         })
// }

// function create(model) {
//     return conn.db().collection('hackers').insert(model)
//         .then(result => result.insertedIds[0].toString()) // "return" generated Id as string
// }

// function update(id, doc) {
//     // convert string id used outside of MongoDB into ObjectId needed by MongoDB
//     doc._id = new ObjectId(doc._id)

//     return conn.db().collection('hackers').replaceOne({ _id: new ObjectId(id) }, doc )
//         .then(result => Promise.resolve()) // "return" nothing
// }

// function _delete(id) {
//     return conn.db().collection('hackers').deleteOne({ _id: new ObjectId(id) })
//         .then(result => Promise.resolve()) // "return" nothing
// }
