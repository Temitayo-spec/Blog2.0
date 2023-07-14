const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return <div>{renderDefault(props)}</div>;
};

export default Logo;
