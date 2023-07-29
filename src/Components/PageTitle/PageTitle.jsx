import style from '../../styles/App.module.css';
import PropTypes from 'prop-types';

const PageTitle = ({ subTitle, children, hidden }) => {
    const classNames = hidden ? style.visuallyHidden : null;
    return subTitle ? <h1 className={classNames}>{children}</h1> : <h1 className={classNames}>{children}</h1>;
};

PageTitle.propTypes = {
    children: PropTypes.node,
    hidden: PropTypes.bool,
    subTitle: PropTypes.bool
};

export default PageTitle;
