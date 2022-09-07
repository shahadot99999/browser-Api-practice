//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

const getUserNumber = () => {
    const number = prompt('Tell us your number:');
    const num = parseInt(number);
    const num1 = num + 200;
    console.log(num1);
    alert(num1);
}