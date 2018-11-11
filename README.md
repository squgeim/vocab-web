# vocab-web

A simple app to keep track of words you want to learn and practice them.

## Motivation

I consider myself pretty good at english (considering it is a 2nd language). I
am at a level where I don't need to pay particular attention to each word that
I am reading or hearing and I get what is being said. I used to hear someone
say a rarely used word and although I could not define the word per se, I could
understand the gist from the context and I did not take any note of the word.

This lead to a situation where it never crossed my mind to use a more accurate
or more rarely used word when I had to speak impromptu.

This tool is a system to make sure I take note of words I hear that I may or may
not have known already, but I'm sure it would not have crossed my mind to use.
Just taking an effort into writing down that word helps a lot.

*Side motivation*:
I do React in my day job, with a thousand abstractions above the browser. For
some time, I have been contemplating building something with *raw* javascript
and only what the latest web platform offered. Thus this javascript project
without a `package.json`.

## Features (both planned and implemented)

- [x] Note down words by typing them down
- [x] Search for words in the collection
- [ ] [WIP] Offline access
- [ ] Fetch meaning and example usages automatically
- [ ] Extract collection
- [ ] Import collection
- [ ] Game: Spelling test
- [ ] Game: Use in a sentence

**Browser Extension**
- [ ] Find usage of words in our collection in visited websites
- [ ] Highlight words in our collection in visited websites

## Contribute

You can take any feature in the section above and work on it.

As you may have noticed, there is no `package.json` file, no `npm`, no `webpack`
or any build tool. That is what makes it possible to host this application
directly from github.

Think very hard before considering adding a library--do you really need it? Or
can you whip something up yourself?

Here's the breakdown of how things are:
- Uses [unpkg](https://unpkg.com) to use some important libraries from npm.
- Uses `make` for lint, formating, build server, etc. (If you are on Windows,
please contribute how to make `make` work.)
- Uses Web Components with ShadowDOM to build all the components.
- Uses [hyperHTML](https://github.com/WebReflection/hyperHTML) to write html and handle DOM changes.
- Uses in-component style for all css. You'll most definitely never need to use
a global css rule. Reuse components, not css.
- Uses indexDB (via [localforage](https://github.com/localForage/localForage)) to store collection on the browser.

### Application Architecture

| Directory | Description |
| --------- | ------- |
| pages     | Top level pages. Each page is a Web Component. Has page-specific logic. |
| components | Smaller components. Think reuse when building them. |
| utils     | Simple helper functions/classes. Think pure. |
| models    | Models are the core logic of the application. They extend from the base model class that can be subscribed to by any of the component. Models can expose methods with side-effects and the components will be notified if any data is modified in a model. (It is your responsibility as a model-author to make sure you alert the subscribers when something is changed). |

Just go though what's already there and you'll be fine.

## Why "vocab-web"?

Because that's the first thing that popped in my mind. I first started a CLI version
called [`vocab-cli`](https://github.com/squgeim/vocab-cli), so this is `vocab-web`.
