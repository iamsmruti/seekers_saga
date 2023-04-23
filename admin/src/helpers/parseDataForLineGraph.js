export const getLineChartData = (response) => {
    const result = [{}]
    const results2 = []
    
    response.map((item) => {
        if(result[item.createdAt.substring(0, 10)]){
            result[item.createdAt.substring(0, 10)].newUser++
        } else {
            result[item.createdAt.substring(0, 10)] = {
                name: item.createdAt.substring(0, 10),
                newUser: 1
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