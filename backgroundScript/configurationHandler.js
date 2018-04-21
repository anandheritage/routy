/* eslint-disable */
class configurationHandler {
	constructor() {

    this.events = {
      'change':[]
    }
		this.services = [
			{
				name: 'flights-core',
				value: 'flights-multi-staging',
				enabled: true,
				data: ['flights-multi-staging']
			}
		];

		this.urlFilters = { urls: ['<all_urls>'] };

    this.extraInfoSpec = ['requestHeaders', 'blocking'];

    chrome.runtime.onMessage.addListener(this.onMessageHandler.bind(this));
	}

  setServices(services){
    this.services = services;
  }

  getServices(){
    return this.services;
  }

  setUrlFilters(urlFilters){
    this.urlFilters = urlFilters;
    this.emit('change');
  }

  getUrlFilters(){
    return this.urlFilters;
  }

  setExtraInfoSpec(extraInfoSpec){
    this.extraInfoSpec = extraInfoSpec;
    this.emit('change');
  }

  getExtraInfoSpec(){
    return this.extraInfoSpec;
  }
  /*

  request: {
      id: 'bgs/configurationHandler',
      action: functionName,
      parameters :[array of parameters],
      expectingResponse: Boolean
  }

  */
  onMessageHandler(request, sender, handleResponse){
    if(request.id !== 'bgs/configurationHandler'){
      return;
    }

    let { action, parameters, expectingResponse } = request;

    if(!action){
      return;
    }

    let returnValue = this[action](...parameters);

    if(expectingResponse && handleResponse){
      handleResponse(returnValue);
    }
  }

  on(eventName, action){
    if(!this.events[eventName]){
      return;
    }

    this.events[eventName].push(action);
  }

  emit(eventName){
    if(!this.events[eventName]){
      return;
    }

    for(let i=0;i<this.events[eventName].length;i++){
      this.events[eventName][i]();
    }
  }

}

export default configurationHandler;
