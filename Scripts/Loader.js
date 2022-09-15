const heading = document.querySelector('h1')
const loadingHover = document.querySelector('.loadingHover')
const container = document.querySelector('.container')
const node = document.createElement('h4')
const textNode = document.createTextNode('you will be redirected to side page...')
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
            node.appendChild(textNode)
            container.appendChild(node)
            setTimeout(() => {
                loadingHover.style.display="flex"
                setTimeout(() => {
                    window.location.replace('../SidePage/sidePage.html')
                }, 600);
            }, 600);
            
        }
        else{
            count=0
            secCount++
            heading.innerHTML = 'Website is work in progress'
        }    
    }