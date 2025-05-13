# Dog Image Viewer Exercise

This exercise will help you understand how to use the `useEffect` hook in React for handling side effects like data fetching. You'll create a component that shows a list of dog breeds, then fetches and displays a random image of the breed selected.

We'll implement a `useEffect` that runs once when the component mounts, and one when specific state changes to see the difference between effects with and without dependencies

## Starting Point

The starter code provides a basic React component structure with state management for the dog image and breed. You need to 

## Tasks

1. **Initial Load Effect** Add a useEffect that will fun only once and will update the list of breeds by fetching data from an API:

```
fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        // Convert breeds object to array of breed names
        const breedList = Object.keys(data.message)
        setAllBreeds(breedList);
      })
```

2. **Breed Change Effect** Add another `useEffect` that fetches a new image and updates the image shown when the breed changes. Use this endpoint: 

```
fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
```

## Solution

Check the completed version in the `completed` folder to see the working implementation.

## Tips

- Notice how the two effects serve different purposes:
  - The first should have an empty array `[]` effect to run once for initialization
  - The second effect should have a dependency array that runs whenever `breed` changes.

## Bonus

Add a `loading` flag using useState. It should start as true and get set to false after the random image is loaded. It should also be set to true while a new image is loading. Then use this boolean with conditional rendering to display a loading message instead of the image. 

See `App2.js` for completed code that includes this.