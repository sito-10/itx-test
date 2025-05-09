function saveCache(key, data) {
    const item = { 
        value: data, 
        expiry: Date.now() + 3600000 // 1 hora
    }; 
    
    localStorage.setItem(key, JSON.stringify(item));
}
  
function getCache(key) {
    const itemStr = localStorage.getItem(key);
    if( !itemStr) {
        return null;
    }
    
    const item = JSON.parse(itemStr);
    
    if( Date.now() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }
    
    return item.value;
}
  