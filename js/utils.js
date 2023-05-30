let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const getCurrentDateTime = () => {
    console.log('getCurrentDateTime() CALLED!!');

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let day = today.getDay();

    return `[${year}/${month}/${date}/${days[day]}] `;
}

/* 콘솔 로그 개발단계에서는 쓰지만, 배포 후엔 안쓰므로 로그 안보이게 설정 */
const consoleFlag = false;
if(!consoleFlag){
    console = {};
    console.log = function(){};
    console.warn = function(){};
    console.error = function(){};
}
/*---------------------------------------------------------------*/  