# Application Structure

1. Pages

- Home
- Pricing
- Sign In
- Sign Up
- Dashboard

2. Categery to Business/Feature structure

- Marketing
  - Home
  - Pricing
- Authentication
  - Sign In
  - Sign Up
- Dashboard
  - Dashboard

3. Micro FE structure + Tech stack

- Container(React)
  - Marketing(React)
  - Authentication(React)
  - Dashboard(Vue)

# Project Code Requirements

## inflexible requirement - Zero coupling between child projects

1. No iimporting of functions/objects/classes/etc
2. No Shared state
3. Shared libraries through Module Federation system is ok

Why?
Very easy to replace any child project without breacking the others

## Near-zero coupleing between container and child apps

1. Container should not assume that a child is using a particular framework
2. Any necessary communication done with callbacks or simple events(intead of framework, e.g. Redux)

In summary, allows container and child apps have necessary communication(in a simple way), but no communication between child apps

## CSS from one project should not affect another

## Version control(monorepo/single vs separare) should not have any impact on the overall project

some people want to use monorepo others keep everything in a seperate repo. should not require any addtional work switch between monorepo or seperate repo

## Container should be able to decide to always use the latest version of a micro frontend(child apps) or specify a specic version

1. Container will always use the latest version of a child app(doesn't require a redeploy of container)
2. Container can specify exactly what version of a child it wants to use(require a redeplot to change)

# Deployment

1. deploy each microfrontend independently(including the container)
2. location of child app remoteEntry.js files must be known at <b>build</b> time
3. <i>At present</i>, the remoteEntry.js file name is fixed! Need to think about caching issues
4. Many frontend deployment solutions assume you're deploying a single project - we need something that can handle multiple different one
5. Probably need a CICD pipile of some sort
