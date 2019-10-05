import React from 'react';

import { ImageProps } from "../../ProfileInterfaces";

const ProfilePicture: React.FC<ImageProps> = (props) => {
	return (
		<figure className="image is-128x128">
  		<img src={props.photo} alt={props.name} />
		</figure>
	);
};

export default ProfilePicture;
