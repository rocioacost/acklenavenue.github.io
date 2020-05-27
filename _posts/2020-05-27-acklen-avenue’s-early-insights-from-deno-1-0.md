---
layout: post
title: "Acklen Avenue’s early insights from Deno 1.0 "
date: 2020-05-27T00:00:00.000Z
description: "Deno 1.0 is out! We took this new runtime for JavaScript and
  TypeScript for a test drive, this is how it went.  "
author: Byron Sommardahl, Cesar Bonilla & Nestor Escoto
excerpt: "Deno 1.0 is out! We took this new runtime for JavaScript and
  TypeScript for a test drive, this is how it went.  "
image: /img/posts/blogpost-deno.jpg
thumbnail: /img/posts/blogpost-deno.jpg
type: article
keywords: deno, software development, javascript, typescript
tags: software development
hidden: false
---
*Before starting, I’d like to send out a huge thank you to Ryan Dahl on behalf of my company and the rest of the developer world for giving us NodeJS.*  *While I’m at it, I also want to tip my hat to Microsoft for making so many massive contributions to open-source software and redeeming the JavaScript language by giving us TypeScript.* \
*\- Byron Sommardahl*

## What is Deno?

Deno is a JavaScript/TypeScript runtime withsecuredefaults and great developer experience. It was created by [Ryan Dahl](https://en.wikipedia.org/wiki/Ryan_Dahl), the original creator of [Node.js](https://nodejs.org/en/)

It's built on V8, Rust, and Tokyo.

## What is TypeScript?

[TypeScript](https://www.typescriptlang.org/) is an open-source language that builds on JavaScript, one of the world’s most used tools, by adding static type definitions.

## Who is Deno for?

Deno is for any adventurous developer out there that doesn’t need anything overly complex. At this point, we would not recommend Deno for production applications, instead, stick with Node.js at least until Deno matures enough.

## How does it compare to Node.js?


### Similarities:

* Both are developed upon the[V8 Engine](https://flaviocopes.com/v8/)
* Both are great for developing server-side applications with JavaScript

### Differences:

* There is no package manager for Deno (No npm), instead, it uses modules reference as URLs or file paths
* There is no package.json file
* Deno will always die on uncaught errors (unlike Node.js)
* There is no \`require()\` support, instead third party modules are imported via URLs:

import*aslogfrom"https://deno.land/std/log/mod.ts";

* It aims to be browser-compatible as much as it can, for example by providing a built-in fetch and the global window object
* Since no require is support, modules use ES module syntax, which means just goodimport x from "y"syntax

## What is Deno solving?

Deno aims to be a productive and secure scripting environment for the modern programmer, by default Deno has no file, network, or environment access (unless explicitly enabled). Also, Ryan Dahl wanted to fix/solve his design regrets fo Node.js (He talked about those regrets on the 2018 JSConf EU where he also first introduced Deno,[Youtube Video](https://www.youtube.com/watch?v=M3BM9TB-8yA))

## Pros?

* Deno integrates Promises natively (Node doesn’t) which allows for better standardization of async APIs
* It has a really nice Standard library that is easy to import and use. You can check the standard (“std”) library [here](https://deno.land/std/).

## Cons?

* Deno does not have a package.json file, if you liked that from Node.js you will miss that feature.
* Currently, Deno does not support npm packages at all and the number of Deno “native” packages is very small.

## Good Ole Hello World Example:

\`\``

Import { bgBlue, red, bold } from “<https://deno.land/std/colors/mod.ts>";

const sayHello = (name: string = "world") => {

console.log(bgBlue(red(bold(\`Hello ${name}!\`))));

}

sayHello();

sayHello("Acklen Avenue");

\`\``

## What cool things can we use it for?

We can use Deno for any type of server-side scripting since with Deno you can bundle everything in a single file, no need to do more npm install before running your code.

We can use Deno to create REST APIs using the standard[http library](https://github.com/denoland/deno_std/tree/master/http#http)and if you want route handling for your API then[oak](https://github.com/oakserver/oak)is a middleware framework for Deno’s http server that includes a router middleware. Also you might want to take a look at[Drash](https://drash.land/docs/#/).

## Conclusion

Deno isn’t a replacement for Node.js (At least not for now), Deno will probably continue to grow and evolve and will for sure start taking more momentum in the software industry. We can see it being used a lot in the future and we at Acklen Avenue are looking forward to seeing how it grows and evolves.