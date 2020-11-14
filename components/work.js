export default function Work(props) {
  return (
    <a href='google.com' title='Google '>
      {props.activity}. Its a type of {props.type} work, requiring{" "}
      {props.participants} participant(s).
    </a>
  );
}
