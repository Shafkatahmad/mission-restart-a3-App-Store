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

export {getStoredAppledList, addToStoredAppList, appInstalled}