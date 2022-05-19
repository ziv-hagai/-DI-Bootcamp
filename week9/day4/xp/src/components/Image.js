const Image = (props) => {
  // console.log(props);
  // const { name, username, email, address, id } = user;
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img alt={props.alt} src={props.src} />
    </div>
  )
};

export default Image;
