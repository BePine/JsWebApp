const heading = document.querySelector('h1')
const loadingHover = document.querySelector('.loadingHover')
    let count = 0
    let secCount = 0
    const onloadScript = () => {
        setInterval(changeHeading, 700);
      
    }
    const changeHeading = () => {
        if(count<3){
            heading.innerHTML += '.'
            count++
        }
        else if(secCount===1){
            secCount=0
            loadingHover.style.display="flex"
            setTimeout(() => {
                window.location.replace('../SidePage/sidePage.html')
            }, 600);
        }
        else{
            count=0
            secCount++
            heading.innerHTML = 'Website is work in progress'
        }    
    }