import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import DataRenderer from '../DataRenderer';

import { BackLink } from './NoteStyles';

const CreateNote = ({ onFormClick }) => {
	return (
		<>
			<Link href="/panel" passHref>
				<BackLink>
					<FaArrowAltCircleLeft />
				</BackLink>
			</Link>
			<DataRenderer create={true} onFormSubmit={onFormClick} />
		</>
	);
};

export default CreateNote;
