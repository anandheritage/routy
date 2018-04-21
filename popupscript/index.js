sendMessageTobackgroundScript = function(action, parameters, callback){
  let request = {
    id: 'bgs/configurationHandler',
    action,
    parameters,
  }

  if(callback){
    request.expectingResponse = true;
  }
  chrome.runtime.sendMessage(request, callback);
}
