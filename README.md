# Interactive JavaScript exercises

This repository is a (growing) collection of JavaScript exercises to help you practice things like:

- Logic and problem solving 
- Mathematical operations
- String manipulation
- Arrays
- Loops
- Objects

Please read all the sections carefully so that you are prepared to complete the exercises.

1. [How to use this repository](#how-to-use-this-repository)
2. [How to use the exercises](#how-to-use-the-exercises)

Have fun!

## How to use this repository

The exercises in this repository are interactive, and rely on [jest](https://jestjs.io/) to give you clear feedback on whether you have succeeded in completing each task.

The easiest way to access these exercises is right within your browser, using **GitHub Codespaces**.

1. Log in to GitHub, or create an account if you don't have one. Then, return to this page.

2. At the top of this page, there is a button labelled **Code**. Click **Code** -> **Codespaces** -> **Create codespace on main**.

<p align="center">
  <img src="https://gcdnb.pbrd.co/images/C55Jp0VzAUip.png?o=1" width="300">
</p>

3. Once the codespace has loaded, you will see VS Code in your browser tab. You may begin the exercises - read below for more.

The codespace is free to use for up to 60 hours per month. *You cannot be charged for additional hours unless you provide payment details on your GitHub account.*

Any work you complete within the codespace will persist even after you have closed the codespace. You can view your codespaces on [github.com/codespaces](https://github.com/codespaces). Your codespace will have a weird name like `upgraded capybara` or `ideal space happiness`. You can reopen it at any time to continue your work.

If your codespace remains inactive for 30 days, it will automatically be deleted. You can prevent this: [read more about configuring codespace lifespans](https://docs.github.com/en/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces?tool=webui).

## How to use the exercises

This section will use the first exercise (found in this repository within the folder `/collection 01 (starter pack)/1-001 helloWorldFunction`) as an example. I recommend following along with the steps below.

1. From the Explorer tab in your codespace, open up the folder containing the exercise you wish to complete, e.g. `1-001 helloWorldFunction`.

2. If there is a `README.md` file within the folder, read that first. This will provide you with helpful information and optional hints about the task.

3. Open the test file - that's the one ending with `.test.js`. This file contains test cases which describe the intended result of each task. The first task is to create a function which returns the string `"Hello, world!"`

4. Before you begin an exercise, you need to start the test runner. To do this: from within your codespace, click **View** -> **Command palette**. Then type `jest start`. Select the first option, labelled *Jest: Start All Runners*.

![](https://gcdnb.pbrd.co/images/6u0kF8W7GBum.png?o=1)

5. Within `helloWorldFunction.test.js`, you should see this symbol to the left of the test on line 5:

![](https://gcdnb.pbrd.co/images/olHQxSr5357P.png?o=1)

*If you see a green play button instead, click the play button on line 3.*

💡 This icon signifies that the **test has been disabled, or "skipped"**. All tests have been configured to skip by default so that you are not overwhelmed by the amount of requirements within each task. Most exercises contain multiple requirements, so you can decide to enable the tests one at a time, or all at once, depending on your preference.

6. To enable the test, remove `.skip` from the test on line 5.

![](https://gcdnb.pbrd.co/images/GM7UlfTnmB4i.png?o=1)

7. You should see a red X next to the test. This signifies that the test has failed. Hover over the red underline to see why this is the case.

![](https://gcdnb.pbrd.co/images/qcxYYjfNTjuV.png?o=1)

In this case, `helloWorld()` is *supposed* to return a value of `"Hello, world!"`, but it actually returned `undefined`.

In order to make the test pass, we need to solve the task by implementing the `helloWorld` function properly.

8. Open `helloWorldFunction.js`. This is where the `helloWorld` function is defined.

9. Implement the solution by making the `helloWorld` function return the correct value:

```js
function helloWorld() {
  return 'Hello, world!'
}
```

10. Open `helloWorldFunction.test.js` again. You should see a green tick next to the test, signifying that it is now passing (in other words, it's producing the expected behaviour).

![](https://gcdnb.pbrd.co/images/9llVySZxElWu.png?o=1)


When all of the tests within an exercise have been enabled (i.e. `.skip` has been removed) and all the tests are passing, that means you have completed the task!

Each exercise has one or more example solutions, found within the exercise's `/solution` folder. You can use this to compare against your own solution. Keep in mind that there are often many valid ways of solving the same problem.