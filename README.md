# REDUCE function imperatively

## Basic imperative Reduce function in React component

<h1>Reduce imperatively</h1> <br/>
class App extends Component { <br/>
&nbsp;&nbsp;render() { <br/>
&nbsp;&nbsp;&nbsp;&nbsp;let acc = 0; <br/>
&nbsp;&nbsp;&nbsp;&nbsp;const array = [1, 2, 3, 4, 5] <br/>
&nbsp;&nbsp;&nbsp;&nbsp;for (let i = 0; i < array.length; i++) { <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(acc) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;acc += array[i] <br/>
&nbsp;&nbsp;&nbsp;&nbsp;} <br/>
&nbsp;&nbsp;<p>return ( </p><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<p>{acc}</p> <br/>
&nbsp;&nbsp;}<br/>
}

## Installation 

```
git clone git@github.com:GoogleNanodegreeScholarship/reduce-imperatively.git
cd reduce
npm install
```
