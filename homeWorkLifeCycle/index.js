//1. Используя один из методов жизненного цикла сделать так, чтобы через 1000 мс после рендера цвет сменился на Yellow

class ColorInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "Green" };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ color: "Yellow" });
      }, 1000);
    }
  
    render() {
      return <h1>Color is {this.state.color}</h1>;
    }
  }

  //2. Используя метод жизненного цикла shouldComponentUpdate сделать так, чтобы при нажатии на кнопку не произошло обновление компонента
  
  class ColorInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "Green" };
    }
  
    changeColor = () => {
      this.setState({ color: "Blue" });
    };

    shouldComponentUpdate(_nextProps, nextState) {
        if (this.state.color !== nextState.color) {
            return true;
        }
        return false;
    }
  
    render() {
      return (
        <>
          <h1>Color is {this.state.color}</h1>
          <button type="button" onClick={this.changeColor}>
            Change color
          </button>
        </>
      );
    }
  }
  
//3. Используя один из методов жизненного цикла после обновления компонента Вывести в div(id=color-div) такой текст:
//The updated color is {this.state.color}

class ColorInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: "violet" };
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ color: "gray" });
      }, 1000);
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.color !== this.state.color) {
          document.getElementById("color-div").innerHTML = `The updated color is ${this.state.color}`;
        };
      }
  
    render() {
      return (
        <div>
          <h1>Color is {this.state.color}</h1>
          <div id="color-div"></div>
        </div>
      );
    }
  }

  //4.Добавить кнопку, при нажатии на которую компонент Child будет убираться из рендера в Container'е

  class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: true };
    }
  
    handleClick = () => {
      this.setState({ show: false });
    }
  
    render() {
      let childComponent = null;
  
      if (this.state.show) {
        childComponent = <Child />;
      }
  
      return (
        <>
          {childComponent}
          <button onClick={this.handleClick}>Remove Child</button>
        </>
      );
    }
  }
  
  class Child extends React.Component {
    componentWillUnmount() {
      alert("The component Child is unmounting.");
    }
  
    render() {
      return <h1>Children!</h1>;
    }
  }
  