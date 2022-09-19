const {notifications} = require('../../services/notifications');
const settingsService = require('../../services/settings/settings-service');
const settingsBREADService = settingsService.getSettingsBREADServiceInstance();
const internalContext = {context: {internal: true}};

module.exports = {
	docName: 'uploadFile',
	
	browse: {
		permissions: false,
		query() {
			return 11;
		}
	},
	
	/**
	 * Clears all notifications. Method used in tests only
	 *
	 * @private Not exposed over HTTP
	 */
	destroyAll: {
		statusCode: 204,
		permissions: {
			method: 'destroy'
		},
		async query() {
			const allNotifications = notifications.destroyAll();
			
			await settingsBREADService.edit([{
				key: 'notifications',
				value: allNotifications
			}], internalContext);
		}
	}
};
