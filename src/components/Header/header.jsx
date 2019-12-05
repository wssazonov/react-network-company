import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import bell from '../../assets/bell.svg';
import './header.scss';
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setUserRole } from '../../store/user/actions';
import WithdrawMoneyModal from "../modals/WithdrawModey/WithdrawMoneyModal";
import ReplenishModal from "../modals/Replenish/ReplenishModal";

import { makeStyles } from '@material-ui/core/styles';
import { Popover } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const notificationData = [
  {
    text: "Необходимо отправить макет Availability"
  },
  {
    text: "Ещё одно очень важное уведомление, которое не помещается в одну строку"
  }
];

const ROLE_OPTIONS = [
  {
    key: 'Администратор',
    text: 'Администратор',
    value: 'Администратор',
  },
  {
    key: 'Потребитель',
    text: 'Потребитель',
    value: 'Потребитель',
  }
];

function Header({ userRole, setUserRole, contractStatus }) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    anchorEl ? handleClose() : setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleRoleChange = (event, data) => setUserRole(data.value);

  const childWithdrawRef = useRef();
  const childReplenishRef = useRef();
  return (
    <>
      <WithdrawMoneyModal ref={childWithdrawRef}/>
      <ReplenishModal ref={childReplenishRef}/>
      <Dropdown
          value={ userRole }
          fluid
          className="small-input app-dropdown-button"
          selection
          icon='angle down'
          onChange={ handleRoleChange }
          options={ROLE_OPTIONS}
      />
      <nav>
        <ul>
          <li className="logo"><img src={logo} alt="logo"/></li>
            <li><NavLink className="link" activeClassName="active-link" to="/objects">Объекты</NavLink></li>
            <li><NavLink className="link" activeClassName="active-link" to="/consumers">Потребители</NavLink></li>
            <li><NavLink className="link" activeClassName="active-link" to="/statistic">Статистика</NavLink></li>
            <RoleBasedRender requiredRoles={ ['Администратор'] } >
              <li><NavLink className="link" activeClassName="active-link" to="/ready">Готовность</NavLink></li>
            </RoleBasedRender>
            <RoleBasedRender requiredRoles={ ['Потребитель'] } >
              <li><NavLink className="link" activeClassName="active-link" to="/ready-object">Готовность</NavLink></li>
            </RoleBasedRender>
          <li><NavLink className="link" activeClassName="active-link" to="/dr-events">DR-события</NavLink></li>
          {/* <RoleBasedRender requiredRoles={ ['Клиент'] } > */}
            {/* <li><NavLink className="link" activeClassName="active-link" to="/permissions">Документы</NavLink></li> */}

            <li><NavLink className="link" activeClassName="active-link" to="/documents">Документы</NavLink></li>
          {/* </RoleBasedRender> */}
          <li><NavLink className="link" activeClassName="active-link" to="/settings">Настройки</NavLink></li>
          <li><NavLink className="link" activeClassName="active-link" to="/login">Логин</NavLink></li>
        </ul>
    
        <div className="balans">
          <div className="popover">
            <div onClick={handleClick} className={ (anchorEl ? 'bell-active ' : '') + 'bell'}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M12.9844 15.0156V9.01562C12.9844 7.73438 12.625 6.67188 11.9062 5.82812C11.1875 4.95312 10.2188 4.51562 9 4.51562C7.78125 4.51562 6.8125 4.95312 6.09375 5.82812C5.375 6.67188 5.01562 7.73438 5.01562 9.01562V15.0156H12.9844ZM15 13.9844L17.0156 16V16.9844H0.984375V16L3 13.9844V9.01562C3 7.45312 3.39062 6.09375 4.17188 4.9375C4.98438 3.78125 6.09375 3.03125 7.5 2.6875V1.98438C7.5 1.57812 7.64062 1.23438 7.92188 0.953125C8.20312 0.640625 8.5625 0.484375 9 0.484375C9.4375 0.484375 9.79688 0.640625 10.0781 0.953125C10.3594 1.23438 10.5 1.57812 10.5 1.98438V2.6875C11.9062 3.03125 13 3.78125 13.7812 4.9375C14.5938 6.09375 15 7.45312 15 9.01562V13.9844ZM10.4062 19.4219C10 19.7969 9.53125 19.9844 9 19.9844C8.46875 19.9844 8 19.7969 7.59375 19.4219C7.1875 19.0156 6.98438 18.5469 6.98438 18.0156H11.0156C11.0156 18.5469 10.8125 19.0156 10.4062 19.4219Z" fill="black"/>
              </svg>
              { notificationData && notificationData.length > 0 && <span className="orange-dot"/> }
            </div>

            {/*<img src={bell} alt="logo" onClick={handleClick}/>*/}
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 28,
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div className="popup-header">
                <span>Уведомления</span>
                <svg onClick={() => setAnchorEl(null)} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" d="M9.65625 1.28125L5.9375 5L9.65625 8.71875L8.71875 9.65625L5 5.9375L1.28125 9.65625L0.34375 8.71875L4.0625 5L0.34375 1.28125L1.28125 0.34375L5 4.0625L8.71875 0.34375L9.65625 1.28125Z" fill="black"/>
                </svg>
              </div>
              <div className="notifications-container">
                {
                  notificationData.map((x, i) =>
                  <div key={i} className="notifications-container__item">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.65625 10.3438V6.34375C8.65625 5.48958 8.41667 4.78125 7.9375 4.21875C7.45833 3.63542 6.8125 3.34375 6 3.34375C5.1875 3.34375 4.54167 3.63542 4.0625 4.21875C3.58333 4.78125 3.34375 5.48958 3.34375 6.34375V10.3438H8.65625ZM10 9.65625L11.3438 11V11.6562H0.65625V11L2 9.65625V6.34375C2 5.30208 2.26042 4.39583 2.78125 3.625C3.32292 2.85417 4.0625 2.35417 5 2.125V1.65625C5 1.38542 5.09375 1.15625 5.28125 0.96875C5.46875 0.760417 5.70833 0.65625 6 0.65625C6.29167 0.65625 6.53125 0.760417 6.71875 0.96875C6.90625 1.15625 7 1.38542 7 1.65625V2.125C7.9375 2.35417 8.66667 2.85417 9.1875 3.625C9.72917 4.39583 10 5.30208 10 6.34375V9.65625ZM6.9375 13.2812C6.66667 13.5312 6.35417 13.6562 6 13.6562C5.64583 13.6562 5.33333 13.5312 5.0625 13.2812C4.79167 13.0104 4.65625 12.6979 4.65625 12.3438H7.34375C7.34375 12.6979 7.20833 13.0104 6.9375 13.2812Z" fill="#1AA5B8"/>
                    </svg>
                    <div className="notification-text">{ x.text }</div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.4">
                        <path d="M6.65625 4L10.6562 8L6.65625 12L5.71875 11.0625L8.78125 8L5.71875 4.9375L6.65625 4Z" fill="black"/>
                      </g>
                    </svg>
                  </div>
                  )
                }
              </div>
            </Popover>
          </div>
          <ul>
            <li className="logo">
              <NavLink className="link linkBorder" to=''>mail@mail.mail <span className="caret"></span></NavLink>
              <div>
                <ul>
                  <li><NavLink className="link" to="/profile">Выйти из системы</NavLink></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = state => ({
  userRole: state.user.role,
  contractStatus: state.contract.status,
});

const mapDispatchToProps= {
  setUserRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
