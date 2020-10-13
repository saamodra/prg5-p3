function CustomButton() {
  return (
    <div className="btn-container">
      <div className="card-header">
        <h1>Custom Button</h1>
      </div>
      <div className="card-body">
        <RenderButton color="green" description="Success" />
        <RenderButton color="red" description="Error" />
        <RenderButton color="orange" description="Warning" />
        <RenderButton color="blue" description="Primary" />
        <RenderButton color="grey" description="Default" />
      </div>
    </div>
  )
}

function RenderButton(props) {
  return (
    <button type="button" className={`btn button-${props.color}`}>{props.description}</button>
  )
}

ReactDOM.render(<CustomButton/>, document.getElementById('container'));