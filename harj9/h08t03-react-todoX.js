// ---------------------
// TodoBanner component
// ---------------------
class TodoBanner extends React.Component {
    // render this component
    render (){
        return (
            <h1>Todo Example with React</h1>
        )
    }
}

// ---------------------
// TodoList component
// ---------------------
class TodoList extends React.Component {

    // render this component
    // Muista koko tehtävän kinkkisin paikka
    // this.props.ITEMS.map
    render () {
      return (
         <ul>
            {this.props.items.map( (item, index) => 
            <li key={index}>{item} <img src="delete.jpg" className="delete" onClick={ this.props.removeItem.bind(this, index) } /></li> )}
        </ul>
      )
    }
}

// ---------------------
// TodoForm component
// ---------------------
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // add a new item -> call parent
    handleSubmit (e) {
        // prevent normal submit event
        e.preventDefault();
        // call parent to add a new item
        this.setState({ item: this.refs.item.value });
        this.props.onFormSubmit(this.refs.item.value);
        // let tempItem = this.refs.item.value;
        // this.props.addItem(tempItem);
        // console.log(tempItem);
        // remove new typed item from text input
        this.refs.item.value = "";
        this.setState({ item: "" });
        // focus text input
        this.refs.item.focus();
    }

    // render component
    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="item" />
                <input type="submit" value="Add" />
            </form>
        );
    }
}

// ----------------
// App component
// ----------------
class App extends React.Component {
    // init state
    constructor(props) {
      super(props);
      this.state = { items: [] };
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
    }

    // add a new item
    addItem (newItem) {
        let tempItems = this.state.items;
        tempItems.unshift(newItem);
        // render again
        this.setState({ items: tempItems })
    };

    // remove item
    removeItem (index){
        var array = [...this.state.items]; // make a separate copy of the array
        // remove from items array
        array.splice(index, 1);
        // render again
        this.setState({ items: array });
    }

    // render component
    render () {
        return (
            <div>
                <TodoBanner />
                <TodoForm onFormSubmit={this.addItem} />
                <TodoList items={this.state.items} removeItem={this.removeItem} />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
