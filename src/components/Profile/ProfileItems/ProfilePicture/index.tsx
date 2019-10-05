import React from 'react';

interface ImageProps {
	photo: string,
	name: string
};

const ProfilePicture: React.FC<ImageProps> = (props) => {
	return (
		<figure className="image is-1by1">
  		<img src={props.photo} alt={props.name} />
		</figure>
	);
};

export default ProfilePicture;
