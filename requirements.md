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

# Route Requirement

## Routing logic

1. User can nav around to different subapps using routing logic built into container
2. User can nav around in a subapp using routing logic built into the subapp itself
3. Not all subapps will require routing

## Subapps might need to add in new pages/routes all the time

New routes added to a subapp should not require a redeploy of the container

## We might need to show 2 or more microfrontend(subapps) at the same time

This will occur all the time if we have some kind of sidebar nav that is built as a separate microfrontend

## We want to use off-the-shel routing solutions

1. Building a routing lib can be hard - we don't want t authot a new one
2. Some amount of custom coding is OK

## We need nav features for sub-apps in both hosted mode and in isolation

## In different apps need to communicate information about routing, it should be done in as generic a fashion as possible（app 之间交流要独立于任何 lib）

1. Each app might be using a completely different nav framework
2. We might swap out or upgrade nav lib all the time - should not require a rewrite of the rest of the app

# Route Solution

1. Both container and Individual subapps need routing features(e.g. both has independent not shared React-Router)

- Container uses Browser History/Browser Router(it can change browser's url, eg. click link to goto some page, the adress url is also updated jn the browser)
- Subapps use Memory History/Router (it can not change browser's url so avoid conflicts with Container)

> The memory history mode doesn't assume a browser environment and therefore doesn't interact with the URL nor automatically triggers the initial navigation

2. Subapps might need to add in new pages/routes all the time

- Container's routing will be used to decide which microfrontend to show
- Marketing/subapp router used to decide which page to show

3. We might need to show 2 or more microfrontend at the same time

- Container's routing STILL will be used to decide which microfrontend to show

4. We want to use off-the-shelf routing solutions
5.
6.
