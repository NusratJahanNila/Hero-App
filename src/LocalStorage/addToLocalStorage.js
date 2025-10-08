const getStoredData=()=>{
    const existDataStr=localStorage.getItem('install');
    if(existDataStr){
        const existData=JSON.parse(existDataStr);
        return existData;
    }
    else{
        return [];
    }
}

const addToLocalStorage=(data)=>{
    const existData=getStoredData();

    const alreadyExist = existData.some(item => item.id === data.id);

    if (alreadyExist) {
        return alert("Apps already Installed!!")
    }
    else {
        existData.push(data);
        const storedData = JSON.stringify(existData);
        localStorage.setItem('install', storedData);
    }

}
export {addToLocalStorage,getStoredData};