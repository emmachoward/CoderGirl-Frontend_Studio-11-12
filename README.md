# CoderGirl-Frontend_Studio-17

In this studio, you will be exercising the skills learned in Section 17 of your Udemy Course - Testing React Apps. You will utilize Jest and React Testing Library to write unit and a few integration tests for the Movie Library app you started in Studio 11.

## Getting Started

You should already have the repo pulled down, likely saved on your local machine as `CoderGirl-Frontend_Studio-11-12`.

- [ ] Open this repo in your IDE and run `git pull` to get the latest code for Studio 17.
- [ ] Run `git checkout Studio-17` to be working in this studio's branch.
      You do not need to run `npm install` as create-react-app provided the testing library for you already. If you run `npm run start`, you'll see a completed Studio 11 spin up in `localhost:3000`. However, you will not need the app to be running during today's studio.
      I have already updated the default `App.test.js` to run a basic test. Instead you'll be jumping into creating new tests for the components.

## Part 1 - `<Header>` Unit Tests

For Part 1, I will provide step-by-step instructions for writing the two unit tests that test the Header component.  
In the file tree, find `Header.test.js` under `src/components/Header`. Inside there will be one basic test.

### A. Testing Title Text

- [ ] Create a new test named `'Header renders "Movie Library" as title'`. This will test if the text 'Movie Library' is rendered by the header component. In this test, you will do the following: - [ ] Render `<Header>` with the `render()` method provided by `@testing-library/react`. Remember in Studio 11, you added prop types to every component. `<Header>` has one prop, `setSidebarOpen`, so that will need to be added as well. The final render method will look like this:
      `javascript render(<Header setSidebarOpen={() => {}} />); `
      Note that you are passing in an empty function as the value for `setSidebarOpen`. These tests are unit tests, meaning we are only testing small, separate pieces at a time. This file is only for tests for the Header component. Since the Header component doesn't care about the value of `sideBarOpen`, we don't need to pass a real function in. - [ ] In the next line, you need to get the expected text, if it exists. You will use the `screen` object provided by `@testing-library/react` and the `getByText` method, passing in the string "Movie Library" as the text to be found. You can then assign the value of what is returned by `screen.getByText()` to a variable called `headerTitle`. The final line will look like this:
      `javascript const headerTitle = screen.getByText("Movie Library"); ` - [ ] Finally, let's do the final step of a test: the "assert" step. The `expect()` method and the many methods than can be chained from it all come from Jest. You don't need to import it, it's just good to know that `expect()` is related to Jest for debugging purposes. In this step, you'll want to assert that the header text capture above exists in the document. The final line should look like this:
      `javascript expect(headerTitle).toBeInTheDocument(); `
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

- [ ] Create a new test named `'Header renders sidebar and runs function on click'`. Inside the function, do the following: - [ ] The first thing you need to do is create a **mock function** for `setSidebarOpen()`. Remember that all the tests in this file are _unit_ tests and only test one particular component. Since `setSidebarOpen()` is actually a function that lives in `App`, we don't need to worry if it works in this test. We just need to test that this function runs when the user clicks the button. To create a mock, create a new variable with the same name as the function you are mocking, and assign it to `jest.fn()`. The final line will look like this:
      `javascript const setSidebarOpen = jest.fn(); ` - [ ] In the next line, render the `<Header>` component with the `render()` method just as you did in the previous test, except this time pass your new `setSidebarOpen` variable as the prop that's being passed in. - [ ] You might be wondering how you are going to get the sidebar button when it doesn't have any text, just an icon. The button also has some alt-text added to it. In the next line, use `screen.getByAltText("Open Sidebar")` and assign what is returned to a new variable called `sidebarBtn`.
      All the code you've written for this test so far is part of the 'Arrange' part of testing. - [ ] Next you need to do the 2nd step of testing, the 'Act' step. Using the `userEvent` object that is provided by `@testing-library/user-event`, simulate a click event on `sidebarBtn`. That will look like this:
      `javascript userEvent.click(sidebarBtn); ` - [ ] Finally, we need to do the last step, the 'Assert' step. Once again you'll use `expect()`, but this time you will use the method `toHaveBeenCalled()`, which checks if the mock function passed into `expect()` was called by the code tested.
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
