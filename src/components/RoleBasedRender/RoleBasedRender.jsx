import React from 'react';
import { connect } from 'react-redux';

/**
 * Example usage:
 * <RoleBasedRender requiredRoles={ ['Администратор'] } >
 *  <ComponentToRender />
 * </RoleBasedRender>
 * ComponentToRender will only render if currentUser has a role 'Администратор'
 */

function RoleBasedRedner({ requiredRoles, currentUserRole, children }) {
  return (
    <>
    { requiredRoles.includes(currentUserRole) && children }
    </>
  );
}

const mapStateToProps = state => ({
  currentUserRole: state.user.role,
});

export default connect(mapStateToProps, null)(RoleBasedRedner);