function Work(props) {
  return (
    <>
      {props.activity}. Its a type of {props.type} work, requiring{" "}
      {props.participants} participant(s).
    </>
  );
}

export default Work;
