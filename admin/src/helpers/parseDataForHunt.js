export const getDataForHuntBarChart = (data) => {
    const result = [
        {name: 'riddle 1',time: 0, attempts: 0}, 
        {name: 'riddle 2',time: 0, attempts: 0}, 
        {name: 'riddle 3',time: 0, attempts: 0}, 
        {name: 'riddle 4',time: 0, attempts: 0}, 
        {name: 'riddle 5',time: 0, attempts: 0}]

    console.log(data)

    const finalData = data.filter((item) => { return item.category === 'hunt'})

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

    console.log(result)
    return result
}