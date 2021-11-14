import './App.css';
import React from "react";
import ShowUsers from "./ShowUsers";
import User from "./User";
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users:[{
        "id": 1,
        "name": "Pierre",
        "surname": "Croall",
        "email": "pcroall0@edublogs.org",
        "age": 15
      }, {
        "id": 2,
        "name": "Dougy",
        "surname": "Gogin",
        "email": "dgogin1@creativecommons.org",
        "age": 36
      }, {
        "id": 3,
        "name": "Maren",
        "surname": "Arnecke",
        "email": "marnecke2@state.gov",
        "age": 15
      }, {
        "id": 4,
        "name": "Laurence",
        "surname": "Beldam",
        "email": "lbeldam3@toplist.cz",
        "age": 25
      }, {
        "id": 5,
        "name": "Staford",
        "surname": "Brasher",
        "email": "sbrasher4@goo.gl",
        "age": 36
      }, {
        "id": 6,
        "name": "Cathrin",
        "surname": "Beames",
        "email": "cbeames5@webmd.com",
        "age": 39
      }, {
        "id": 7,
        "name": "Sax",
        "surname": "Camamill",
        "email": "scamamill6@over-blog.com",
        "age": 40
      }, {
        "id": 8,
        "name": "Victoir",
        "surname": "Penwell",
        "email": "vpenwell7@discuz.net",
        "age": 32
      }, {
        "id": 9,
        "name": "Shelba",
        "surname": "Gouch",
        "email": "sgouch8@imgur.com",
        "age": 19
      }, {
        "id": 10,
        "name": "Salmon",
        "surname": "Dreger",
        "email": "sdreger9@ftc.gov",
        "age": 23
      }, {
        "id": 11,
        "name": "Terry",
        "surname": "Keningham",
        "email": "tkeninghama@addtoany.com",
        "age": 32
      }, {
        "id": 12,
        "name": "Earvin",
        "surname": "Kerner",
        "email": "ekernerb@freewebs.com",
        "age": 36
      }, {
        "id": 13,
        "name": "Hildegarde",
        "surname": "Halliday",
        "email": "hhallidayc@over-blog.com",
        "age": 26
      }, {
        "id": 14,
        "name": "Danny",
        "surname": "Palffrey",
        "email": "dpalffreyd@dedecms.com",
        "age": 20
      }, {
        "id": 15,
        "name": "Ashby",
        "surname": "Giblin",
        "email": "agibline@about.com",
        "age": 17
      }]
    }
  }
  render() {
    return (
        <div>
          <ShowUsers users={this.state.users} />
          <User />
        </div>

    )
  }
}


export default App;
