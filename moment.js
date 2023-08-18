function moment(date){
    if(!date){
        date = new Date()
    }else if(!(date instanceof Date)){
        date = new Date(date)
    }

    return {
        format(formatString){
            const months = [
                "January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"
            ]

            const days = [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ]

            formatString = formatString.replace('YYYY', date.getFullYear())
            formatString = formatString.replace('MM', String(date.getMonth() + 1).padStart(2, '0'))
            formatString = formatString.replace('DD', String(date.getDate()).padStart(2, '0'))
            formatString = formatString.replace('hh', String(date.getHours()).padStart(2, '0'))
            formatString = formatString.replace('mm', String(date.getMinutes()).padStart(2, '0'))
            formatString = formatString.replace('ss', String(date.getSeconds()).padStart(2, '0'))
            formatString = formatString.replace('dddd', days[date.getDay()])
            formatString = formatString.replace('MNMN', months[date.getMonth()+1])

            return formatString
        }
    }
}

console.log(moment().format('MNMN DD MM YYYY hh:mm:ss'));
console.log(moment().format('dddd/MNMN'));
