

//test
// const base_url ="http://43.204.94.141/coach/";

//prod
const base_url = "http://localhost:3000/";


exports.PostRequest=async (data, endPoint)=>{
  return fetch(base_url + endPoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers : new Headers({
      'Content-Type':'application/json',
    })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return(responseJson);
    })
    .catch((error)=>{
      console.log(error);
      alert("Something went wrong. please try again later.");
    });   
};




exports.GetRequest=async (params, endPoint)=>{
  if(Object.keys(params).length > 0){
    var url = new URL(base_url+endPoint);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  }
  else{
    var url = base_url+endPoint;
  }
  console.log(url)
  return fetch(url, {
    method: 'GET',
    headers : new Headers({
      'Content-Type':'application/json',
    })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return(responseJson);
    })
    .catch((error)=>{
      console.log(error);
      alert("Something went wrong. please try again later.");
    });   
};


exports.DeleteRequest=async (params, endPoint)=>{
  if(Object.keys(params).length > 0){
    var url = new URL(base_url+endPoint);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  }
  else{
    var url = base_url+endPoint;
  }
  
  return fetch(url, {
    method: 'DELETE',
    headers : new Headers({
      'Content-Type':'application/json',
    })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return(responseJson);
    })
    .catch((error)=>{
      console.log(error);
      alert("Something went wrong. please try again later.");
    });   
};



exports.PatchRequest=async (params, data, endPoint)=>{
  var url = new URL(base_url+endPoint);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers : new Headers({
      'Content-Type':'application/json',
    })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return(responseJson);
    })
    .catch((error)=>{
      alert("Something went wrong. please try again later.");
    });   
};



exports.PostRequestForm=async (data,endPoint)=>{
  return fetch(base_url+endPoint, {
    method: 'POST',
    body: data,
    headers : new Headers({
      'Content-Type':'multipart/form-data'
    })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return(responseJson);
    })
    .catch((error)=>{
      console.log(error);
      alert("Something went wrong. please try again later.");
    });   
};



exports.PatchRequestForm=async (data,endPoint)=>{
  return fetch(base_url+endPoint, {
    method: 'PATCH',
    body: data,
    headers : new Headers({
      'Content-Type':'multipart/form-data'
    })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return(responseJson);
    })
    .catch((error)=>{
      console.log(error);
      alert("Something went wrong. please try again later.");
    });   
};


