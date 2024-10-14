

const counBe = 1300;

const hour = 60;
const day = 1440;
const week = 10080;

if (counBe / week >= 1){
    const remainingWeeks = counBe / week
    const remainingDaysInMinutes = counBe % week
    const weekMessage = math.floor(remainingWeeks) === 1 ? 'week' : 'weeks';
    const daysMessage = math.floor(remainingDaysInMinutes / day) > 1? 'days' : 'day'
    console.log(`${Math.floor(remainingWeeks)}${weekMessage} ${Math.floor(remainingDaysInMinutes / day)}${daysMessage}`)

}else if (counBe / day >= 1){
    const remainingDays = counBe / day
    const remainingHoursInMinutes = counBe % day
    console.log(`${Math.floor(remainingDays)} d ${Math.floor(remainingHoursInMinutes / day)}h`)
} else if (counBe / hour >= 1){
    const remainingHour = counBe / hour
   
    console.log(`${Math.floor(remainingHour)} h ${Math.floor(counBe % hour)}m`)
}else{
    console.log('less than an hour')
}
