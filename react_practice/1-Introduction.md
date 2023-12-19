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




>
