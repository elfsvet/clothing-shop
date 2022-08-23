import './button.styles.scss';
// inverted button google button and default button

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      // like onClick props in the situation with google button.
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
