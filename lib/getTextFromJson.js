export const getTextFromJson = body => {
	const parsedBody = JSON.parse(body);
	const text = parsedBody.root.children
		.map(child => child.children[0].text)
		.join(' ');
	const newBody =
		text.length > 100
			? text.substring(0, 100) + '...'
			: text.substring(0, 100) + '';
	return newBody;
};
