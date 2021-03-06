# Introduction

Here I describe a few key concepts to understand what react does more clearly.

### Components

Atoms > Molecules > Organisms > Template > Page

The main focus of components is create reuseable codes that can be used on different parts of the webpage. The behaviour of each "copy" of a component is replicated in every instance.

https://mdbootstrap.com/react/

### One Way Data Flow

Data flows top to bottom. In a component structure there are parent and children components. Every time a component changes only its children are changed.

### Virtual DOM

React creates an abstraction to interact to the actual browser's DOM.

### Props

### State

### Children

### Life Cycle

Like VueJs, React also has a life cycle.

```
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
```

### Components

Components are the reusable templates that do not present any life cycle

### Containers

Containers are smart components that have state, life cycle hooks and class syntax
