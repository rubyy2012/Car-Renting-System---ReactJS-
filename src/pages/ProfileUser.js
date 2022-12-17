import React from 'react';
import Header from '../layout/Header/Header'
import ProfileLayout from '../layout/ProfileUserLayout/ProfileUser'
function ProfileUser(props) {
    return (
        <div>
            <Header/>
            <ProfileLayout/>
        </div>
    );
}

export default ProfileUser;