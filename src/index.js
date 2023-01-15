import MiniReact from "./mini-react"

const root = document.getElementById('root')

const virtualDOM = (
    <div classname="container">
        <h1>你好 Mini React</h1>
        <h2 data-test="test">(编码必杀技)</h2>
        <div>
            嵌套1 <div>嵌套 1.1</div>
        </div>
        <h3>(观察: 这个将会被改变)</h3>
        {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 == 2 && <div>2</div>}
        <span>这是一段内容</span>
        <button onClick={() => alert("你好")}>点击我</button>
        <h3>这个将会被删除</h3>
        2, 3
        <input type="text" value="13" />
    </div>
)

const modifyDOM = (
    <div classname="container">
        <h1>你好 Mini React</h1>
        <h2 data-test="test123">(编码必杀技)</h2>
        <div>
            嵌套1 <div>嵌套 1.1</div>
        </div>
        <h3>(观察: 这个将会被改变)</h3>
        {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 == 2 && <div>2</div>}
        {/* <span>这是一段被修改过的内容</span> */}
        <button onClick={() => alert("你好!!!!!")}>点击我</button>
        {/* <h6>这个将会被删除</h6> */}
        {/* 2, 3 */}
        <input type="text" value="13" />
    </div>
)

// MiniReact.render(virtualDOM, root);

// setTimeout(() => {
//     MiniReact.render(modifyDOM, root);
// }, 2000)

// console.log(virtualDOM);

function Demo() {
    return <div>hello</div>
}

function Heart(props) {
    return (
        <div>
            {props.title}
            &hearts;
            <Demo />
        </div>
    )
}

// MiniReact.render(<Heart title="hello react" />, root)
class Alert extends MiniReact.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'default title'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            title: 'change title'
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log(nextProps);
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    render() {
        console.log(this.state);
        return (
            <div>
                {this.props.name}
                {this.props.age}
                <div>
                    {this.state.title}
                    <button onClick={this.handleClick}>改变title</button>
                </div>
            </div>
        )
    }
}

// MiniReact.render(<Alert name="张三" age={20} />, root)

// setTimeout(() => {
//     MiniReact.render(<Alert name="李四" age={50} />, root)
//     // MiniReact.render(<Heart title="heart" />, root)
// }, 2000)

class DemoRef extends MiniReact.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log(this.input.value)
        // console.log(this.input)
        console.log(this.alert)
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        return (
            <div>
                <input type="text" ref={input => (this.input = input)} />
                <button onClick={this.handleClick}>按钮</button>
                <Alert ref={alert => (this.alert = alert)} name="张三" age={20} />
            </div>
        )
    }
}

// MiniReact.render(<DemoRef />, root)

class KeyDemo extends MiniReact.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    id: 1,
                    name: "张三"
                },
                {
                    id: 2,
                    name: "李四"
                },
                {
                    id: 3,
                    name: "王五"
                },
                {
                    id: 4,
                    name: "赵六"
                }
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        const newState = JSON.parse(JSON.stringify(this.state))
        // newState.persons.push(newState.persons.shift())
        // newState.persons.splice(1, 0, { id: 100, name: "李逵" })
        newState.persons.pop()
        this.setState(newState)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.map(person => (
                        <li key={person.id}>
                            {person.name}
                            <DemoRef />
                        </li>
                    ))}
                </ul>
                <button onClick={this.handleClick}>按钮</button>
            </div>
        )
    }
}

MiniReact.render(<KeyDemo />, root)