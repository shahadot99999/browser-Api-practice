//console.log('location - confirm');

//৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

const askSomething = () => {
    const decision = confirm('Are you looking your websites location?')
    console.log(decision);
    if (decision === true) {

        console.log(window.location.href = 'https://www.programming-hero.com/');
    }
    else {
        alert('Please try again. your website is wrong');
    }
}

//৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো।
// What Are Cookies?
// Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network. Specific cookies known as HTTP cookies are used to identify specific users and improve your web browsing experience.
// 1) Data stored in a small text File.
// 2) Naturally sent by visited websites.
// 3) sent to users computer through browser.
// 4) it is not a Program , does not perform function.
// 5)store key-value pair .

// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )
// localStorage:
// store data in browser without any expiration Date.
// save data in key/ value pairs in the browser.
// data is not deleted when the browser is closed .
// data is available for future sessions.

// session storage:
// stores data in browser for a session.
// saves data in key/value pairs in the browser.
// data is deleted when the browser is closed.
// data is not available for future session. 


