function solution(name, yearning, photo) {
    const answer = new Array(photo.length).fill(0);
    
    photo.forEach((item, outerIndex) => {
        item.forEach((x, innerIndex) => {
            const nameIndex = name.indexOf(x);
            if (nameIndex !== -1) {
                const result = yearning[nameIndex];
                answer[outerIndex] += result;
            }
        });
    });
    
    return answer
}
