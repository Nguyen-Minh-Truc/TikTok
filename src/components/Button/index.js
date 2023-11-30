import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';


const cx = classNames.bind(style);

function Button({
    to,
    href,
    children,
    disabled =false,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    className,

    onClick,
}) {
    let Component = 'button';
    const props = {
        onClick,
    };
// remove event onclick when btn is disabled
    if(disabled){
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx('wrapper', {
        [className] : className,
        disabled,
        primary,
        outline,
        text,
        rounded,
        small,
        large,
      
    });

    return (
        <Component className={classes} {...props}>
            <span>{children}</span>
        </Component>
    );
}

export default Button;
