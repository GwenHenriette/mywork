import axios from 'axios';




export const PolypharmacyCommonBackendUpdate = async (name, column, value) => {

  try {

    const response = await axios.post('https://gpgc-server.vercel.app/api/PolypharmacyCommon/update', {

     name,

     column,

     value

    });

    console.log(response.data); // log response from server

    return response.data;

  } catch (error) {

    console.error(error);

    throw error; // throw error to be handled by calling function

  }

};




export const submitData = async (listHeader, description) => {
  try {
    const response = await axios.post('https://gpgc-server.vercel.app/api/add/PolypharmacyCommon', {
      listHeader, description
    });
    console.log(response.data); // log response from server
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // throw error to be handled by calling function
  }
};