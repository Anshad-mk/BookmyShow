const data = {
 UserCollection :
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "123-456-7890",
    "preferences": {
       "genres": ["Action", "Comedy"],
       "languages": ["English", "Hindi"]
    }
 },
 
 MovieCollection :
 {
    "title": "Avengers: Endgame",
    "synopsis": "The Avengers assemble once more to undo the damage caused by Thanos.",
    "language": "English",
    "release_date": "2019-04-26",
    "duration": 181,
    "ratings": {
       "imdb": 8.4,
       "rotten_tomatoes": 94
    }
 },
 
TheaterCollection : 
 {
    "name": "PVR Cinemas",
    "address": "123 Main Street, Mumbai",
    "phone": "123-456-7890",
    "seating_capacity": 200,
    "screens": [
       {
          "name": "Screen 1",
          "seating_capacity": 100
       },
       {
          "name": "Screen 2",
          "seating_capacity": 80
       },
       {
          "name": "Screen 3",
          "seating_capacity": 120
       }
    ]
 },
 
ShowCollection : 
 {
    "movie": {
       "title": "Avengers: Endgame",
       "language": "English"
    },
    "theater": {
       "name": "PVR Cinemas",
       "address": "123 Main Street, Mumbai"
    },
    "screen": {
       "name": "Screen 1",
       "seating_capacity": 100
    },
    "show_timing": "2019-04-26T20:00:00Z",
    "available_seats": 80
 },
 
BookingCollection :
 {
    "user": {
       "name": "John Doe",
       "email": "john@example.com"
    },
    "show": {
       "movie": {
          "title": "Avengers: Endgame",
          "language": "English"
       },
       "theater": {
          "name": "PVR Cinemas",
          "address": "123 Main Street, Mumbai"
       },
       "screen": {
          "name": "Screen 1",
          "seating_capacity": 100
       },
       "show_timing": "2019-04-26T20:00:00Z"
    },
    "num_seats": 2,
    "total_price": 400
 }
}

{
   show: {
     date: '2023-04-13T05:25:01.493Z',
     time: '9.45',
     SeatNumber: [ 'B2', 'B3' ],
     price: 100,
     TotelPrice: 200
   },
   movie: {
     moviename: 'Shazam ',
     releasedate: '2023-04-19T00:00:00.000Z',
     description: 'Bestowed with the powers of the gods, Billy Batson and his fellow foster kids are still learning how to juggle teenage life with their adult superhero alter egos.',
     poster1: 'https://firebasestorage.googleapis.com/v0/b/bookmyshow-97bea.appspot.com/o/poster%2F89951.jpg?alt=media&token=e22250af-c4e6-4ff2-aa1c-a5f0d38aaf33',
     poster2: 'https://firebasestorage.googleapis.com/v0/b/bookmyshow-97bea.appspot.com/o/poster%2F203210.jpg?alt=media&token=fa49e378-3417-4612-8444-48c43cc56a33',
     poster3: 'https://firebasestorage.googleapis.com/v0/b/bookmyshow-97bea.appspot.com/o/poster%2F349805.jpg?alt=media&token=015bb016-9b49-4935-86a4-010b5599a27c',
     genre: 'Sci-fi/Action',
     language: 'English',
     trailerlink: 'https://www.youtube.com/watch?v=AIc671o9yCI',
     _id: '6429d7c2d05f4beeb10d7c79'
   },
   theater: {
     name: 'PVR KOCHI',
     email: 'mkanshad8@gmail.com',
     address: 'KOCHI',
     screen: {
       name: 'Screen 3',
       seating_capacity: 50,
       row: 10,
       column: 5,
       screen_type: '4D',
       _id: '643571e03c0fd986ec0529bb'
     }
   }
 }
 