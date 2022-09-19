
module.exports = {
	docName: 'identities',
	read: {
		permissions: true,
		async query() {
			const token = 11;
			return {token};
		}
	}
};
