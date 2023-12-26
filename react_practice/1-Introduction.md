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

                     -setState :
 Always make use of setSate and never modify the state directly
  -code has to be executed after the state has been updated? Place that code in the call back function which is the second argument to the setState method (first argument is object. ex in counter component)
  - When you have to update the state based on the previous state value, pass in a function as an argument instead of the regular object.


            // explaining  counter component (constructor)
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




>
