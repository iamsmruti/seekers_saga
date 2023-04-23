export const getDataForPuzzleBarChart = (data) => {
    const result = [
        {name: 'step 1' ,time: 0, attempts: 0}, 
        {name: 'step 2' ,time: 0, attempts: 0}, 
        {name: 'step 3' ,time: 0, attempts: 0}, 
        {name: 'step 4' ,time: 0, attempts: 0}, 
        {name: 'step 5' ,time: 0, attempts: 0}, 
        {name: 'step 6' ,time: 0, attempts: 0}, 
        {name: 'step 7' ,time: 0, attempts: 0},
        {name: 'step 8' ,time: 0, attempts: 0},
        {name: 'step 9' ,time: 0, attempts: 0}]

    const finalData = data.filter((item) => { return item.category === 'puzzle'})

    finalData.map((item, index) => {
        if(index === finalData.length - 1){
            item.stats.map((itemStat, index) => {
                result[index].time += itemStat.time
                result[index].time /= finalData.length

                result[index].attempts += itemStat.attempts
                result[index].attempts /= finalData.length
            })
        } else {
            item.stats.map((itemStat, index) => {
                result[index].time += itemStat.time
                result[index].attempts += itemStat.attempts
            })
        }
    })

    return result
}