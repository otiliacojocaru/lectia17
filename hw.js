

const counBe = 1300;

const hour = 60;
const day = 1440;
const week = 10080;

if (counBe / week >= 1){
    const remainingWeeks = counBe / week
    const remainingDaysInMinutes = counBe % week
    console.log(`${Math.floor(remainingWeeks)} w ${Math.floor(remainingDaysInMinutes / day)}d`)

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
