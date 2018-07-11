/* eslint-disable */
import configurationHandler from './configurationHandler';

class HeaderMod {
	constructor() {

		this.config = new configurationHandler();
		this.eventListener = this.onBeforeSendHeadersListener.bind(this);
		this.config.on('change', this.addListeners.bind(this));

    this.addListeners();
	}

	removeListeners() {
		chrome.webRequest.onBeforeSendHeaders.removeListener(this.eventListener);
	}

	addListeners() {
		this.removeListeners();
		chrome.webRequest.onBeforeSendHeaders.addListener(
			this.eventListener,
			this.config.getUrlFilters(),
			this.config.getExtraInfoSpec()
		);
	}

	onBeforeSendHeadersListener(details) {
    
		let requestHeaders = details.requestHeaders;

		let services = this.config.getServices();

		for (let i = 0; i < services.length; i++) {
			let service = services[i];

			if (!service.enabled) {
				continue;
			}

			requestHeaders.push({ name: 'hprop-' + service.name, value: service.value });
		}

		return { requestHeaders };
	}
}

export default HeaderMod;
