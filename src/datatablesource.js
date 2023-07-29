export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
];

// //temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "Tony Stark",
//     img: "https://cdn.britannica.com/50/182850-050-8B0F87B3/Robert-Downey-Jr-Iron-Man-film-Tony.jpg",
//     status: "active",
//     email: "tony.stark@avengers.com",
//     age: 45,
//   },
//   {
//     id: 2,
//     username: "Steve Rogers",
//     img: "https://discussingfilm.net/wp-content/uploads/2019/05/0d26c680-9704-11e8-a9be-0a3dd955ac48.jpg",
//     email: "steve.rogers@avengers.com",
//     status: "passive",
//     age: 98,
//   },
//   {
//     id: 3,
//     username: "Natasha Romanoff",
//     img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Scarlett_Johansson_as_Black_Widow.jpg/220px-Scarlett_Johansson_as_Black_Widow.jpg",
//     email: "natasha.romanoff@avengers.com",
//     status: "pending",
//     age: 35,
//   },
//   {
//     id: 4,
//     username: "Bruce Banner",
//     img: "https://hips.hearstapps.com/hmg-prod/images/hulk-thor-ragnarok-2-1548346471.jpg?crop=0.670xw:1.00xh;0.0718xw,0&resize=1200:*",
//     email: "bruce.banner@avengers.com",
//     status: "active",
//     age: 45,
//   },
//   {
//     id: 5,
//     username: "Thor Odinson",
//     img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg",
//     email: "thor.odinson@avengers.com",
//     status: "passive",
//     age: 1500,
//   },
//   {
//     id: 6,
//     username: "Clint Barton",
//     img: "https://www.hollywoodreporter.com/wp-content/uploads/2021/07/MCDAVEN_EC081-H-2021.jpg?w=1296",
//     email: "clint.barton@avengers.com",
//     status: "active",
//     age: 42,
//   },
// ];
