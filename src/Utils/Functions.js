import axios from "axios";




//Función: Call Method
//Funcion general de llamada al metodo /Call de la API



const callMethod = (account_id,method,params) => {
  // params.methodName = methodName;
  // params.accountId = accountId;
  //params.privateKey = privateKey;
 //console.log("Parametros del metodo: "+ (JSON.stringify(params)));
 //console.log(account_id);
 //console.log(process.env.REACT_APP_API_BASE_URL);
 //console.log("Método: "+JSON.stringify(method));
  const url=process.env.REACT_APP_API_BASE_URL;
  const privatekey=process.env.REACT_APP_NEAR_PRIVATE_KEY;
  const accountId=process.env.REACT_APP_NEAR_ACCOUNT_ID;
  const environment=process.env.REACT_APP_NEAR_ENV;
  var body={account_id, method,params};
  //console.log("Cuerpo de la llamada: ");
 // console.log(body);
  console.log("API url = "+url);
  console.log("Environment = "+environment);
  console.log("PrivateKey = "+privatekey);
  console.log("AccountID = "+accountId);
   return axios.post(
      "http://"+ url+"/call",
        body,
       {
         headers: {
           "Content-Type": "application/json",
           "Authorization": "Bearer "+privatekey
           ,
         },
       }
     )
     .then((res) => {
       console.log("Status: "+res.status);
       console.log("Response:")
       console.log(res);
       return res; 
     });
     
};
 
export const createRegistry = (accountId,registryName ) => {
  var resp = callMethod( 
    accountId,
    "create_registry",
   { registry_name: registryName },
    
    
  ).then((res)=>{
    if (res.data.data === false) {
      return console.log ("Failed to create registry");
    } else {
      return console.log(" Registry "+registryName+ " Created");
     
    }
  })
  return resp;
  
};

export const deleteRegistry = (registryName, accountId) => {
  var resp = callMethod(
    accountId,
    "delete_registry",
    { registry_name: registryName },
    
  
  ).then((res)=>{
    if (res.data.data === false) {
      return console.log("Failed to Delete Registry "+ registryName); 
  }

  else {
  return console.log("Registry "+registryName+" Deleted");
  }
  })

  return resp;
  
};

export const addDeviceToRegistry = (registryName, deviceName, description, accountId) => {
  var resp = callMethod(
    accountId,
    "add_device_to_registry",
    {
      registry_name: registryName,
      device_name: deviceName,
      description: description,
    },
    

  ).then((res)=>{
    if (res.data.data === false) {
      return console.log ("Failed to add Device");
    } else {
      return console.log(" Device "+deviceName+ " Added to registry");
     
    }
  })
  console.log(resp);
  return resp;
};

export const deleteDeviceFromRegistry = (registryName, deviceName, accountId) => {
  var resp = callMethod(
    accountId,
    "delete_device_from_registry",
    {
      registry_name: registryName,
      device_name: deviceName,
    },
    
  ).then((res)=>{
    if (res.data.data === false) {
      return console.log("Failed to Delete Device "+ deviceName);
  }
  else {
    return console.log("Device "+deviceName+" Deleted from Registry");
    } 
  })
  return resp;
};

export const setDeviceData = (registryName, deviceName, data, accountId) => {
  var resp = callMethod(
    accountId,
    "set_device_data",
    {
      registry_name: registryName,
      device_name: deviceName,
      data: data
    },
    
  );
  if (resp.status === 200) return "Data Saved";
  else return "Failed";
}

export const getDeviceData = (registryName, deviceName, accountId) => {
  
   var resp =  callMethod(
    accountId,
    "get_device_data",
    {
      registry_name: registryName,
      device_name: deviceName,
    },
  ).then((res)=>{
    console.log(res.data);
    return res.data;
  });
  console.log(resp);
   return resp;
   
}

export const setDeviceDataParam = (registryName, deviceName, param, value, accountId) => {
  var resp = callMethod(
    accountId,
    "set_device_data_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param,
      value: value
    },
    
    
  );
  if (resp.status === 200) return "Data Saved";
  else return "Failed";
}

export const getDeviceDataParam = (registryName, deviceName, param, accountId) => {
  var resp = callMethod(
      accountId,
    "get_device_data_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param
    },
    
    
  );
  if (resp.status === 200) return resp.data;
  else return "Failed";
}

export const setDeviceMetadata = (registryName, deviceName, metadata, accountId) => {
  var resp = callMethod(
     accountId,
    "set_device_metadata",
    {
      registry_name: registryName,
      device_name: deviceName,
      metadata: metadata
    },
   
    
  );
  if (resp.status === 200) return "Metadata Saved";
  else return "Failed";
}

export const getDeviceMetadata = (registryName, deviceName, accountId) => {
  var resp = callMethod(
    accountId,
    "get_device_metadata",
    {
      registry_name: registryName,
      device_name: deviceName,
    },
    
    
  ).then((res)=>{
    console.log(res.data)
    return res.data
    });

  
  return resp;
  
}

export const setDeviceMetadataParam = (registryName, deviceName, param, value, accountId) => {
  var resp = callMethod(
    accountId,
    "set_device_metadata_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param,
      value: value
    },
    
  );
  if (resp.status === 200) return "Metadata Saved";
  else return "Failed";
}

export const getDeviceMetadataParam = (registryName, deviceName, param, accountId, privateKey) => {
  var resp = callMethod(
    "get_device_metadata_param",
    {
      registry_name: registryName,
      device_name: deviceName,
      param: param
    },
    accountId,
    privateKey
  );
  if (resp.status === 200) return resp.data;
  else return "Failed";
}

