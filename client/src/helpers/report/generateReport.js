export const generateReport = (tempSpeed, tempAttempts, total) => {
    let speed
    let accuracy
    let intellectual

    if(tempSpeed <= 60 && tempSpeed != 0){
      speed = {
        grade: 'A+',
        remark: 'Lightening Fast',
        timeTaken: tempSpeed
      }
    } else if ( tempSpeed > 60 && tempSpeed < 80) {
      speed = {
        grade: 'A',
        remark: 'Normal',
        timeTaken: tempSpeed
      }
    } else {
      speed = {
        grade: 'B',
        remark: 'You need some work',
        timeTaken: tempSpeed
      }
    }

    if(Number(tempAttempts) === total){
      accuracy = {
        grade: 'A+',
        remark: 'Pin Point',
        attemptsTaken: tempAttempts
      }
    } else if(Number(tempAttempts) > total && Number(tempAttempts) <= total/2) {
      accuracy = {
        grade: 'A',
        remark: 'Umm! Okay',
        attemptsTaken: tempAttempts
      }
    } else {
      accuracy = {
        grade: 'B',
        remark: 'Not Okay',
        attemptsTaken: tempAttempts
      }
    }

    let tempIntellectual = (tempSpeed * tempAttempts)

    if(tempIntellectual <= 300 && tempIntellectual !== 0){
      intellectual = {
        grade: 'A+',
        remark: 'Cunning Fox',
        score: tempIntellectual
      }
    } else if(tempAttempts > 300 && tempAttempts <= 560) {
      intellectual = {
        grade: 'A',
        remark: 'Usual Being',
        score: tempIntellectual
      }
    } else {
      intellectual = { 
        grade: 'B',
        remark: 'Fat Brain',
        score: tempIntellectual
      }
    }
    
    return {
        speed, accuracy, intellectual
    }
  }