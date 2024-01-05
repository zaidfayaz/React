                            What is React ?
React is open source library for building  user interfaces, it is not a framework.

                            Why Learn React?
1) Created and maintained by facebook its not going to die down soon as facebook uses it in its projects and applications
2) It is componenet based architecture : it breaks down application into small parts which can be then composed  to make complex UI's
3) Code reusablity :if we have one component namely article in react , same can be used in angular and vue 
4) React is declarative: Tell the React what you want and react will build the actual UI
React will handle efficiently updating and rendering of the components 
DOM updates are handled gracefully in react 

                            Ways of creating react projects

create react app
1) npx :- npx create-react-app <project_name> 
npx package runner : which gets installed when you install node thats how we are able to directly run create react app without having to install it, npx takes cares of it.
2) npm :- intall the package globally
npm install create-app-g
create-react-app <project_name
3) vite: npm create vite@latest
give project and the write commands 1-npm install
2-npm run dev (runs the project on the browser by providing the port link)

                    Components : A component represents a part of UI
There are 5 mainly components:
  1- ROOT (app) component
  2- HEADER
  3- SIDENAV
  4- MAIN CONTENT
  5- FOOTER

  components are reusable
 
                                 Component Types
1) Stateless Functional Component: functional components are literally  js functions, they return html which describe the UI. EX:- Properties (props) ------------>| js Functon |----------> HTML (JSX)
            function welcome(props){
                return ><h1>Hello, {props.name}</h1>
            }

                        Advantages
    1- Simple functions
    2- use functional components as much as posssible
    3- Absence of this keyboard
    4- Solution without using state
    5- Mainly responsible for UI
    6- Also called stateless/ dumb/ presentational

2) Statefull Class Components : Class Components are regular ES6 classes that extend the component class from the react library, They must contain the render method which in return the html. EX :-  Properties (props) ------------>| ES6 Class |----------> HTML (JSX)
         class welcome extends React.Componentc {
            render(){
                return <h1>hello, {this.props.name}</h1>
            }
         }

                        Advantages
    1- More feature rich
    2- Maintain there own private data - called state
    3- Complex UI  logic
    4- Provide lifecycle hooks
    5- Also called stateful / smart / container

                  JSX
- JavaScript XML (JSX) - Extension to the js language syntax
- With the react library it is the  extension to write xml code for elements and components
- Like XML jsx  tags have name, attributes and children

                    Why JSX?
JSX is not necessity to write react applications
JSX makes your react code simpler and elegant
JSX ultimately transpiles to pure JS which is understood by the browsers

                  with jsx example
const Hello =() =>{
    return(
        <div>
            <h1> hello </h1>
        </div>
    )
}
export default Hello

                without JSX
const Hello = () =>{
    return React.createElement('div'(string which specifies the html tag to be rendered), null (pass any optional porperties), React createElement('h1, null,
     (Children for the html element i.e children for the div tag)
}

                JSX Differences : - 
- class replaced -> className
- for replaced -> htmlFor
- camelCase Porperty naming convention
 . onclick -> onClick
 . tabindex -> tabIndex

        Props (properties) : are immutable means there value cant be changed 

                        props vs state
 1 - props gets passed to the component 
   - state is manage within the component
2  - analogy for this will be function parameters
   - variables declared in function body
3  - props are immutable (because the parent owns the props & cant be changed by the children.)
   - state can be changes (because its managed within the component and hence the compoent has the full control to change the state)
4  - props are accessed by 
   props in -> Functional component
   this.props in -> Class component
   - states are accessed by
   useState Hook in -> Functional component
   this.state in -> Class Component

                     setState :
 Always make use of setSate and never modify the state directly
  -code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method (first argument is object. ex in counter component)
  - When you have to update the state based on the previous state value, pass in a function as an argument instead of the regular object.


            Explaining  counter component (constructor)
  In React, the constructor method is used for initializing state, binding event handlers, or performing any other setup required for the component. However, starting from React 16.8, you can use the useState hook to manage state in functional components without using a constructor.

Here's what the code snippet does:

super(props) calls the constructor of the parent class (React.Component) and passes props to it. This is necessary to access this.props in the constructor and to initialize the base class correctly.

this.state = { count: 0 } initializes the component's state with a property count set to 0. Later, you can access and update this state using this.state.count and this.setState() method respectively within the component.
This state is used to store and manage data within the component.

           Click Handler/Event Binding
this keyword is undefined in the event handler and that is the reason event binding is necessary in class components

      Conditional Rendering
1) if/else
2) Element variables
3) Ternary conditional operator
4) Short circuit operator (if its true returns the statement otherise will not return anytthing .its used in specific cases only ex in  conditional rednedering componenet)

           Lists and Keys
- A key is a special String attribute we need to include when creating lists of elements
- Keys give the elements a stable identity
- Keys help React identify which item have changed , are added, or removed
- Helps in efficient update of the user interface

            When to use index As key
1- The items in your list ddo not have a unique ID
2- The list is a static list will not change
3- The list will never be reordered or filtered
    
          Styling React Components
    1) CSS Stylesheets
    2) Inline Styling
    3) CSS Modules
    4) CSS in JS libraries

            Controlled Component
Such from elements whose values is controlled by react is called from controlle component
  

           Lifecycle methods
- Mounting : is called when an instance of a component is being created and inserted into the DOM
    The methods in Mounting : constructor, static getDerivedStateFromProps, render and componentDidMount

- Updating : is called when a component is beiing re-rendered as a result of changes to either its props or state
    The methods in updating : static getderivedStateFromProps, shoulComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

- Unmounting : is called when a component is being removed from the DOM
     The methods in unmounting : componentWillMount

- Error handling : when there is an error during rendering, in a lifecycle method, or iin the construcor of any child component
    The methods in Error handling : static getDerivedStateFromError and componentDidCatch


            Mounting lifecycle
 1) constructor (props) : A special function that will get called whenever a new component is created. Its used for initialising state and binding the  event handlers to the class instance
 - Dp not cause side effects ex dont malke HTTP protocols request
 - Super(props) : Directly overwrites this.state it gives acces toi this.state

 2)  static getDerivedStateFromProps(props,state) : When the state of the component depends on changes in props over time . its a static method it doesnot have access to this keyword. we have to return the onject the represents the new state of the component. dont fetch data from end points

 3) redner() : only required method in a class componennt
 - read  props & state and return jsx
 - Dont change state or interact with DOM or make ajax calls
 - children components lifecycle methods are also executed

 4)  componentDidMount() : its only called once in the whole lifecycle of a given component and it is invoked immediately after a component and all its children components have been rendered in DOM
 Cause side effect - ex intract with the DOM or perform any ajax call to load data

        Updating Lifecycle methods
1) static getDerivedStateFromProps(props,state) : its rarely used in updating methods
Method is called everytime a component is re-rendered

2) shoulComponentUpdate(props, state) : Dictates if the component should re render or not. it is used for performance optimization. it is also rarely used

3) render () :mentioned above

4) getSnapshotBeforeUpdate(prevProps, prevState): its also rarely used method
  - called right before the changes from the virtual DOM are to be reflected in the DOM
  - capture some information from the DOM
  - Method will either return null or return a value. Returned value will be passed as the third parameter to the next method

  5) componentDidUpdate(prevProps, prevState, snapshot) : called after the render is finished in the re-render cycles. its  is only called once in each re-render cycle


              Unmounting Lifecycle Method
1) componentWillUnmount(): Method is invoked immedaitely before a component is unmounted and destroyed. This method can be used for cancelling any network requests, removing event, handlers, cancelling any subscriptions and also invalidating timers. Do not call the setState method
 
                   Error handling method

1)static getDerivedStateFromError(error)
2)componentDidCatch(error,info) : when there is an error either during rendering, in a lifecycle method  or in the  constructor of any child component
  
                             Fragments

​ React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.syntax <React.Fragment></React.Fragment>. Another way is empty tags (<></>) but the limitation for this is that we cannot pass key attribute

                 Regular Component vs Pure Component 

1) A regular component does not implement the shouldComponentUpdate method. It always returns true by default
- A pure component on the other hand implements the shouldComponentUpdate method with a shallow props and state comparison.
-  pure components can be used to avoid unecessary rendors and give a performance boost
- Never mutate the state.Always return a new object that reflects the new state
- Pure components always works with class based components

                    Shallow Comparison (SC)

    we will study this with respect to the
1) Primitive Types : a (sc) b returns true if a and b have the same value and are of the same type 
Ex. string 'zaid' (SC) string 'zaid' returns true

2) Complex Types : a (SC) returns if a and b reference the exact same object
Ex.
var a =[1,2,3];
var b = [1,2,3]
var c = a;

console.log(a === b); // false
console.log(a === c); // true

var a ={ x : 1, y : 2};
var b = {x : 1, y: 2}
var c = a;

console.log(a === b); // false
console.log(a === c); // true

                    What are React Refs ?
Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all. They have wide functionality as we can use callbacks with them. 
Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.

                            When to Use Refs
Refs can be used in the following cases:

- When we need DOM measurements such as managing focus, text selection, or media playback.
- It is used in triggering imperative animations.
- When integrating with third-party DOM libraries.
- It can also use as in callbacks.

                            React Portals

React portals come up with a way to render children into a DOM node that occurs outside the DOM hierarchy of the parent component. The portals were introduced in React 16.0 version.

So far we were having one DOM element in the HTML into which we were mounting our react application, i.e., the root element of our index.html in the public folder. Basically, we mount our App component onto our root element. It is almost a convention to have a div element with the id of root to be used as the root DOM element. If you take a look at the browser in the DOM tree every single React component in our application falls under the root element, i.e., inside this statement.
But React Portals provide us the ability to break out of this dom tree and render a component onto a dom node that is not under this root element. Doing so breaks the convention where a component needs to be rendered as a new element and follow a parent-child hierarchy. They are commonly used in modal dialog boxes, hovercards, loaders, and popup messages.
Syntax:

ReactDOM.createPortal(child, container)
Parameters: Here the first parameter is a child which can be a React element, string, or a fragment and the second parameter is a container which is the DOM node (or location) lying outside the DOM hierarchy of the parent component at which our portal is to be inserted.


>
