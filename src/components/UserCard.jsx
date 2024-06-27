import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AvatarGenerator } from 'random-avatar-generator';

const UserCard = ({ user }) => {
    if (!user) {
      return null;
    }
  const generator = new AvatarGenerator();
  const avatarUrl = generator.generateRandomAvatar();

  return (
    <div className='card'>
      <Card style={{ width: '20rem' }}>
        <Card.Img className='card-img' variant="top" src={avatarUrl} />
        <Card.Body>
          <Card.Title className='card-title'>{user.first_name} {user.last_name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Button variant="primary">Connect</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
