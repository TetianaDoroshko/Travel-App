import commonStyle from '../../styles/App.module.css';

const HiddenLabel = ({ children }) => {
    <span className={commonStyle.visuallyHidden}>{children}</span>;
};

export default HiddenLabel;
