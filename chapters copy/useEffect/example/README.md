# Dog Image Viewer Exercise

This exercise will help you understand how to use the `useEffect` hook in React for handling side effects like data fetching. You'll create a component that fetches and displays dog images, both on initial load and when a user interaction triggers a state change.

We'll implement a `useEffect` that runs once when the component mounts, and one when specific state changes to see the difference between effects with and without dependencies

## Starting Point

The starter code provides a basic React component structure with state management for the dog image, breed, and loading state. A function to change the breed randomly
- The UI layout with a button and image display

## Tasks

1. **Initial Load Effect** Add a useEffect that will fun only once and will update dogImage to a random dog image from the API noted in the code.

2. **Breed Change Effect** Add another `useEffect` that fetches a new image when the breed changes

## API Information

The app uses the Dog CEO API:
- Random image: https://dog.ceo/api/breeds/image/random
- Breed-specific image: https://dog.ceo/api/breed/${breed}/images/random

## Solution

Check the completed version in the `completed` folder to see the working implementation.

## Tips

- Remember to handle the loading state appropriately in both effects
- Test that the random image loads on mount
- Test that clicking the "Change Breed" button loads a new image
- Notice how the two effects serve different purposes:
  - The empty array `[]` effect runs once for initialization
  - The `[breed]` effect runs for user interactions

## Bonus

Add a `loading` flag using useState. It should start as true and get set to false after the random image is loaded. It should also be set to true while the chosen breed's image is loading. Then use this boolean with conditional rendering to display a loading message instead of the image. 

Refactor this to accomplish the same functionality with only one instance of useEffect, using logic to determine whether to show a specific breed or a random one.

See `App2.js` for completed code that includes these.