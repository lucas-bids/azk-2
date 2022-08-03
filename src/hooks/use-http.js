const useHttp = () => {
    
    const sendRequest = async (requestConfig, applyData) => {

    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: requestConfig.headers ? requestConfig.headers : {},
    });

    const responseData = await response.json();

    applyData(responseData);
  };

  return { sendRequest };
};

export default useHttp;
