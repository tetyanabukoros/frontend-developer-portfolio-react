import './button.scss';

type ButtonProps = {
  title: string,
  link: string,
  icon: string
}

const Button = ({ title, link, icon }: ButtonProps) => {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer" className="skeleton-button btn">
      <img src={icon} alt={`${title} icon`} />
      {title}
    </a>);
}

export default Button;