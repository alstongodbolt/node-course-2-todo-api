const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectId('59ed56551fa0d9e58cc83679')
//   }, {
//     $set: {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result)
//   })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('59ed4b31c3404d150934a82c')
  }, {
    $set: {
      name: 'Alston'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })
  // db.close()
})
