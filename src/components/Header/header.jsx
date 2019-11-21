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
    key: 'Клиент',
    text: 'Клиент',
    value: 'Клиент',
  },
  {
    key: 'Администратор',
    text: 'Администратор',
    value: 'Администратор',
  },
  {
    key: 'Менеджер',
    text: 'Менеджер',
    value: 'Менеджер',
  },
  {
    key: 'Наблюдатель',
    text: 'Наблюдатель',
    value: 'Наблюдатель',
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
          <li className="logo"><img src={logo} alt="logo"/> <span className="logoText">обмен- <br/>ник</span></li>
          <RoleBasedRender requiredRoles={ ['Администратор', 'Менеджер', 'Наблюдатель'] } >
            <li>
              <NavLink className="link" activeClassName="active-link" to="/contract">Контракт
                {!contractStatus && (<span className="headerText">(Приостановлен)</span>)}
              </NavLink></li>
            <li><NavLink className="link" activeClassName="active-link" to="/users">Пользователи</NavLink></li>
            <li><NavLink className="link" activeClassName="active-link" to="/addresses">Адреса</NavLink></li>
            <li><NavLink className="link" activeClassName="active-link" to="/journal">Журнал</NavLink></li>
          </RoleBasedRender>
          <li><NavLink className="link" activeClassName="active-link" to="/transactions">Транзакции</NavLink></li>
          <RoleBasedRender requiredRoles={ ['Клиент'] } >
            <li><NavLink className="link" activeClassName="active-link" to="/permissions">Разрешения</NavLink></li>
          </RoleBasedRender>
          <li><NavLink className="link" activeClassName="active-link" to="/profile">Мой профиль</NavLink></li>
          <li><NavLink className="link" activeClassName="active-link" to="/login">Логин</NavLink></li>
        </ul>
    
        <div className="balans">
          <RoleBasedRender requiredRoles={ ['Клиент'] } >
            <div>
              <span>Баланс 532 ₽ </span>
              <button className="primary-button" type="button" onClick={() => childReplenishRef.current.showModal()}>Пополнить</button>
              <button className='secondary-button' onClick={() => childWithdrawRef.current.showModal()}>Снять</button>
            </div>
          </RoleBasedRender>
          <ul>
            <RoleBasedRender requiredRoles={ ['Администратор', 'Менеджер', 'Наблюдатель'] } >
              <li><span className="headerText">{userRole}</span></li>
            </RoleBasedRender>
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
