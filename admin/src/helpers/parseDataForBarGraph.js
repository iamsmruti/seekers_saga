export const getBarChartData = (data) => {
    const result = [{}]
    const results2 = []

    data.map((item) => {
        if(result[item.createdAt.substring(0, 10)]){
            if(item.category === 'hunt')
                result[item.createdAt.substring(0, 10)].hunt += item.totalTime
            else 
                result[item.createdAt.substring(0, 10)].puzzle += item.totalTime
        } else {
            if(item.category === 'hunt')
                result[item.createdAt.substring(0, 10)] = {
                    name: item.createdAt.substring(0, 10),
                    hunt: item.totalTime,
                    puzzle: 0
                }
            else
                result[item.createdAt.substring(0, 10)] = {
                    name: item.createdAt.substring(0, 10),
                    hunt: 0,
                    puzzle: item.totalTime
                }
        }
    })

    for (const key in result) {
        if(result[key].name){
            results2.push(result[key])
        }
    }

    return results2
}