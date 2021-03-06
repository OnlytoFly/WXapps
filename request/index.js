export const request=(params)=>{
  const baseURL="http://119.3.167.24:8080/ssm/";
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseURL+params.url,
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      }

    });
  })
}
export const postrequest=(params)=>{
  const baseURL="http://119.3.167.24:8080/ssm/";
  return new Promise((resolve,reject)=>{
    wx.request({
      ...params,
      url:baseURL+params.url,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:(result)=>{
        resolve(result);
      },
      fail:(err)=>{
        reject(err);
      }

    });
  })
}