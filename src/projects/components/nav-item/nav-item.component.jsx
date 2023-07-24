import "./nav-item.styles.scss";

const NavItem = ({ text, active = "", navItemClasses, onClick }) => {
  return (
    <div className="nav-item">
      <a href="#"  className={`${navItemClasses} nav-link ${active}`} onClick={onClick}>
        {text}
      </a>
    </div>
  );
};

export default NavItem;
