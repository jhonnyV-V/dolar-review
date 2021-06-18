const months = {
    jan: '01',
    feb:'02',
    mar:'03',
    apr:'04',
    may:'05',
    jun:'06',
    jul:'07',
    aug:'08',
    sep:'09',
    oct:'10',
    nov:'11',
    dec:'12',
}
// take as an imput  the result of new Date() and returns a formated date
// example: formatDate('Fri Mar 19 2021') and returns '2021/03/19'
export function formatDate(date){
    let splitDate = `${date}`.split(' ')
    let formatedDate = `${splitDate[3]}-${months[splitDate[1].toLowerCase()]}-${splitDate[2]}`
    return formatedDate

}
//takes as input this three parameters as integers and return
//the date in miliseconds from epox
export function getDate(year, month, day){
    let date = Date.UTC(year,month -1, day +1)
    return date
}

export function formatNumber(number){
    if(isNaN(number)){
        return 0
    }
    let formatedNumber = Number(number).toLocaleString('en-US')
    let splitNumber = formatedNumber.split('.')
    splitNumber[0] = splitNumber[0].replace(',','.')
    formatedNumber = splitNumber.join(',')
    return formatedNumber
}

export const colors = {
    "DolarToday":'#ff0000',
    "AirTM (Sell)":"#FF22aa",
    "AirTM (Market)":"#aa95FF",
    "AirTM (Buy)":"#22ff99",
    "AKBFintech (Recommended)":"#0000ff",
    "AKBFintech (Original)":"#ffff00"
}
