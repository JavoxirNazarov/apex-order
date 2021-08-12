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
    throw Error(err);
  }
};

// 'Content-Type': 'multipart/form-data',
