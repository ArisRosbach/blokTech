exports.utilsDB = async function (client) {
    try {
        await client.connect()

        const database = client.db('userdb')

        const collection = database.collection('users')

        // Stopt de data uit mijn database in een Array
        return collection.find().toArray()


        // // Hier zet ik data in die ik in de database wil hebben.
        // const doc = {
        //     naam: "Beau",
        //     imgSrc: "static/images/hondPoedel.png",
        //     ras: "Poedel",
        //     locatie: "Dierentehuis Alkmaar",
        //     diersoort: "hond",
        // }

        // // De bovenstaande data word met functie inserOne gestop in database.
        // await collection.insertOne(doc).then(event => {
        //     console.log('event', event)
        // })


        // Error, als de database niet doet
    } catch (err) {
        console.log(err)
    }

}