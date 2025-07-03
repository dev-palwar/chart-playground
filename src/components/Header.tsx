import githubIcon from "../assets/github-icon.svg";

const Header = () => {
  return (
    <div className="p-4 flex justify-end">
      <a target="_blank" href="https://github.com/dev-palwar/">
        <img src={githubIcon} alt="" />
      </a>
    </div>
  );
};

export default Header;
