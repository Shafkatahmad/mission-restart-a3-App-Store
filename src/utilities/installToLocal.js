  const getStoredAppledList = () => {
    const storedListStr = localStorage.getItem('app-list');
    if(storedListStr) {
      const storedList = JSON.parse(storedListStr);
      return storedList;
    }
    else {
      return [];
    }
  }

  const appInstalled = (id) => {
    const storedList = getStoredAppledList();
    return storedList.includes(id);
  }
  const addToStoredAppList = (id) => {
    const storedList = getStoredAppledList();
    if(storedList.includes(id)) {
      console.log(id, 'this app already exits');
    }
    else {
      storedList.push(id);
      const storedListStr = JSON.stringify(storedList);
      localStorage.setItem('app-list', storedListStr);
    }
  }

  const removeAppFromLocalStorage = (idToRomove) => {
    const storedList = getStoredAppledList();

    const updatedList = storedList.filter(id => id != idToRomove);
    const updatedListStr = JSON.stringify(updatedList);
    localStorage.setItem('app-list', updatedListStr);

  }
  export {getStoredAppledList, addToStoredAppList, appInstalled, removeAppFromLocalStorage}