---
prev: false
next: false
sidebarDepth: 3
---

# The Buidler architecture

Buidler is designed around the concepts of tasks, and the Buidler Runtime Environment, a set of functionality available for tasks. This document describes both concepts in detail.

**You don't need to read this to use Buidler, you can get started with it by reading [this guide](https://medium.com/nomic-labs-blog/how-to-get-started-with-buidler-68beb6b9bb04).**

If you want to write your own tasks, create your own plugins, or are just curious about Buidler internals, keep reading.

## Tasks

Buidler helps smart contract developers automate their workflow by letting them run and create tasks. Tasks can call other tasks, so complex workflows can be defined. Users and plugins can override existing tasks, making those workflows customizable and extendable.

A task is a javascript async function with some associated metadata. This metadata is used by Buidler to automate some things for you. Arguments parsing, validation, and help messages are taken care of.

### Creating your own tasks

You can create your own tasks in your `buidler.config.js` file. The [Config DSL]() will be available in the global environment, with functions for defining tasks. You can also import the DSL with `require("@nomiclabs/buidler/config")` if you prefer to keep things explicit, and take advantage of your editor's autocomplete.

Creating a task is done by calling the [`task` function](). It will return a [`TaskDefinition`]() object, which can be used to [define the task's parameters]. There are multiple ways of calling `task`, we read about all of them, take a look at [its API documentation]().

The simplest task you can define is

```js
task(
  "hello", "Prints 'Hello, World!'", 
  async function action(taskArguments, env, runSuper) {  
    console.log('Hello, World!');
  }
);
```

`task`'s first argument is the task name. The second one is its description, which is used for printing help messages in the CLI. The third one, action, is an async function that receives the following arguments:

`taskArguments` is an object with the parsed CLI arguments of the task. In this case, it's an empty object.
`env` is the [Buidler Runtime Environment]().
[`runSuper`]() is only relevant if you are overriding an existing task. It lets you run the original task's action.
Defining the action's arguments is optional. The Buidler Runtime Environment and `runSuper` will also be available in the global scope. We can rewrite our "hello" task this way:

```js
task("hello", "Prints 'Hello, World!'", async () => console.log('Hello, World!'));
```

#### Tasks' actions requirements

The only requirement for writing a task is that the `Promise` returned by its action must not resolve before every async process it started is finished.

This is an example of a task whose action doesn't meet this requirement.

```js
task("BAD", "This task is broken", async () => {
  setTimeout(() => {
    throw new Error(
      "This tasks' action returned a promise that resolved before I was thrown"
    );
  }, 1000);
});
```

This other task uses a `Promise` to wait for the timeout to fire.

```js
task("delayed-hello", "Prints 'Hello, World!' after a second", async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello, World!');
      resolve();
    }, 1000);
  });
});
```

Manually creating a `Promise` can look challenging, but you don't have to do that if you stick to `async`/`await` and `Promise`-based APIs. For example, you can use the npm package [`delay`](https://www.npmjs.com/package/delay) for a promisified version of `setTimeout`.

#### Defining parameters

Buidler tasks can receive `--named` parameters with a value, `--flags`, positional and variadic parameters. Variadic parameters act like javascript's rest parameters. The [Config DSL]() `task` returns an object with methods to define all of them. Once defined, Buidler takes control of parsing, validating them, and printing help messages.

Adding a positional parameter to the `hello` task can look like this:

```js
task("hello", "Prints a greeting'")
   .addOptionalParam("greeting", "The greeting to print", "Hello, World!")
    .setAction(async ({ greeting }) => console.log(greeting));
```

And would be run with `npx buidler hello --greeting Hola`.

You can read the full documentation of these methods and their possible parameters in [their API docs]().

##### Positional parameters restrictions

Positional and variadic parameters don't have to be named, and have the usual restrictions of a programming language:

No parameter can follow a variadic one
Required/mandatory parameters can't follow an optional one.

Failing to follow these restrictions will result in an exception being thrown when loading Buidler.

##### Type validations

Buidler solves validating and parsing the values provided for each parameter. You can declare the type of a parameter, and Buidler will get the CLI strings and convert it into your desired type. If this conversion fails, it will print an error message explaining why.

A number of types are available in the Config DSL through a `types` object. This object is injected into the global scope before processing your `buidler.config.js`, but you can also import it with `const { types } = require("@nomiclabs/buidler/config")` and take advantage of your editor's autocomplete.

An example of a task defining a type for one of its parameters is

```js
task("hello", "Prints 'Hello' multiple times")
   .addOptionalParam("times", "The number of times to print 'Hello'", 1, types.int)
    .setAction(async ({ times }) => {
      for (let i = 0; i < times; i++) {
        console.log("Hello");
      }
    });
```

Calling it with `npx buidler hello --times notanumber` will result in an error.

### Overriding tasks

Defining a task with the same name than an existing one will override it. This is useful to change or extend the behavior of built-in and plugin-provided tasks.

Tasks overriding works very similarly to overriding methods when extending a class. You can set your own action, which can call the previous one. The only restriction when overriding tasks, is that you can't add or remove parameters.

Tasks override order is important since actions can only call the immediately previous definition, using the `runSuper` function.

Overriding built-in tasks is a great way to customize and extend Buidler. To know which tasks to override, take a look at [src/builtin-tasks]().

#### The `runSuper` function

`runSuper` is a function available to override task's actions. It can be received as the third argument of the task or used directly from the global object.

This function works like [javascript's `super` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), it calls the tasks' previous action.

The `runSuper` function receives a single optional argument, an object with the task arguments. If this argument isn't provided, the same task arguments received by the action calling it will be used.

### Internal tasks

Creating tasks with lots of logic makes it hard to extend or customizing them. Making multiple small and focused tasks that call each other is better for that purpose. If you design your tasks in this way, users that want to change only a small aspect of them can override one of your intermediate tasks.

For example, the `compile` task is implemented as a pipeline of six tasks. It just calls these intermediate tasks like `compile:get-source-paths`, `compile:get-dependency-graph`, and `compile:build-artifacts`. We recommend prefixing intermediate tasks with their main task and a colon.

The problem with this approach is that help messages would be cluttered with lots of uninteresting intermediate tasks. To avoid this, you can define those using the [`internalTask` config DSL function](). The `internalTask` function works almost exactly like `task`. Its only difference is that tasks defined with it won't be included in help messages.

## The Buidler Runtime Environment

The Buidler Runtime Environment is an object containing all the functionality that Buidler exposes when running a task, test and script.

By default, the Buidler Runtime Environment gives you programmatic access to the task runner and the config system, and exports an [EIP1193-compatible]() Ethereum provider. You can find more information about [it in its API docs]().

Plugins can extend the Buidler Runtime Environment. For example, [buidler-web3](https://github.com/nomiclabs/buidler-web3) adds a `web3` instance to it, making it available to tasks, tests and scripts.

### Globally exported Buidler Runtime Environment

Before running a task, test or script, Buidler injects the Buidler Runtime Environment into the global scope, turning all of its fields into global variables. When the task execution is completed, these global variables are removed, restoring their original value, if any.

### Explicitly importing the Buidler Runtime Environment

Not everyone likes magic global variables, and Buidler doesn't force you to use them. Everything can be done explicitly in tasks, tests and scripts.

You can [import the config DSL]() explicitly when defining your tasks, and receive the Buidler Runtime Environment explicitly as an argument to your actions. You can read more about this in [Creating your own tasks]().

When writing tests or scripts, you can use `require("@nomiclabs/buidler")` to import the Buidler Runtime Environment. You can read more about this in [Accessing the Buidler Runtime Environment]().

### Extending the Buidler Runtime Environment

The Buidler Runtime Environment only provides the core functionality that users and plugin developers need to start building on top of. Using them directly can be somewhat harder than expected.

Everything gets easier if you use higher-level libraries, like [web3.js]() or [truffle-contract](), but this libraries need some initialization to work, and that could get repetitive.

Buidler lets you hook into the Buidler Runtime Environment construction, and extend it with new functionality. This way, you only have to initialize everything once, and your new features or libraries will be available everywhere the Buidler Runtime Environment is used.

You can do this by adding a Buidler Runtime Environment extender into a queue. This extender is just a synchronous function that receives the Buidler Runtime Environment, and adds fields to it with your new functionality. These new fields will also get [injected into the global scope during runtime]().

For example, adding an instance of Web3.js to the Buidler Runtime Environment can be done in this way:

```js
extendEnvironment(env => {
  env.Web3 = require("web3");

  // env.ethereum is the EIP1193-compatible provider.
  env.web3 = new env.Web3(new Web3HTTPProviderAdapter(env.ethereum));
});
```

### Accessing the Buidler Runtime Environment from outside a task

The Buidler Runtime Environment can be used from any Javascript or TypeScript file. To do so, you only have to import it with `require("@nomiclabs/buidler")`. You can do this to keep more control over your development workflow, create your own tools, or to use Buidler with other dev tools from the node.js ecosystem.

Running test directly with [mocha]() instead of `npx buidler test` can be done by explicitly importing the Buidler Runtime Environment in them like this:

```js
const env = require("@nomiclabs/buidler");
const assert = require("assert");

describe("Buidler Runtime Environment", function () {
  it("should have a config field", function () {
    assert.notEqual(env.config, undefined);
  });
});
```

This way, tests written for Buidler are just normal mocha tests. This enables you to run them from your favorite editor without the need of any Buidler-specific plugin. For example, you can run them from Visual Studio Code using [Mocha sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar).
