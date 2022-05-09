const User = (props) => {
  console.log(props);
  return (
    <>
      <h2>User info:</h2>
      <h4>{props.name}</h4>
      <p>{props.username}</p>
      <p>{props.email}</p>
    </>
  )
}
export default User;
