# @benjilegnard/schematics

A collection of schematics from [@benjilegnard](https://twitter.com/benjilegnard)

## Installation

Install angular schematics and this package globally :

```bash
npm i -g @angular-devkit/schematics @benjilegnard/schematics
```

## Usage

### new-talk

A schematic to generate a [`reveal.js`](https://revealjs.com/) talk with vite bundler and catppuccin theme.

```bash
schematics @benjilegnard/schematics:new-talk --name="My Next Talk"
```

## Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using jest as a runner and test framework.

### Publishing

Publishings is handled by github actions, push a tag and create a release on github for that.

