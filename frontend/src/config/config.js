const getAPI_URL = () => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV.toLowerCase() === 'development') {
    if (typeof process.env.REACT_APP_DEV_API_URL === 'undefined') {
      console.log('\nNO `REACT_APP_DEV_API_URL` DEFINED\n');
      return null;
    }
    return process.env.REACT_APP_DEV_API_URL;
  } else if (process.env.NODE_ENV.toLowerCase() === 'production') {
    if (typeof process.env.REACT_APP_PROD_API_URL === 'undefined') {
      console.log('\nNO `REACT_APP_PROD_API_URL` DEFINED\n');
      return null;
    }
    return process.env.REACT_APP_PROD_API_URL;
  }

  console.log('\nNO NODE_ENV DEFINED\n');
  return null;
};

const config = {
  API_URL: getAPI_URL(),
};

export default config;
