import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './header.scss'
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setUserRole } from '../../store/user/actions';
import WithdrawMoneyModal from "../modals/WithdrawModey/WithdrawMoneyModal";
import ReplenishModal from "../modals/Replenish/ReplenishModal";

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
          {/* <div className="bell">123
            <div className="notification-container">

              <div className="ui positive green message">
                <i className="close icon"></i>
                <div className="header">Уведомления</div>
                <p>The first notification</p>
              </div>

            </div>
          </div> */}
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
