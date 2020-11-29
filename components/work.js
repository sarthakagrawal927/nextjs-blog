export default function Work(props) {
  return (
    <p>
      {props.activity}. Its a type of {props.type} work, requiring{" "}
      {props.participants} participant(s).
    </p>
  );
}
