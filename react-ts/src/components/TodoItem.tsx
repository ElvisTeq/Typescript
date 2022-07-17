// React.FC<{ text: string }> => This makes the parent Component to expect "text"
const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
