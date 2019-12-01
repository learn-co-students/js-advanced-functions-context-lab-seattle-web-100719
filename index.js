/* Your Code Here */

function createEmployeeRecord(e){
    let h={}
    h.firstName =e[0]
    h.familyName =e[1]
    h.title =e[2]
    h.payPerHour =e[3]
    h.timeInEvents =[]
    h.timeOutEvents =[]
    return h
}

function createEmployeeRecords(arrays){
    const newEmployeeRecords = arrays.map(e => createEmployeeRecord(e))
    return newEmployeeRecords
}


function createTimeInEvent(dateTimeString){
    this.timeInEvents.push({type: "TimeIn", date: dateTimeString.split(' ')[0], hour: Number(dateTimeString.split(' ')[1])})

    return this
}

function createTimeOutEvent(dateTimeString){
    this.timeOutEvents.push({type: "TimeOut", date: dateTimeString.split(' ')[0], hour: Number(dateTimeString.split(' ')[1])})

    return this
}


function hoursWorkedOnDate(date){
    const timeOut = this.timeOutEvents.find(t => t.date === date)
    const timeIn = this.timeInEvents.find(t => t.date === date)
    return (timeOut.hour - timeIn.hour)/100
 }


 function wagesEarnedOnDate(date){
    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
 }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(emplyees){
    return emplyees.reduce(function(memo, emplyee) {
                    return (memo +  allWagesFor.call(emplyee))
                    }, 0);
 }

 function findEmployeeByFirstName(emplyees, name){
    return emplyees.find(emplyee => emplyee.firstName === name)

}