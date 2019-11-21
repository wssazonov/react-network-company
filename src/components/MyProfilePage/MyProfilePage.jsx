import React from 'react';
import { connect } from 'react-redux';
import UserProfile from '../UserProfile/UserProfile';

function MyProfilePage({ user }) {
  const handleSubmit = event => console.log('Clicked Submit');
  return (
    <div className="page-content">
      <UserProfile title="Мой профиль" user={ user } onSubmit={ handleSubmit }/>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(MyProfilePage);
