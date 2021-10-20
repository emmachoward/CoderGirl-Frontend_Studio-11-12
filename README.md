# CoderGirl-Frontend_Studio-17
In this studio, you will be exercising the skills learned in Section 17 of your Udemy Course - Testing React Apps. You will utilize Jest and React Testing Library to write unit and a few integration tests for the Movie Library app you started in Studio 11.

## Getting Started
You should already have the repo pulled down, likely saved on your local machine as `CoderGirl-Frontend_Studio-11-12`. 
- [ ] Open this repo in your IDE and run `git pull` to get the latest code for Studio 17.
- [ ] Run `git checkout Studio-17` to be working in this studio's branch.
You do not need to run `npm install` as create-react-app provided the testing library for you already. If you run `npm run start`, you'll see a completed Studio 11 spin up in `localhost:3000`. However, you will not need the app to be running during today's studio.
I have already updated the default `App.test.js` to run a basic test. Instead you'll be jumping into creating new tests for the components.

### Resources
While you can complete this studio just with the Udemy video and the instructions below, I am also listing the documentation for Jest and the React Testing Library. Once you start writing unit tests for React Apps, these two sites can save you a lot of headaches!
- [Jest Docs](https://jestjs.io/docs/getting-started)
  - [`expect()` Methods](https://jestjs.io/docs/expect)
  - [Mock Functions](https://jestjs.io/docs/mock-function-api)
- [React Testing Library (note: this testing library can be used with other UI libraries, including Angular)](https://testing-library.com/)
  - [`userEvent` Supported Events](https://testing-library.com/docs/ecosystem-user-event)
  - [All options for queries ("get by ...")](https://testing-library.com/docs/queries/about)

## Part 1 - `<Header>` Unit Tests
For Part 1, I will provide step-by-step instructions for writing the two unit tests that test the Header component.  
In the file tree, find `Header.test.js` under `src/components/Header`. Inside there will be one basic test.

### A. Testing Title Text
- [ ] Create a new test named `'Header renders "Movie Library" as title'`. This will test if the text 'Movie Library' is rendered by the header component. In this test, you will do the following:
    - [ ] Render `<Header>` with the `render()` method provided by `@testing-library/react`. Remember in Studio 11, you added prop types to every component. `<Header>` has one prop, `setSidebarOpen`, so that will need to be added as well. The final render method will look like this:
    ```javascript
    render(<Header setSidebarOpen={() => {}} />);
    ```
    Note that you are passing in an empty function as the value for `setSidebarOpen`. These tests are unit tests, meaning we are only testing small, separate pieces at a time. This file is only for tests for the Header component. Since the Header component doesn't care about the value of `sideBarOpen`, we don't need to pass a real function in.
    - [ ] In the next line, you need to get the expected text, if it exists. You will use the `screen` object provided by `@testing-library/react` and the `getByText` method, passing in the string "Movie Library" as the text to be found. You can then assign the value of what is returned by `screen.getByText()` to a variable called `headerTitle`. The final line will look like this:
    ```javascript
    const headerTitle = screen.getByText("Movie Library");
    ```
    - [ ] Finally, let's do the final step of a test: the "assert" step. The `expect()` method and the many methods than can be chained from it all come from Jest. You don't need to import it, it's just good to know that `expect()` is related to Jest for debugging purposes. In this step, you'll want to assert that the header text capture above exists in the document. The final line should look like this:
    ```javascript
    expect(headerTitle).toBeInTheDocument();
    ```
Putting it all together, the full test is:
```javascript
  test('Header renders "Movie Library" as title', () => {
    render(<Header setSidebarOpen={() => {}} />);
    const headerTitle = screen.getByText("Movie Library");
    expect(headerTitle).toBeInTheDocument();
  });
```
- [ ] Let's run the test to make sure it works. In your command line, run `npm run test`, then enter `a` when it prompts to run all tests. You should see 2 test suites and 2 tests pass, since there is a test in `App.test.js` as well. The testing scripts will re-run every time you save. If you don't want this, enter `q` into your command line.

### B. Testing Sidebar Button
There are two pieces to the `<Header>` component: the title text, and the button that opens and closes the sidebar. The test for the title text was simple because it was just checking that static text appears as expected. For this test, we want to confirm the button exists AND when clicked, it runs as expected. 
- [ ] Create a new test named `'Header renders sidebar and runs function on click'`. Inside the function, do the following:
    - [ ] The first thing you need to do is create a **mock function** for `setSidebarOpen()`. Remember that all the tests in this file are _unit_ tests and only test one particular component. Since `setSidebarOpen()` is actually a function that lives in `App`, we don't need to worry if it works in this test. We just need to test that this function runs when the user clicks the button. To create a mock, create a new variable with the same name as the function you are mocking, and assign it to `jest.fn()`. The final line will look like this:
    ```javascript
    const setSidebarOpen = jest.fn();
    ```
    - [ ] In the next line, render the `<Header>` component with the `render()` method just as you did in the previous test, except this time pass your new `setSidebarOpen` variable as the prop that's being passed in. 
    - [ ] You might be wondering how you are going to get the sidebar button when it doesn't have any text, just an icon. The button also has some alt-text added to it. In the next line, use `screen.getByAltText("Open Sidebar")` and assign what is returned to a new variable called `sidebarBtn`.
    All the code you've written for this test so far is part of the 'Arrange' part of testing.
    - [ ] Next you need to do the 2nd step of testing, the 'Act' step. Using the `userEvent` object that is provided by `@testing-library/user-event`, simulate a click event on `sidebarBtn`. That will look like this:
    ```javascript
    userEvent.click(sidebarBtn);
    ```
    - [ ] Finally, we need to do the last step, the 'Assert' step. Once again you'll use `expect()`, but this time you will use the method `toHaveBeenCalled()`, which checks if the mock function passed into `expect()` was called by the code tested.
Altogether, the full test looks like this:
```javascript
    test("Header renders sidebar and runs function on click", () => {
      const setSidebarOpen = jest.fn();
      render(<Header setSidebarOpen={setSidebarOpen} />);
      const sidebarBtn = screen.getByAltText("Open Sidebar");
      userEvent.click(sidebarBtn);
      expect(setSidebarOpen).toHaveBeenCalled();
    });
```
- [ ] Once again, confirm your tests are working. This might have been done automatically, or you will have to re-run `npm run test a`. You should see 3 tests passed.

## Part 2 - `<MovieCard />` Tests
The tests for the MovieCard component are similar to the Header component. You'll need a test to confirm it's rendering data as expected, and another test to confirm a function runs when something is clicked. Because they're so similar, this part will be more hands-off. Use what you learned in the previous part to write MovieCard tests.
Note that I've provided a test movie object at the top of the file. This object is simplified from the full movie object since it only includes what MovieCard uses. In more robust applications with hundreds of tests, you will likely hold your test data in another file. You'll see that later in MovieContainer.

### A. Rendered Text & Image
- [ ] Create a new test called "MovieCard renders title, year & image". Inside the test, render `<MovieCard />`, passing in `testMovie` as the `movie` prop and an empty function as `setActiveMovie`
- [ ] The rest of the test will be 3 `expect()` methods. Each method asserts whether or not one of the three values exists: the movie title, the release year, and the movie poster.
- [ ] Once again, save and re-run your tests. Once the test is passing, you can continue to the next part

### B. Clicking the MovieCard
- [ ] Create a new test called "When MovieCard is clicked, function runs". Inside this test, you'll need to make `setActiveMovie` a mock function, since this test is checking to see if `setActiveMovie` runs.
- [ ] Then render the `<MovieCard />` with it's properties. What should be passed in as the value for `setActiveMovie`? If you're not sure, compare it with `<Header />` tests!
- [ ] Capture the movie card with `screen.getByTestId("MovieCard")`. This test ID is being added to the JSX in `MovieCard.js`. Look at the parent element of the JSX that is returned by the MovieCard. It has 3 properties, the first one being `data-testid`. This property allows you to capture difficult to capture elements in your tests, such as when you can't capture something by text, it's alt text, or role.
- [ ] Use `userEvent` to simulate a click on the movie card.
- [ ] Finally, assert that `setActiveMovie` should have been called.

## Part 3 - `<Sidebar />` Tests
The sidebar is a little more complex because it includes a `<select>` element that needs to be tested. Additionally, sidebar relies on state that lives in `<App />`. For this studio, we are not going to write end-to-end tests, so we won't be testing the user flow of a user selecting a genre and the movies cards rendered updating (you are encouraged to do this as a bonus mission, however!). Instead, we're going to test that the `<select>` element updates as expected when the user selects a genre.
- [ ] First, create a new test called 'Sidebar renders "Filter Movies"' and test whether the sidebar title 'Filter Movies' is rendered. Remember that `<Sidebar />` has 3 props that it requires. These test values have been provided to you at the top of the file.
- [ ] Create a new test called "Sidebar renders select, user can select a genre". Inside the test, render the `<Sidebar />` component with its 3 props.
- [ ] Next, capture the `<select>` element using the query `getByTestId`. The test ID is "genreSelect". Assert that the select is in the document.
These final two steps are tricky due to you simulating a change to a `<select>` element. When you encounter an event you're not sure how to test, check out the docs referenced at the top of the file. For this test, you'll use the `userEvent.selectOptions()` method, documented [here](https://testing-library.com/docs/ecosystem-user-event#selectoptionselement-values-options).
- [ ] Simulate a `selectOptions` event. This method takes two arguments: the element that is the target of the event, and an array of the selected values (Some select elements can have multiple options to be selected, but ours just allows for one, so the array will have one element). Try to see if you can write this using just the description and the documentation linked. If you get stuck the answer is below:
<details>
  <summary>`selectOptions` event answer</summary>
  
  ```javascript
  userEvent.selectOptions(genreSelect, ["Comedy"]); //or any of the 3 provided genres in the test array
  ```
  
</details>

- [ ] Finally, you need to assert that the `<select>` element has updated. Once again, using the documentation, can you write an `expect()` statement that tests the correct thing (the correct option is selected) and the test passes?  
<details>
  <summary>Final "Sidebar renders select, user can select a genre" answer</summary>
  
  ```javascript
    test("Sidebar renders select, user can select a genre", () => {
        render(
          <Sidebar
            genres={genres}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        );
        const genreSelect = screen.getByTestId("genreSelect");
        expect(genreSelect).toBeInTheDocument();
        userEvent.selectOptions(genreSelect, ["Comedy"]);
        expect(screen.getByRole("option", { name: "Comedy" }).selected).toBe(true);
     });
  ```
  
</details>
