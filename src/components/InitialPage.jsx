import React from 'react'
import { AvatarGenerator } from 'random-avatar-generator';

const InitialPage = () => {
  const generator = new AvatarGenerator();
  const avatarUrl = generator.generateRandomAvatar();

  return (
    <div className="initial-page">
      <img src={avatarUrl}></img>
        <h2>Welcome to the User App</h2>
        <p>Click the "Get Users" button above to load user details!</p>
    </div>
  )
}

export default InitialPage