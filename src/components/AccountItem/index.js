import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/ec420eed41c3934a1f9b86d3903a61f6~c5_100x100.jpeg?x-expires=1701266400&x-signature=pI5T0rr6vPDTvNktk%2FeJmzHjkSI%3D"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Nguyen van A</span>
                    <FontAwesomeIcon  className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('user_name')}>Nguyen van A</span>
            </div>
        </div>
    );
}

export default AccountItem;

