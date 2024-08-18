setInterval(function(){
    const now=new Date();
    const next_year=now.getFullYear();
    const next_new_year=new Date(`January 1, ${next_year+1} 00:00:00`);
    const timeDifference = next_new_year - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    document.getElementById('year').textContent = next_year+1;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('mins').textContent = minutes;
    document.getElementById('secs').textContent = seconds;
},1000)