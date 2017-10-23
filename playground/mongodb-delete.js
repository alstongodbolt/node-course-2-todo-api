const {MongoClient, ObjectId} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })

//   db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//     console.log(result)
//   })

//   db.collection('Users').deleteMany({name: 'Alston Godbolt'}).then((result) => {
//     console.log(result)
//   })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectId('59eaaaff319f642181d00132')}).then((result) => {
            console.log(JSON.stringify(result, undefined, 2))
        })
  // db.close()
})
