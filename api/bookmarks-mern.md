---
title: 'Bookmarks MERN'
subTitle: 'Building A Simple Full Crud MERN App'
excerpt: 'I want to be the best. I want to be the best simple and plain, thats what drives me - Kobe Bryant'
featureImage: '/img/3.png'
date: '12/25/22'
order: 2
---


## Form Handling

There are two ways to handle forms in React.

- **Controlled Forms:** The value of the inputs are bound to state, so value of state and the value of the inputs are always in sync.

- **Uncontrolled Forms:** The forms are not bound by state, instead their values are pulled using a ref when needed.

### Example of a Controlled Form

Parts:

- object holding form values as state
- handleChange function that updates the state when we type into the form
- handleSubmit function to handle form submission and do what you want with the data

```js
import { useState } from "react"

export default function Form(props) {
  //State to hold the form data
  const [form, setForm] = useState({
    name: "",
    age: 0,
  })

  // handleChange function
  const handleChange = event => {
    // dynamically update the state using the event object
    // this function always looks the same
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    // prevent page refresh
    event.preventDefault()
    // do what you want with the form data
    console.log(form)
  }

  // The JSX for the form binding the functions and state to our inputs
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.name}
        onChange={handleChange}
        name="name"
        placeholder="write name here"
      />
      <input
        type="number"
        value={form.age}
        onChange={handleChange}
        name="age"
        placeholder="write age here"
      />
      <input type="submit" value="Submit Form" />
    </form>
  )
}
```

### Example of an Uncontrolled Form

- a ref created for each input
- handleSubmit for when form is submitted

```js
import { useRef } from "react"

export default function Form(props) {
  // ref to get input values
  const nameInput = useRef(null)
  const ageInput = useRef(null)

  const handleSubmit = event => {
    // prevent page refresh
    event.preventDefault()
    // do what you want with the form data
    console.log({
      name: nameInput.current.value,
      age: ageInput.current.value,
    })
  }

  // The JSX for the form binding the functions and state to our inputs
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameInput} placeholder="write name here" />
      <input type="number" ref={ageInput} placeholder="write age here" />
      <input type="submit" value="Submit Form" />
    </form>
  )
}
```

## Part 1 Making The API & Connecting it to a React App

![](/img/3.png)

## Part 2 Using Components to Properly Separate Concerns

![](/img/4.png)

## Part 3 Using CSS Modules to Properly Style Components

![](/img/5.png)
