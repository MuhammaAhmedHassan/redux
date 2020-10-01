# redux
redux alone


 store -> holds the state of your application
 
 action -> describes the changes in the state of the application
 
 reducer -> carries out state transition depending on the action

 store is an object, and thats it; nothing more
 
 action; is the only way to change the state of the store; or data in the store object

reducer => pure function
reducer(previousState, action) => newState


Things I learnt:

 Redux store
 
 Things that we know and don't know
 
1- there is only one store for our entire application
 
2- allows access to the state via getState()
 
3- provides 'dipatch(action)' to update the state\
 
4- allows our application to register listeners via the 'subscribe(listener) => function',

  it accepts a function as its parameter which is executed any time the state
  
  in the 'store' changes
5- we can unsubscribe to the store by calling the function that was returned
  by the 'subscribe(listener);

Middleware:

1- Is the suggested way to extend Redux with custom functionality; if you

 want extra features middleware is the way to go
2- It provides a third-party extension point between dispatching an action,

 and the moment it reaches the reducer
 
3- We can use it for 'logging', crash reporting, performing asynchronous

 tasks etc
