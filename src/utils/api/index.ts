import { showMessage } from 'react-native-flash-message';

export const getResource = async (reqName: string) => {
  try {
    const response = await fetch(
      `http://192.168.0.124/apex/hs/client/${reqName}`,
      {
        headers: {
          Authorization: 'Basic Ym9zczox',
        },
      },
    );

    if (!response.ok) {
      if (response.status === 500) {
        const text = await response.text();
        throw Error(text);
      }
      throw Error(`Ошибка подключения ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    showMessage({
      message: 'Ошибка',
      description: err.message,
      type: 'danger',
    });
    throw Error(err);
  }
};

export const sendData = async (reqName: string, body: any) => {
  try {
    const response = await fetch(
      `http://192.168.0.124/apex/hs/client/${reqName}`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic Ym9zczox',
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      if (response.status === 500) {
        const text = await response.text();
        throw Error(text);
      }
      throw Error(`Ошибка подключения ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    showMessage({
      message: 'Ошибка',
      description: err.message,
      type: 'danger',
    });
    throw Error(err.message);
  }
};
