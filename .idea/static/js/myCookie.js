class MyCookie {
    domainName = null;
    days = null;

    constructor(domainName = '.lh.com', days = 10) {
        this.domainName = domainName;
        this.days = days;
    }

    // constructor() {
    //     this.domainName = '.lh.com';
    //     this.days = 10;
    // }

    setCookie(c_name, value) {
        setCookieAndTimeOut(c_name, value, this.days);
    }

    setCookieAndTimeOut(c_name, value, days) {
        var str = c_name + "=" + escape(value);
        if (days > 0) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            str += ";Path=/;domain=" + this.domainName;
            str += ";expires=" + date.toGMTString();
        }
        document.cookie = str;
    }
}

