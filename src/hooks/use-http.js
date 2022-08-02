const useHttp = (requestConfig, applyData) => {
    
    const sendRequest = async () => {

    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });

    const responseData = await response.json();

    applyData(responseData);
  };

  return { sendRequest };
};

export default useHttp;
