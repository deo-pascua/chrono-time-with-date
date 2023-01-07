function updateChronoDisplay(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hrs = now.getHours(),
        mins = now.getMinutes(),
        secs = now.getSeconds(),
        pr = "AM";
        
        if(hrs == 0){
            hrs = 12;
        }
        if(hrs > 12){
            hrs = hrs - 12;
            pr = "PM";
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n= 0 + n);
            return n;
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var ids = ["day-name", "month", "day-num", "year", "hours", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hrs.pad(2), mins.pad(2), secs.pad(2), pr];

        for(var count = 0; count < ids.length; count++)
        document.getElementById(ids[count]).firstChild.nodeValue = values[count];
}

function initChrono(){
    updateChronoDisplay();
    window.setInterval("updateChronoDisplay()",1);
}