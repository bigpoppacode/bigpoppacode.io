---
title: 'Perscholas updates'
subTitle: 'Per Scholas (In Progress)'
excerpt: 'I want to be the best. I want to be the best simple and plain, thats what drives me - Kobe Bryant'
featureImage: '/img/functions-the-first-frontier.png'
date: '10/28/21'
---
# Sequelize Notes and Labs


## Connect to the Postgres REPL

```
$ psql
```

## Postgres REPL Commands

`\q` Quit Database

`\l` List Databases

`\i` import <filename>

`CREATE DATABASE database_name;` Create a database

`\c database_name` Connect to a database

`\d` Display Relations

`\dt` List tables in database

`CTRL + C` Kill the current command

`CMD + K` Clears the screen

## Create a Table in your schema

```sql
CREATE TABLE table_name (
  id BIGSERIAL PRIMARY KEY,
  column_2 INTEGER,
  column_3 VARCHAR(255),
  column_4 BOOLEAN,
  column_5 INTEGER REFERENCES other_table(id)
);
```

`\d table_name` View table column info

## Find All Columns and Rows in a Table


```sql
SELECT * FROM <table name>;

```

The asterisk or star symbol (`*`) means all columns.

The semi-colon (`;`) terminates the statement like a period in sentence or question mark in a question.

Examples:

```sql
SELECT * FROM books;
SELECT * FROM products;
SELECT * FROM users;
SELECT * FROM countries;
```

## Finding the Data You Want

```sql
SELECT <columns> FROM <table> WHERE <condition>;
```


### Equality Operator

Find all rows that a given value matches a column's value.

```sql
SELECT <columns> FROM <table> WHERE <column name> = <value>;
```

Examples:

```sql
SELECT * FROM contacts WHERE first_name = "Andrew";
SELECT first_name, email FROM users WHERE last_name = "Chalkley";
SELECT name AS "Product Name" FROM products WHERE stock_count = 0;
SELECT title "Book Title" FROM books WHERE year_published = 1999;
```

## Adding a Row to a Table


Inserting a single row:

```sql
INSERT INTO <table> VALUES (<value 1>, <value 2>, ...);
```

This will insert values in the order of the columns prescribed in the schema.

Examples:

```sql
INSERT INTO users VALUES  (1, "chalkers", "Andrew", "Chalkley");
INSERT INTO users VALUES  (2, "ScRiPtKiDdIe", "Kenneth", "Love");

INSERT INTO movies VALUES (3, "Starman", "Science Fiction", 1984);
INSERT INTO movies VALUES (4, "Moulin Rouge!", "Musical", 2001);
```

## Updating All Rows in a Table

An update statement for all rows:

```sql
UPDATE <table> SET <column> = <value>;
```

The `=` sign is different from an equality operator from a `WHERE` condition. It's an _assignment operator_ because you're assigning a new value to something.

Examples:

```sql
UPDATE users SET password = "thisisabadidea";
UPDATE products SET price = 2.99;
```

## Updating Specific Rows

An update statement for specific rows:

```sql
UPDATE <table> SET <column> = <value> WHERE <condition>;
```
Examples:

```sql
UPDATE users SET password = "thisisabadidea" WHERE id = 3;
UPDATE blog_posts SET view_count = 1923 WHERE title = "SQL is Awesome";
```

## Removing Data from All Rows in a Table

To delete all rows from a table:

```sql
DELETE FROM <table>;
```

Examples:

```sql
DELETE FROM logs;
DELETE FROM users;
DELETE FROM products;
```

##  Removing Specific Rows

To delete specific rows from a table:

```sql
DELETE FROM <table> WHERE <condition>;
```

Examples:

```sql
DELETE FROM users WHERE email = "andrew@teamtreehouse.com";
DELETE FROM movies WHERE genre = "Musical";
DELETE FROM products WHERE stock_count = 0;
```

### Pattern Matching

Placing the percent symbol (`%`) any where in a string in conjunction with the `LIKE` keyword will operate as a wildcard. Meaning it can be substituted by any number of characters, including zero!

```sql
SELECT <columns> FROM <table> WHERE <column> LIKE <pattern>;
```

Examples:

```sql
SELECT title FROM books WHERE title LIKE "Harry Potter%Fire";
SELECT title FROM movies WHERE title LIKE "Alien%";
SELECT * FROM contacts WHERE first_name LIKE "%drew";
SELECT * FROM books WHERE title LIKE "%Brief History%";
```

## Counting Results

To count rows you can use the `COUNT()` function.

```sql
SELECT COUNT(*) FROM <table>;
```

To count unique entries use the `DISTINCT` keyword too:

```sql
SELECT COUNT(DISTINCT <column>) FROM <table>;
```

To count aggregated rows with common values use the `GROUP BY` keywords:

```sql
SELECT COUNT(<column>) FROM <table> GROUP BY <column with common value>;
```

## Calculating Averages

To get the average value of a numeric column use the `AVG()` function.

```sql
SELECT AVG(<numeric column>) FROM <table>;
SELECT AVG(<numeric column>) FROM <table> GROUP BY <other column>;
```

## Ordering Columns

Ordering by a single column criteria:

```sql
SELECT * FROM <table name> ORDER BY <column> [ASC|DESC];

```

`ASC` is used to order results in ascending order.

`DESC` is used to order results in descending order.

Examples:

```sql
SELECT * FROM books ORDER BY title ASC;
SELECT * FROM products WHERE name = "Sonic T-Shirt" ORDER BY stock_count DESC;
SELECT * FROM users ORDER BY signed_up_on DESC;
SELECT * FROM countries ORDER BY population DESC;
```
## Set Theory

A set is a collection of things.

### Union

The _Union_ of two sets combines their results; but, eliminates duplicate rows from the result set.

### Intersect

The _Intersection_ between two sets only returns the records that are common from both SELECT statements.

### Except

This is when we want to find the results of one set OR the other but NOT the records that are in both sets.

## SQL Joins

The process of linking tables is called _JOINING_ and SQL provides several kinds of joins, including:
- Inner
- Left
- Right

### Inner Join
This is the most common kind of SQL join.

```sql
SELECT *
FROM students
JOIN states
ON students.state = states.abbr;
```

### Left Join

```sql
SELECT *
FROM students
LEFT JOIN states
ON students.state = states.abbr;
```

### Right Join

```sql
SELECT *
FROM students
RIGHT JOIN states
ON students.state = states.abbr;
```

### Setup Sequelize

```js
// add the sequelize library … it’s a constructor function
const Sequelize = require('sequelize');

// initialize or instantiate the library by creating a variable that is the connection to the database
const db = new Sequelize('database_name_here', {
  dialect: 'postgres',
  define: {
    underscored: true,
    returning: true
  }
});
```

# Defining Many-to-Many Associations in Sequelize

Reference: [Sequelize docs on association](http://docs.sequelizejs.com/en/latest/docs/associations/)

Let’s say we have two models: `Films` and `Festivals`

We know that a film can be shown at many film festivals and that, conversely, a festival can show many films. This is what is known as a **many-to-many relationship.**

Knowing this, we can set up our associations:

## 1. A film can be shown at many festivals - `belongsToMany`

If a film can be shown at many festivals, we can say that it *belongs to many* festivals. In Sequelize, we can write this association as follows:

`Film.belongsToMany(Festival, {through: FestivalFilm} );`

When we use the method `belongsToMany`, Sequelize will create a join table for us holding the foreign keys of the source and target models that we specified. So, in our example above, Sequelize creates a join table for the source (`Film`)  and target (`Festival`). As we specified with the option `through`, the join table is named FestivalFilm, and it holds the  foreign keys `filmId` and `festivalId`.

Furthermore, by using the method  `belongsToMany` , Sequelize will create a series of methods for us that we can use on any instance of the source model (remember, the source model is the model before the dot).

So in our example above, we can now use the methods:

- `film.getFestival`
- `film.setFestival`
- `film.addFestival`
- `film.addFestivals`

Here is an example where we are using the method `setFestival` to associate a festival with a film:
```js
    app.post('/filmFestival', function(req, res, next) {
            Promise.all([
                Film.create(req.body.film),
                Festival.create(req.body.festival)
            ])
            .spread(function(film, festival) {
                    return film.setFestival(associatedFestival); // here we are using the method setFestival
            })
            .then(function(filmWithAssociatedFestival){
                    res.send(filmWithAssociatedFestival);
            })
            .catch(next)
    });
```
## 2. A festival can show many films - `hasMany`

Conversely, we could choose instead to say that since a festival can show many films, it *has many* films. In Sequelize, we can write this association as follows:

`Festival.hasMany(Films)`

When we use the method `hasMany`, Sequelize will add a foreign key for our source to our target model. So, in our example above, Sequelize will add the foreign key `festival_id`  to the `Film`  model.

Furthermore, by using the method  `hasMany`, Sequelize will create a series of methods for us that we can use on any instance of the source model (remember, the source model is the model before the dot).

So in our example above, we can now use the methods:

- `festival.getFilms`
- `festival.setFilms`

## Some important addendums:

1. You should not use use `belongsToMany` and `hasMany` together, because they do fundamentally different things in regards to SQL. In our film-festival example, you could say a `Festival.hasMany(Films)` or that a `Film.belongsToMany(Festival, {through: FestivalFilm} )` **but you should never write both.**

2. You can, however, declare 'symmetric associations' like so:

    `Film.belongsToMany(Festival, { through: 'film_festival' })`

    `Festival.belongsToMany(Film, { through: 'film_festival' })`

    or

   `Film.hasMany(Review)`

    `Review.belongsTo(Film)`

    Although the "redundant" association does nothing new vis-à-vis the SQL tables, it does mean that the other instance gets the "magic" methods.

3. Finally, be cognizant of the difference between many-to-many and many-to-one relationships. Let’s imagine we have have a third model that represents film reviews. We could say that a film has many reviews, but not that a review belongs to many films. A review belongs to only one film. Therefore, reviews and films are a many-to-one relationship, not a many-to-many relationship.

## Getting Started

1. Fork
2. Clone

# Express API - React CRUD

![](/img/StackArchitecture.png)

We've built the backend. Now it's time to build the frontend.

In this project we are going to be using react to build a CRUD frontend to our items json api.

```sh
cd express-api-react
npm install
```

Setup the database config:

config/config.json
```sh
{
  "development": {
    "database": "items_app_development",
    "dialect": "postgres"
  },
  "test": {
    "database": "items_app_test",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
}
```

```sh
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Make sure the data exists:

```sh
psql items_app_development
SELECT * FROM "Items";
```

Make sure the tests pass:

```sh
npx sequelize-cli db:create --env test
npm test
```

Run the server:

```sh
npm start
```

Test the following routes in your browser:

- http://localhost:3000/api/items
- http://localhost:3000/api/items/3

Now open a new tab in the terminal. Make sure you're inside the repo.

Let's create our React app.

```sh
cd express-api-react
npx create-react-app client
```

Let's start by adding [react router]():

```sh
cd client
npm install react-router-dom
```
> Important: Notice how there are two package.json's one in the root of the repo for the server, and the other inside the client folder. Make sure you're inside the client folder. We want to install the react router package so we can use it for the react app.

And now let's setup our app to use react router:

client/index.js
```js
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

Cool. Now let's setup our routes.  A route will render an associated component. Below is the list:

`/` - the homepage, just display a welcome screen. It will render a Home component.

`/items` - the ability to see all items. It will render an Items component.

`/create-item` - the ability to create a new item. It will render an ItemCreate component.

`/items/:id` - the ability to see a specific item. It will render an Item component.

`/items/:id/edit` - the ability to edit an item. It will render an ItemEdit component.

Let's start by creating our empty components:

```sh
cd src
mkdir components
cd components
mkdir routes
touch Home.jsx Item.jsx ItemCreate.jsx ItemEdit.jsx Items.jsx
```

Now let's create our routes:

client/App.js
```js
import React from 'react'
import { Route, withRouter } from 'react-router-dom'

import Items from './components/routes/Items'
import Item from './components/routes/Item'
import ItemEdit from './components/routes/ItemEdit'
import ItemCreate from './components/routes/ItemCreate'
import Home from './components/routes/Home'

const App = props => (
  <React.Fragment>
    <h3>{props.location.state ? props.location.state.msg : null}</h3>
    <Route exact path='/' component={Home} />
    <Route exact path='/items' component={Items} />
    <Route exact path='/create-item' component={ItemCreate} />
    <Route exact path='/items/:id' component={Item} />
    <Route exact path='/items/:id/edit' component={ItemEdit} />
  </React.Fragment>
)

export default withRouter(App)
```

A simple Home component:
src/components/routes/Home.jsx
```js
import React from 'react'
import Layout from '../shared/Layout'

const Home = () => (
  <Layout>
    <h4>Welcome to the items app!</h4>
  </Layout>
)

export default Home
```

Notice the Layout component. We are going to build the Layout component next. This is a shared component that we will re-use multiple times. Essentially, the Layout component is the shell of the web app we are building.

Let's create our "shared" components. The idea of shared components is that anytime we have code that we would repeat in several components (a footer, a navbar, etc), we can wrap that code inside a component and import it in whenever needed.

```sh
cd client/src/components
mkdir shared
touch Layout.jsx Footer.jsx Nav.jsx
```

Let's start with the Layout component:

components/shared/Layout.jsx
```js
import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

const Layout = props => (
  <div>
    <h1>Items App</h1>
    <Nav />

    {props.children}

    <Footer />
  </div>
)

export default Layout
```

> Note: We are using `props.children` here. [React Children](https://reactjs.org/docs/react-api.html#reactchildren) is a placeholder for which ever component calls the component that `props.children` is in. You will see this in action in a minute.

Let's create our Nav component:

components/shared/Nav.jsx
```js
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/items'>Items</NavLink>
    <NavLink to='/create-item'>Create Item</NavLink>
  </nav>
)

export default Nav
```

And the Footer component:

components/shared/Footer.jsx

```js
import React from 'react'

const Footer = () => (
  <p>© Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
)

export default Footer
```

Let's make sure the app is working.

```sh
cd express-api-react
npm start
```

Open a new tab in your terminal and run your client:

```sh
cd client
npm start
```

Open your browser and test the route http://localhost:3001/. The Home component should render but the other links will not work yet because we haven't built them out yet.

Cool. We are done with shared components for now.

Now let's build the Items component.

We will be making an axios call in the Items component to fetch all the Items from the server.

Let's start by installing [axios](https://www.npmjs.com/package/axios). Make sure you're in the client folder.

```sh
cd client
npm install axios
```

> When you run `npm install axios`, make sure you're inside the client folder where the package.json exists.

Now we can build the Items component:

```js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Items extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: []
    }
  }

  async componentDidMount () {
    try {
      const response = await axios(`http://localhost:3000/api/items`)
      this.setState({ items: response.data.items })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    const items = this.state.items.map(item => (
      <li key={item.id}>
        <Link to={`/items/${item.id}`}>{item.title}</Link>
      </li>
    ))

    return (
      <>
        <h4>Items</h4>
        <ul>
          {items}
        </ul>
      </>
    )
  }
}

export default Items
```

Test the http://localhost:3001/items route in your browser.

Good? Great. Let's move on to the Item component.

components/routes/Item.jsx
```js
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from '../shared/Layout'

class Item extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: null,
      deleted: false
    }
  }

  async componentDidMount() {
    try {
      const response = await axios(`http://localhost:3000/api/items/${this.props.match.params.id}`)
      this.setState({ item: response.data.item })
    } catch (err) {
      console.error(err)
    }
  }

  destroy = () => {
    axios({
      url: `http://localhost:3000/api/items/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render() {
    const { item, deleted } = this.state

    if (!item) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/', state: { msg: 'Item succesfully deleted!' } }
      } />
    }

    return (
      <Layout>
        <h4>{item.title}</h4>
        <p>Link: {item.link}</p>
        <button onClick={this.destroy}>Delete Item</button>
        <Link to={`/items/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/items">Back to all items</Link>
      </Layout>
    )
  }
}

export default Item
```

We should now be able to see http://localhost:3001/items/1.

Next, we want to implement the ItemEdit and ItemCreate. Inside the ItemEdit component we will have a form to edit an item. And Inside the ItemCreate component we will have form to create an item. What if we could abstract those two forms into one? We can, so let's do that now by creating another shared component called ItemForm:

```sh
cd components/shared/
touch ItemForm.jsx
```

components/shared/ItemForm.jsx
```js
import React from 'react'
import { Link } from 'react-router-dom'

const ItemForm = ({ item, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="A vetted item."
      value={item.title}
      name="title"
      onChange={handleChange}
    />

    <label>Link</label>
    <input
      placeholder="http://acoolitem.com"
      value={item.link}
      name="link"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ItemForm
```

Awesome! Now let's build our ItemEdit component:

components/routes/ItemEdit.jsx
```js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import ItemForm from '../shared/ItemForm'
import Layout from '../shared/Layout'

class ItemEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                title: '',
                link: ''
            },
            updated: false
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3000/api/items/${this.props.match.params.id}`)
            this.setState({ item: response.data.item })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }

        const editedItem = Object.assign(this.state.item, updatedField)

        this.setState({ item: editedItem })
    }

    handleSubmit = event => {
        event.preventDefault()

        axios({
            url: `http://localhost:3000/api/items/${this.props.match.params.id}`,
            method: 'PUT',
            data: { item: this.state.item }
        })
            .then(() => this.setState({ updated: true }))
            .catch(console.error)
    }

    render() {
        const { item, updated } = this.state
        const { handleChange, handleSubmit } = this

        if (updated) {
            return <Redirect to={`/items/${this.props.match.params.id}`} />
        }

        return (
            <Layout>
                <ItemForm
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/items/${this.props.match.params.id}`}
                />
            </Layout>
        )
    }
}

export default ItemEdit
```

Let's test that. Open http://localhost:3001/items/1 and edit a field.

Nice! Now try delete. Bye.

Ok. We have one last CRUD action to complete in our react app - CREATE. Let's build the ItemCreat component and use our ItemForm shared component:

components/routes/ItemForm.jsx
```js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import ItemForm from '../shared/ItemForm'
import Layout from '../shared/Layout'

class ItemCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            item: {
                title: '',
                link: ''
            },
            createdItem: null
        }
    }

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }

        const editedItem = Object.assign(this.state.item, updatedField)

        this.setState({ item: editedItem })
    }

    handleSubmit = event => {
        event.preventDefault()

        axios({
            url: `${apiUrl}/items`,
            method: 'POST',
            data: { item: this.state.item }
        })
            .then(res => this.setState({ createdItem: res.data.item }))
            .catch(console.error)
    }

    render() {
        const { handleChange, handleSubmit } = this
        const { createdItem, item } = this.state

        if (createdItem) {
            return <Redirect to={`/items`} />
        }

        return (
            <Layout>
                <ItemForm
                    item={item}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath="/"
                />
            </Layout>
        )
    }
}

export default ItemCreate
```

Great, test the create in your browser.

We now have full CRUD complete on the backend and on the frontend.

Success.

### Bonus: Refactoring

Notice how we using the api url in multiple components. What would happen if we need to update the url, we would have to change it in several places. What if we could store the api url in one place and have it accessed from there? That way if we want to change the api url, we only change it in one place. We can do this!

Let's create an apiConfig component:

src/
```sh
touch apiConfig.jsx
```

src/apiConfig.jsx
```js
let apiUrl
const apiUrls = {
  production: 'https://sei-items-api.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
```

Now replace all instances of http://localhost:3000/api in you Items, Item, ItemCreate, and ItemEdit components with `${apiUrl}` and don't forget to import the apiConfig component: `import apiUrl from '../../apiConfig'`

## Deploying to Heroku and [Surge](https://surge.sh)

1. `heroku create your-heroku-app-name`
2. `heroku buildpacks:set heroku/nodejs`
3. `heroku addons:create heroku-postgresql:hobby-dev --app=your-heroku-app-name`
4. `git status`
5. `git commit -am "add any pending changes"`
6. `git push heroku master`
7. `heroku run npx sequelize-cli db:migrate`
8. `heroku run npx sequelize-cli db:seed:all`

> Having issues? Debug with the Heroku command `heroku logs --tail` to see what's happening on the Heroku server.

Test the endpoints :)

> https://your-heroku-app-name.herokuapp.com/api/users

> https://your-heroku-app-name.herokuapp.com/api/users/1

Cool the backend is now deployed! On to the frontend:

First you will have to replace anywhere inside your react app where you made an axios call to localhost:3000 to https://your-heroku-app-name.herokuapp.com - if you completed the bonus that means you will only have to update the apiConfig.js file with https://your-heroku-app-name.herokuapp.com as the value for the production key.

Now let's deploy the frontend:

```sh
cd client
npm run build
cd build
mv index.html 200.html
npx surge
```

> Follow the prompts on Surge. Test the frontend routes once deployed. Getting errors? Check the browser dev tools. Check `heroku logs --tail`

Congrats! You built a full crud app with a backend and a frontend. You are now a fullstack developer!

> ✊ **Fist to Five**

## Feedback

> [Take a minute to give us feedback on this lesson so we can improve it!](https://forms.gle/vgUoXbzxPWf4oPCX6)

# Exercise 1 - Hello World!

We're going to use our muscle memory to get our initial application off the ground. You've been given some starter settings files, but not much else. Follow along to build your app.

## Step 0

We'll be using [morgan](https://www.npmjs.com/package/morgan) as our logger.

1. Install morgan
2. require the morgan package in your server.js (Hint: all `require`s go at the top)
3. After we initialize express, tell it which logger to use: `app.use(logger('dev'));`


## Step 1 - Build out the server

1. Open [server.js](../server.js) and follow the **TODO** prompts...
2. run `npm run dev` (<kbd>CTRL</kbd> + <kbd>C</kbd> to stop 🛑)


## Step 2 - Open your beautiful page in a browser

1. From the Terminal: `npm run dev`
2. Open a new browser window at [http://localhost:3000]()


## Step 3 - Make More Prettier

HTML pages should be written in HTML, not flat text. Let's gussy up this page, fancy pants.

1. Add another route `/fancy`.
3. Make the new route send the HTML file instead of flat text;
    * `res.sendFile(fancyFilePath);`
    * see https://expressjs.com/en/api.html#res.sendFile for details


## Summary

You should now have a fully working server that doesn't do much, but says 'Hello World' on the home page, and some helpful `/fancy`-pants stuff.

# Exercise 2 - Routing


## Step 1: Initial Routes (30 minutes 🏋️)
Create the following routes in `routes/quotes.js`:

|🤡|GET|POST|PUT|DELETE|
|---|---|---|---|---|
|`/`|Show a list of quotes|Receive a new quote; store in DB; return a new quoteID| 🍩 | 🍩
|`/:id`| Show ONE quote | 🍩 | Replace quote at {:id} | Destroy quote at {:id}
|`/new`| Show the "new quote" HTML form       |🍩|🍩|🍩
|`/:id/edit`| Show the "edit quote" HTML form |🍩|🍩|🍩

### Proper Responses 🏆
Theses routes must provide the right responses.

1. Read [this documentation](https://documenter.getpostman.com/view/2263099/quote-sta-gram/6nBupZw) online to get a sense of what each route should return. (Each request has an example response.)
2. Import [these pre-built request/responses](../assets/quote-sta-gram.postman_collection.json) into Postman. (`Postman > File > Import...`)
3. Build each of the routes to respond to each request (for now) with `req.send('some string')`
4. **Use your new tools in Postman to check your routes.**

## Step 2: Move functions into a controller (15 minutes 🏖).

If we take a look at our quotes router, there's a lot of mess in there, which makes it very hard to reason about and quickly understand. Let's move all these function definitions into a separate file so it's easier to read as humans.

***Note: cleaning this up is only for our convenience and to keep our code tidy— Node doesn't care either way.***

1. `require` `/controllers/quotesController` in your `quotesRouter`.
1. Open `/controllers/quotesController.js`
2. There are 8 methods defined in the controller, but only 7 routes in the router (one of the methods will be used later).
4. **Move the function bodies from the router into their corresponding functions in this controller.**
5. Your router should look something like this: `quotesRouter.get('/', quotesController.index);`
6. Verify with Postman.

#### Your application should now run exactly as it did in step #1. If it doesn't, *stop here and fix it*.


# Exercise 3: Data!

## Step 0: Prepare
Before we get our hands dirty with data, we need to make some quick modifications so we can accept data from a form.
Body-parser allows us to read the body of `POST` requests, and method-override allows us to simulate methods not supported in HTML (e.g. `PUT`,`DELETE`)

1. `npm install body-parser method-override`
1. Inside `server.js`, require these two packages.
1. Add the following block to activate them

```javascript
// parse incoming forms
/* we'll be reading the form body, but not accepting files,
or anything more than text*/
app.use( bodyParser.urlencoded({ extended: false }));
/* we'll also be accepting and parsing json  */
app.use(bodyParser.json());

// override with POST having ?_method=XXXX
/* e.g. If we need to make a PUT,
we'll POST to a url appended with ?_method=put */
app.use(methodOverride('_method'));
```

## Step 1: Prep some data

### Create and seed your database

1. Use `db/migration.sql` and `db/seed.sql`

## Step 2: PG-Promise and configuration

1. Use npm to install `pg-promise`
2. Open `config/dbConfig.js` and follow the TODO prompts
3. Open `models/quotesDB.js` and follow the TODO prompts, in order


## Step 3: Put some data in your routes

For now, and before we hook up our view engine, we'll only trade in json data. This means that instead of sending HTML via `res.send('string')` or `res.render('view')` methods, we'll switch over to sending json using `res.json({data})`.

> `res.json()` is shorthand for a few different methods:
>
> 1. set the reponse head to 'application/json'
> 2. stream the javascript data to the browser as a string (serialize)
> 3. close the browser stream.

We'll also be writing all of our database operations (SQL) in separate file:

## Step 3.1: Open `models/quotesDB.js`

Build out the [TODO] methods.
