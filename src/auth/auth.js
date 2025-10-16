import axios from "axios";
import { API_URL } from "../../env";

export const LoginAPI = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/login_md_steward`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata
    };
    console.log('configconfig', config);

    axios
      .request(config)
      .then(response => {
        resolve(response.data);
        console.log('responsedata',response.data)
      })
      .catch(error => {
        if (error.response) {
          reject(error.response.data);
          console.log('response1111error',error)
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};

export const LogoutAPI = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/logout`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('logout config', config);

    axios
      .request(config)
      .then(response => {
        console.log('logout response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('logout error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};



export const Notification = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/notification_list`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('logout config', config);

    axios
      .request(config)
      .then(response => {
        console.log('Notification response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Notification error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};


export const CareUnit = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/careUnit`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('CareUnit config', config);

    axios
      .request(config)
      .then(response => {
        console.log('CareUnit response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('CareUnit error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};


export const PatiensList = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/patient_list`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('PatiensList config', config);

    axios
      .request(config)
      .then(response => {
        console.log('PatiensList response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('PatiensList error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};

 

export const patientListExisting = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/patient_list_existing`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('PatiensList config', config);

    axios
      .request(config)
      .then(response => {
        console.log('PatiensList response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('PatiensList error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};






export const patientDetails = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/patient_details`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('patient Details config', config);

    axios
      .request(config)
      .then(response => {
        console.log('patient Details response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('patient Details error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};



export const addPatient = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/add_patient`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('Add Patient config', config);

    axios
      .request(config)
      .then(response => {
        console.log('Add Patient response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Add Patient error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};

export const notificationDelete = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/notification_list_delete`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    console.log('Notification Delete config', config);

    axios
      .request(config)
      .then(response => {
        console.log('Notification Delete response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Notification Deletet error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};



export const GetInitialDx = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/initialDx`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('Initial Dx Delete config', config);
    axios
      .request(config)
      .then(response => {
        console.log('Initial Dx Delete response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Initial Dx Deletet error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};



export const GetInitialRx = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/initialRx`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('Initial Rx` Delete config', config);
    axios
      .request(config)
      .then(response => {
        console.log('Initial Rx` Delete response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Initial Rx` Deletet error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};


export const Getorganism = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/organism`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('Get organism config', config);
    axios
      .request(config)
      .then(response => {
        console.log('Get organism response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Get organism   error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};


export const GetPrecautions = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/precautions`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('Get precautions config', config);
    axios
      .request(config)
      .then(response => {
        console.log('Get precautions response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Get precautions   error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};




export const GetDoctors = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/doctors`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('Get doctors config', config);
    axios
      .request(config)
      .then(response => {
        console.log('Get doctors response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Get doctors   error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};




export const GetmdSteward = async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/md_steward`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('Get md steward config', config);
    axios
      .request(config)
      .then(response => {
        console.log('Get md steward response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Get md steward error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};




export const GetCultureSource= async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/culture_source`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('Get culture source config', config);
    axios
      .request(config)
      .then(response => {
        console.log('Get culture source response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('Get culture source error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};





export const GetUpdatePatientsDetails= async (formdata) => {
  return new Promise((resolve, reject) => {
    const config = {
      method: 'post',
      url: `${API_URL}/api/v1/user/update_patients_complete_details`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };
    console.log('update patientssource config', config);
    axios
      .request(config)
      .then(response => {
        console.log('update patients source response', response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.log('update patients source error', error);
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error);
        } else {
          reject(error);
        }
      });
  });
};






