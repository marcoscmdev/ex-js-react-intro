import './TodoButton.css';
function CreateTodoButton() {
  return <button className="CreateTodoButton"
  onClick={
    ()=>  {
      console.log('Click en el boton de crear TODO')
      console.log(event)
      console.log(event.target)
    }
  }>+</button>;
}
export { CreateTodoButton };
