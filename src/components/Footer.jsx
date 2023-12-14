const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="pb-10">
      <h1 className="font-raleway text-[15px] font-[400] text-center text-[#5C606C]">
        &copy; Copyright Mahdi Mortuza, {year}
      </h1>
    </div>
  );
};

export default Footer;
