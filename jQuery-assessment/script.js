
  // day-date function
  $(function showday(){
    let dt = new Date();
    let day = dt.getDay() + 1;
    let m = dt.getMonth() + 1;
    let d = dt.getDate();
    let year = dt.getFullYear();

    // 0-9 logic in day date format
    d = d<10 ? "0"+d : d;

    let days = day  + ","+ " " + m + " " + d + "," + " " + year;

    $("#day").html(days);
  })

  // time-date function
  $(function showtime(){
      let dt = new Date();
    let h = dt.getHours();
    let m = dt.getMinutes();
    let s = dt.getSeconds();
    let session = "AM";

    // 12 hours logic
    if(h>12){
      h = h - 12; //(h= h-12 ) h = 13 -12 =1
    }

    // AM to PM logic/functionality
    if(h>=12){
      session ="PM"
    }

    // 0-9 clock format logic
     h = h<10 ? "0"+h : h;
     m = m<10 ? "0"+m : m;
     s = s<10 ? "0"+s : s;
    

    let clock = h  + ":" + m + ":" + s + " " + session;

    $("#time").html(clock);

    setInterval(showtime, 1000);
  })