export default function extract(specifications) {
    const result = [];
    
    specifications.special.forEach(elem => {
      const { id, name, description = 'Описание недоступно', icon } = elem;
      result.push({id, name, description, icon});
    });
  
    return result;
  }