import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wapper as PopperWapper } from '~/components/Popper';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function Menu( {Children} ) {

    return (
        <div className={cx("wapper")}>
              <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWapper>
                        <h2>MENU ITEM</h2>
                    </PopperWapper>
                </div>
            )}
        >
              
            { Children }
        </Tippy>
        </div>
    );
}

export default Menu;
