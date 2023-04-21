export const getBarChartData = (data) => {
    const result = [{}]
    const results2 = []
    console.log(data)
    data.map((item) => {
        if(result[item.createdAt.substring(0, 10)]){
            if(item.name[0] == 'T')
                result[item.createdAt.substring(0, 10)].hunt += item.speed.timeTaken
            else 
                result[item.createdAt.substring(0, 10)].puzzle += item.speed.timeTaken
        } else {
            if(item.name[0] == 'T')
                result[item.createdAt.substring(0, 10)] = {
                    name: item.createdAt.substring(0, 10),
                    hunt: item.speed.timeTaken,
                    puzzle: 0
                }
            else
                result[item.createdAt.substring(0, 10)] = {
                    name: item.createdAt.substring(0, 10),
                    hunt: 0,
                    puzzle: item.speed.timeTaken
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