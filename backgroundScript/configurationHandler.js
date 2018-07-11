/* eslint-disable */
class configurationHandler {
	constructor() {

    this.events = {
      'change':[]
    }
    this.services = localStorage.services ? JSON.parse(localStorage.services) : [];
    this.preferences = localStorage.preferences ? JSON.parse(localStorage.preferences) : {
      service_url: null,
      namespaces: null,
      url_filters: null
    }

    this.updateFilters();

    // Use '<all_urls>' to intercept headers for all domains
		this.urlFilters = { urls: this.filters };

    this.extraInfoSpec = ['requestHeaders', 'blocking'];

    chrome.runtime.onMessage.addListener(this.onMessageHandler.bind(this));
  }
  
  updateFilters(){
    this.filters = [];
    if(this.preferences.url_filters != null && this.preferences.url_filters != '') this.filters.push('*://' + this.preferences.url_filters + '/*');
    this.urlFilters = { urls: this.filters };
  }

  setServices(services){
    this.services = services;
    localStorage.services = JSON.stringify(services);
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

  getPreferences(){
    return this.preferences;
  }

  setPreferences(preferences){
    this.preferences = preferences;
    this.updateFilters();
    localStorage.preferences = JSON.stringify(preferences);
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
