import React, {useRef} from 'react';
import { NavLink } from 'react-router-dom';
import RoleBasedRender from '../../RoleBasedRender/RoleBasedRender';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setUserRole } from '../../../store/user/actions';
import './DocumentsNavPage.scss';

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

function DocumentsNavPage({ userRole, setUserRole}) {
  const handleRoleChange = (event, data) => setUserRole(data.value);
  return (
    <>
      <nav>
        <ul>
          <li><NavLink className="link" activeClassName="active-link" to="/users">Сведения</NavLink></li>
          <li><NavLink className="link" activeClassName="active-link" to="/addresses">Готовность</NavLink></li>
          <li><NavLink className="link" activeClassName="active-link" to="/journal">Потребление</NavLink></li>
          <li><NavLink className="link" activeClassName="active-link" to="/transactions">Акты</NavLink></li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsNavPage);
