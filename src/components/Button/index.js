import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cs = classNames.bind(styles);

function Button({
  to,
  href,
  primary,
  preprimary,
  children,
  upload,
  recommentBtn,
  btnHeader,
  onClick,
}) {
  let Comp = "button";

  const classes = cs("wrapper", {
    primary,
    preprimary,
    upload,
    btnHeader,
    recommentBtn,
  });

  return (
    <Comp className={classes}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
